// scripts/extract-lottie-assets.mjs
// Uso: node scripts/extract-lottie-assets.mjs public/assets/lottie/intro.json
import fs from "node:fs";
import path from "node:path";

const [, , inputPath] = process.argv;
if (!inputPath) {
    console.error("Uso: node extract-lottie-assets.mjs <ruta-al-json>");
    process.exit(1);
}

const outputDir = path.join(path.dirname(inputPath), "images");
fs.mkdirSync(outputDir, { recursive: true });

const raw = fs.readFileSync(inputPath, "utf-8");
const data = JSON.parse(raw);

let extractedCount = 0;
let savedBytes = 0;

data.assets = data.assets.map((asset, index) => {
    // Solo tocamos assets con imagen embebida en base64 ("e": 1 = embedded)
    if (asset.e !== 1 || typeof asset.p !== "string" || !asset.p.startsWith("data:image")) {
        return asset;
    }

    const match = asset.p.match(/^data:image\/(\w+);base64,(.+)$/);
    if (!match) return asset;

    const [, extension, base64Data] = match;
    const buffer = Buffer.from(base64Data, "base64");
    const fileName = `img_${index}.${extension}`;

    fs.writeFileSync(path.join(outputDir, fileName), buffer);

    savedBytes += asset.p.length - fileName.length;
    extractedCount += 1;

    // "e": 0 = ya no esta embebido, "u" = carpeta, "p" = nombre de archivo
    return { ...asset, e: 0, u: "images/", p: fileName };
});

fs.writeFileSync(inputPath, JSON.stringify(data));

console.log(`Extraídas ${extractedCount} imágenes a ${outputDir}`);
console.log(`JSON reducido en ~${(savedBytes / 1024 / 1024).toFixed(2)} MB`);