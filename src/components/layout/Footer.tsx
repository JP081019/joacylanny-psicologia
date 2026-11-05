import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "@/data/site-content";
import styles from "./Layout.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerMain}`}>
        <div className={styles.footerIdentity}>
          <Image src={site.images.footerLogo} alt={site.brand} width={2098} height={749} sizes="216px" className={styles.footerLogo} />
          <p>{site.role}<br />{site.crp}</p>
        </div>
        <nav aria-label="Navegação do rodapé" className={styles.footerNav}>
          {navigation.slice(1).map(item => <Link href={`/${item.href}`} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className={styles.footerContact}>
          <span className="eyebrow">Um primeiro passo</span>
          <a className={styles.footerCta} href={site.whatsapp} target="_blank" rel="noopener noreferrer">Vamos conversar <i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
          <a href={`tel:${site.phoneInternational}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/politica-de-privacidade">Política de privacidade</Link>
        </div>
      </div>
      <div className={`container ${styles.footerBottom}`}>
        <p>© {new Date().getFullYear()} {site.brand}. Todos os direitos reservados.</p>
        <a href="https://jpcreative.com.br" target="_blank" rel="noopener noreferrer" className={styles.credit}>
          <Image src="/logo/Logo - JP Creative/Logotipo JP Minimalista em Fundo Escuro.png" alt="" width={1254} height={1254} sizes="44px" className={styles.creditLogo} />
          <span>Desenvolvido por <strong>JP Creative</strong></span>
        </a>
      </div>
    </footer>
  );
}
