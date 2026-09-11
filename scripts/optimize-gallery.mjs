// One-off maintenance script: resizes/compresses gallery photos in place
// and writes their final dimensions to a manifest so components can set
// width/height attributes without re-reading image files at build time.
//
// Run with: node scripts/optimize-gallery.mjs
import { readdirSync, statSync, writeFileSync, renameSync } from "fs";
import { join } from "path";
import sharp from "sharp";

const GALLERY_DIR = join(process.cwd(), "public", "gallery");
const MANIFEST_PATH = join(process.cwd(), "src", "data", "gallery-dimensions.json");
const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 78;

const files = readdirSync(GALLERY_DIR).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

const manifest = {};
let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const filePath = join(GALLERY_DIR, file);
  const before = statSync(filePath).size;
  totalBefore += before;

  const image = sharp(filePath);
  const metadata = await image.metadata();

  const resized = await image
    .resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    })
    .rotate() // apply EXIF orientation, then strip it
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();

  const tempPath = filePath + ".tmp";
  writeFileSync(tempPath, resized);
  renameSync(tempPath, filePath);
  const after = resized.length;
  totalAfter += after;

  const finalMeta = await sharp(resized).metadata();
  manifest[file] = { width: finalMeta.width, height: finalMeta.height };

  console.log(
    `${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${finalMeta.width}x${finalMeta.height})`,
  );
}

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`,
);
console.log(`Manifest written to ${MANIFEST_PATH}`);
