import Image from "next/image";
import { site } from "@/data/site-content";
import styles from "./Sections.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow" data-hero-reveal>{site.hero.eyebrow}</p>
          <h1 id="hero-title" tabIndex={-1}>
            {site.hero.titleLines.map(line => <span className={styles.titleLine} key={line}><span data-hero-line>{line}</span></span>)}
          </h1>
          <p className={`body-copy ${styles.heroDescription}`} data-hero-reveal>{site.hero.description}</p>
          <div data-hero-reveal><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="button">Agendar atendimento <i className="bi bi-arrow-up-right" aria-hidden="true" /></a></div>
          <p className={styles.heroCredentials} data-hero-reveal>{site.role} | {site.positioning} <span /> {site.crp}</p>
        </div>
        <div className={styles.heroVisual} data-portal-target>
          <div className={styles.architecture} data-portal-image>
            <Image src={site.images.architecture} alt="Arco arquitetônico em tons de areia, iluminado pela luz natural. Uma imagem conceitual de passagem e acolhimento." fill sizes="(max-width: 800px) 100vw, 50vw" preload className={styles.architectureImage} />
          </div>
          <div className={styles.portalOutline} aria-hidden="true" />
          <span className={styles.visualNote}>Todo encontro começa com uma abertura.</span>
        </div>
      </div>
      <div className={`container ${styles.heroFoot}`}>
        <a href="#escuta"><span className={styles.scrollLine} aria-hidden="true" /> Conheça este espaço <i className="bi bi-arrow-down" aria-hidden="true" /></a>
        <span>Escuta. Singularidade. Tempo.</span>
      </div>
    </section>
  );
}
