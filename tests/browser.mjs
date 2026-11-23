import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { server } from "../scripts/serve.mjs";
await mkdir("tmp/qa", { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const errors = [];
const results = [];
try {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const check = async () =>
      page.evaluate(() => ({
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
        broken: [...document.images].filter(
          (i) => !i.complete || !i.naturalWidth,
        ).length,
      }));
    let dimensions = await check();
    assert.ok(
      dimensions.scroll <= width,
      `Overflow ${width}: ${dimensions.scroll}`,
    );
    assert.equal(dimensions.broken, 0);
    for (const detail of await page.locator("details").all())
      await detail.locator("summary").click();
    dimensions = await check();
    assert.ok(dimensions.scroll <= width, `Open details overflow ${width}`);
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    results.push({
      width,
      overflow: false,
      violations: axe.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    });
    assert.equal(axe.violations.length, 0, JSON.stringify(results.at(-1)));
    if ([390, 1440].includes(width)) {
      await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
      await page.screenshot({
        path: `tmp/qa/portfolio-${width}.png`,
        fullPage: true,
        animations: "disabled",
      });
      await page.screenshot({
        path: `tmp/qa/hero-${width}.png`,
        animations: "disabled",
      });
    }
    if (width < 761) {
      await page.locator(".menu-toggle").click();
      assert.equal(
        await page.locator(".menu-toggle").getAttribute("aria-expanded"),
        "true",
      );
      await page.keyboard.press("Escape");
      assert.equal(
        await page.locator(".menu-toggle").getAttribute("aria-expanded"),
        "false",
      );
      assert.ok(
        await page
          .locator(".menu-toggle")
          .evaluate((e) => e === document.activeElement),
      );
      await page.locator(".menu-toggle").click();
      await page.locator('#main-nav a[href="#proyectos"]').click();
      assert.equal(
        await page.locator(".menu-toggle").getAttribute("aria-expanded"),
        "false",
      );
    }
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await page
      .locator(".hero-copy")
      .evaluate((e) => getComputedStyle(e).animationName),
    "none",
  );
  const download = page.waitForEvent("download");
  await page.locator(".hero-portrait a[download]").click();
  assert.match((await download).suggestedFilename(), /Profesional_2026\.pdf$/);
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const noJS = await context.newPage();
  await noJS.goto("http://127.0.0.1:4173");
  assert.ok(await noJS.locator("#main-nav").isVisible());
  await noJS.locator("details").first().locator("summary").click();
  assert.ok(
    (await noJS.locator("details").first().getAttribute("open")) !== null,
  );
  await context.close();
  assert.deepEqual(errors, []);
  await writeFile(
    "tmp/qa/browser-results.json",
    JSON.stringify(
      {
        results,
        errors,
        checks: [
          "menu, Escape, focus return, navigation",
          "details",
          "CV download",
          "reduced motion",
          "JavaScript disabled",
        ],
      },
      null,
      2,
    ),
  );
  console.log(
    "Browser checks passed: 7 widths, axe AA, navigation, details, CV, reduced motion, no JS.",
  );
} finally {
  await browser.close();
  server.close();
}
