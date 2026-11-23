import { readFile, writeFile, mkdir } from "node:fs/promises";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "@napi-rs/canvas";
const doc = await getDocument({
  data: new Uint8Array(
    await readFile("CV_Viorel_Gil_Ruiz_Alejos_Profesional_2026.pdf"),
  ),
  useSystemFonts: true,
}).promise;
await mkdir("tmp/qa", { recursive: true });
for (let number = 1; number <= doc.numPages; number++) {
  const page = await doc.getPage(number);
  const viewport = page.getViewport({ scale: 1.5 });
  const canvas = createCanvas(
    Math.ceil(viewport.width),
    Math.ceil(viewport.height),
  );
  await page.render({ canvasContext: canvas.getContext("2d"), viewport })
    .promise;
  await writeFile(`tmp/qa/cv-${number}.png`, canvas.toBuffer("image/png"));
}
console.log(`CV rendered: ${doc.numPages} page(s).`);
