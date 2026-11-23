import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, stat, readdir } from "node:fs/promises";
import path from "node:path";
const html = await readFile("index.html", "utf8");
test("All local anchors and published resources resolve", async () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((x) => x[1]));
  const attrs = [...html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)].map(
    (x) => x[1],
  );
  for (const value of attrs) {
    if (value.startsWith("#")) assert.ok(ids.has(value.slice(1)), value);
    else if (!/^(https?:|mailto:)/.test(value))
      assert.ok((await stat(path.join("dist", value))).isFile(), value);
  }
});
test("Production excludes private sources and alternate CVs", async () => {
  const entries = await readdir("dist");
  for (const file of entries)
    assert.ok(
      !/\.md$|\.mjs$|\.env|package|node_modules|tests|Con_Foto|Estilo_Original/.test(
        file,
      ),
      file,
    );
  const pdf = await readFile(
    "dist/CV_Viorel_Gil_Ruiz_Alejos_Profesional_2026.pdf",
  );
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
});
test("No inaccessible private project links or invented performance metrics", () => {
  assert.doesNotMatch(
    html,
    /href="[^"]*(?:Backup-Manager|CertifyHub|IBERSOFT-IT-DIAGNOSTIC)/,
  );
  assert.match(html, /certificaciones no obtenidas/);
  assert.match(html, /sesión se simula/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
});
