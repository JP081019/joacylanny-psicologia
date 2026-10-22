import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site-content";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-cormorant", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: "%s | Joacylanny Psicologia" },
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", siteName: site.brand, title: site.seo.title, description: site.seo.description, url: site.url, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.seo.title }] },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description, images: ["/opengraph-image"] },
  icons: { icon: "/logo/Arco Minimalista em Tons Terrosos.ico", apple: site.images.monogram },
};

export const viewport: Viewport = { themeColor: "#F6F1EB" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
