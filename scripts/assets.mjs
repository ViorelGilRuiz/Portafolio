import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
await mkdir("assets/fonts", { recursive: true });
await sharp("viorel-gil.jpg")
  .resize({ width: 900, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile("assets/portrait.webp");
const social = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f4f0e8"/><path d="M65 105h1070M65 540h1070" stroke="#b7beb3"/><text x="65" y="76" font-family="Arial" font-size="21" fill="#101820">VIOREL GIL RUIZ-ALEJOS / ZARAGOZA, ES</text><text x="65" y="250" font-family="Arial" font-size="88" fill="#101820">Sistemas</text><text x="65" y="365" font-family="Georgia" font-style="italic" font-size="100" fill="#101820">× Software.</text><rect x="65" y="430" width="280" height="55" fill="#c5eb72"/><text x="87" y="465" font-family="Arial" font-size="20" fill="#101820">DESARROLLO FULL STACK</text><text x="65" y="584" font-family="Arial" font-size="20" fill="#58616a">viorelgilruiz.netlify.app</text></svg>`;
const portrait = await sharp("viorel-gil.jpg")
  .resize(320, 430, { fit: "cover", position: "north" })
  .toBuffer();
await sharp(Buffer.from(social))
  .composite([{ input: portrait, left: 815, top: 110 }])
  .jpeg({ quality: 90 })
  .toFile("assets/social.jpg");
if (process.argv.includes("--font")) {
  const font = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      },
    },
  );
  if (!font.ok) throw new Error(`Font CSS: ${font.status}`);
  const css = await font.text();
  const urls = [...css.matchAll(/url\((https[^)]+)\)/g)];
  const url = urls.at(-1)?.[1];
  if (!url) throw new Error("Font URL missing");
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Font: ${response.status}`);
  await writeFile(
    "assets/fonts/inter-latin.woff2",
    Buffer.from(await response.arrayBuffer()),
  );
  const license = await fetch(
    "https://raw.githubusercontent.com/rsms/inter/master/LICENSE.txt",
  );
  if (!license.ok) throw new Error(`Font license: ${license.status}`);
  await writeFile("assets/fonts/OFL.txt", await license.text());
}
