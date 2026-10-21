import sharp from "sharp";
import { mkdir } from "node:fs/promises";
// Recurso oficial identificado no cabeçalho de jpcreative.com.br em 21/10/2026.
const response = await fetch("https://jpcreative.com.br/_next/static/media/Logo.2i0r0co5qvywa.jpeg");
if (!response.ok) throw new Error(`Falha ao obter a marca: ${response.status}`);
await mkdir("public/images/brand", { recursive: true });
await sharp(Buffer.from(await response.arrayBuffer())).resize({ width: 300 }).webp({ quality: 90 }).toFile("public/images/brand/jpcreative.webp");
console.log("Marca oficial salva em public/images/brand/jpcreative.webp");
