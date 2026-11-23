import { mkdir, copyFile, cp, readdir, unlink } from "node:fs/promises";
import path from "node:path";
export const publicFiles = [
  "index.html",
  "style.css",
  "script.js",
  "robots.txt",
  "sitemap.xml",
  "viorel-gil.jpg",
  "CV_Viorel_Gil_Ruiz_Alejos_Profesional_2026.pdf",
];
// Only remove stale files from this build's known output; never publish the repository root.
await mkdir("dist", { recursive: true });
for (const entry of await readdir("dist", { withFileTypes: true })) {
  if (entry.isFile() && !publicFiles.includes(entry.name))
    await unlink(path.join("dist", entry.name));
}
for (const file of publicFiles) await copyFile(file, path.join("dist", file));
await cp("assets", "dist/assets", { recursive: true });
console.log("Production build: dist/ (explicit public files + assets)");
