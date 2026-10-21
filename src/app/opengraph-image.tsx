import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/site-content";

export const alt = "Joacylanny Psicologia — Um espaço para a sua história.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public", site.images.horizontalLogo));
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#F6F1EB", color: "#51433F", padding: 65 }}>
    {/* ImageResponse requires a native image with inline bytes. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={`data:image/png;base64,${logo.toString("base64")}`} width={650} height={260} alt="" style={{ objectFit: "contain" }} />
    <div style={{ display: "flex", fontFamily: "serif", fontSize: 54, marginTop: 25 }}>Um espaço para a sua história.</div>
    <div style={{ display: "flex", fontSize: 18, marginTop: 24 }}>{`${site.role} · ${site.crp}`}</div>
  </div>, { ...size });
}
