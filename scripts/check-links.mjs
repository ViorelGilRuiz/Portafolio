import { readFile, mkdir, writeFile } from "node:fs/promises";
const html = await readFile("index.html", "utf8");
const urls = [
  ...new Set([...html.matchAll(/href="(https:[^"]+)"/g)].map((x) => x[1])),
];
const results = [];
for (const url of urls) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    results.push({ url, status: response.status, ok: response.ok });
  } catch (error) {
    results.push({ url, error: error.message, ok: false });
  }
}
await mkdir("tmp/qa", { recursive: true });
await writeFile("tmp/qa/links.json", JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
if (results.some((r) => !r.ok)) process.exitCode = 1;
