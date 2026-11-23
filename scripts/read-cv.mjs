import fs from "node:fs";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
for (const file of fs.readdirSync(".").filter((f) => f.endsWith(".pdf"))) {
  const doc = await getDocument({
    data: new Uint8Array(fs.readFileSync(file)),
    useSystemFonts: true,
  }).promise;
  let result = "";
  for (let i = 1; i <= doc.numPages; i++) {
    const content = await (await doc.getPage(i)).getTextContent();
    result += content.items.map((x) => ("str" in x ? x.str : "")).join(" ");
  }
  console.log(file, result);
}
