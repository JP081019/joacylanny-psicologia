import sharp from "sharp";
import { mkdir } from "node:fs/promises";
const input = process.argv[2];
if (!input) throw new Error("Informe o caminho da imagem arquitetônica gerada.");
await mkdir("public/images/architecture", { recursive: true });
await sharp(input).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 87 }).toFile("public/images/architecture/portal.webp");
console.log("Arquitetura otimizada: public/images/architecture/portal.webp");
