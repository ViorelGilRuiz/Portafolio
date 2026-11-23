import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { writeFile, mkdir } from "node:fs/promises";
import { server } from "./serve.mjs";
await mkdir("tmp/qa", { recursive: true });
const chrome = await launch({
  chromePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  chromeFlags: ["--headless=new", "--disable-gpu", "--no-first-run"],
});
try {
  const result = await lighthouse("http://127.0.0.1:4173", {
    port: chrome.port,
    output: "html",
    logLevel: "error",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });
  await writeFile("tmp/qa/lighthouse.html", result.report);
  const scores = Object.fromEntries(
    Object.entries(result.lhr.categories).map(([key, value]) => [
      key,
      Math.round(value.score * 100),
    ]),
  );
  await writeFile(
    "tmp/qa/lighthouse.json",
    JSON.stringify(
      {
        scores,
        metrics: {
          lcp: result.lhr.audits["largest-contentful-paint"].numericValue,
          cls: result.lhr.audits["cumulative-layout-shift"].numericValue,
        },
        failed: Object.entries(result.lhr.audits)
          .filter(([, a]) => a.score !== null && a.score < 1)
          .map(([id, a]) => ({ id, title: a.title, score: a.score })),
      },
      null,
      2,
    ),
  );
  console.log(JSON.stringify(scores));
} finally {
  await chrome.kill();
  server.close();
}
