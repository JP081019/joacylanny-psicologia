import Image from "next/image";
import { audiences, site, steps } from "@/data/site-content";
import { Monogram } from "@/components/ui/Monogram";
import styles from "./Sections.module.css";

export function Manifesto() {
  return (
    <section id="escuta" className={`container ${styles.manifesto}`} aria-labelledby="manifesto-title">
      <div className={styles.manifestoLabel}><span className="eyebrow">O valor da escuta</span><span className={styles.smallRule} /></div>
      <div>
        <h2 id="manifesto-title" className="section-title" data-reveal>{site.manifesto.title}</h2>
        <div className={styles.manifestoText}><span className={styles.asterisk} aria-hidden="true">✳</span><p className="body-copy">{site.manifesto.text}</p></div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className={styles.about} aria-labelledby="about-title">
      <div className={`container ${styles.aboutGrid}`}>
        <figure className={styles.portraitFigure}>
          <div className={styles.portraitFrame} data-image-reveal><Image src={site.images.portrait} alt="Joacylanny, psicóloga com atuação orientada pela Psicanálise, em um jardim com luz natural." fill sizes="(max-width: 800px) 90vw, 40vw" className={styles.portrait} /></div>
          <figcaption>{site.name} <span>{site.role} · {site.crp}</span></figcaption>
        </figure>
        <div className={styles.aboutCopy}>
          <span className="eyebrow">A pessoa por trás da escuta</span>
          <h2 id="about-title" className="section-title" data-reveal>Prazer, sou Joacylanny.</h2>
          {site.about.map(p => <p className="body-copy" key={p}>{p}</p>)}
          <ul className={styles.qualifications}>{site.qualifications.map(q => <li key={q}><i className="bi bi-plus" aria-hidden="true" />{q}</li>)}</ul>
          <a className="text-link" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Vamos conversar <i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section id="abordagem" className={`container ${styles.approach}`} aria-labelledby="approach-title">
      <div className={styles.sectionIntro}>
        <span className="eyebrow">A abordagem</span>
        <div>
          <h2 id="approach-title" className="section-title" data-reveal>{site.approach.title}</h2>
          <div className={styles.approachIntroduction}>{site.approach.paragraphs.map(p => <p className="body-copy" key={p}>{p}</p>)}</div>
        </div>
      </div>
      <div className={styles.approachRows}>
        {site.approach.concepts.map((concept, index) => <article className={styles.approachRow} key={concept.title}><span className={styles.rowIndex}>0{index + 1}</span><h3>{concept.title}</h3><p className="body-copy">{concept.text}</p><i className="bi bi-arrow-up-right" aria-hidden="true" /></article>)}
      </div>
    </section>
  );
}

export function Audience() {
  return (
    <section className={styles.audience} aria-labelledby="audience-title">
      <div className={`container ${styles.audienceGrid}`}>
        <div><span className="eyebrow">Para quem é este espaço</span><h2 id="audience-title" className="section-title" data-reveal>Cada história,<br />um encontro.</h2><p className="body-copy">Não é preciso ter tudo organizado para começar. O primeiro passo pode ser simplesmente querer falar.</p></div>
        <div className={styles.audienceList}>{audiences.map(a => <article key={a.title}><h3>{a.title}</h3><p className="body-copy">{a.text}</p></article>)}</div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="atendimento" className={`container ${styles.process}`} aria-labelledby="process-title">
      <div className={styles.processIntro}><span className="eyebrow">Como funciona</span><h2 id="process-title" className="section-title" data-reveal>Começar pode<br />ser mais simples.</h2><p className="body-copy">Um encontro de cada vez.<br />No ritmo da sua história.</p></div>
      <ol className={styles.timeline}>{steps.map((s, i) => <li key={s.title}><span className={styles.stepNumber}>0{i + 1}</span><h3>{s.title}</h3><p className="body-copy">{s.text}</p></li>)}</ol>
      <p className={styles.processNote}>Modalidade, frequência e demais detalhes do atendimento são combinados diretamente com a profissional.</p>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contato" className={styles.finalCta} aria-labelledby="contact-title">
      <div className={`container ${styles.finalGrid}`}>
        <div><span className="eyebrow">Um convite à sua história</span><h2 id="contact-title" data-reveal>Existe espaço<br />para a sua história.</h2><p>{site.finalCta.text}</p><a className="button button-light" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Entrar em contato <i className="bi bi-arrow-up-right" aria-hidden="true" /></a></div>
        <div className={styles.finalSymbol}><Monogram /><span>Escutar é abrir espaço.</span></div>
      </div>
    </section>
  );
}
