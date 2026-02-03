import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "public");
const isDryRun = process.argv.includes("--dry-run");

async function findImages(dir) {
    const files = [];
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
            files.push(...(await findImages(fullPath)));
        } else if (/\.(jpe?g|png)$/i.test(item.name)) {
            files.push(fullPath);
        }
    }

    return files;
}

function formatSize(bytes) {
    return (bytes / 1024).toFixed(1) + " KB";
}

async function optimizeImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const originalBuffer = await fs.readFile(filePath);
    const originalSize = originalBuffer.length;

    let optimizedBuffer;
    let image = sharp(originalBuffer);

    // JPEG compresión avanzada con MozJPEG
    if (ext === ".jpg" || ext === ".jpeg") {
        image = image.jpeg({
            quality: 60, // Baja calidad para obtener una compresión agresiva
            mozjpeg: true, // Usando el optimizador de MozJPEG
            progressive: true, // Hacer la imagen progresiva
        });
    }
    // PNG compresión avanzada con Oxipng
    else if (ext === ".png") {
        image = image.png({
            compressionLevel: 9, // Nivel de compresión más alto
            adaptiveFiltering: true, // Uso de filtrado adaptativo
            palettes: true, // Reducir el número de colores de la imagen
            dither: 0, // Sin dithering (más compresión)
        });
    }

    optimizedBuffer = await image.toBuffer();
    const optimizedSize = optimizedBuffer.length;

    if (optimizedSize < originalSize) {
        const saved = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1);
        const relative = path.relative(distDir, filePath);
        console.log(`🧪 ${relative}: ${formatSize(originalSize)} → ${formatSize(optimizedSize)} (-${saved}%)`);

        if (!isDryRun) {
            await fs.writeFile(filePath, optimizedBuffer);
        }
    }
}

const run = async () => {
    const imagePaths = await findImages(distDir);
    if (imagePaths.length === 0) {
        console.log("ℹ️ No se encontraron imágenes.");
        return;
    }

    for (const file of imagePaths) {
        try {
            await optimizeImage(file);
        } catch (err) {
            console.error(`❌ Error procesando ${file}:`, err.message);
        }
    }

    console.log(isDryRun ? "🧪 Dry run completo. No se modificaron archivos." : "✅ Imágenes optimizadas con sharp.");
};

run();
