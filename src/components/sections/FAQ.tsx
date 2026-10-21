"use client";

import { useState } from "react";
import { faqs } from "@/data/site-content";
import styles from "./Sections.module.css";

export function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="duvidas" className={`container ${styles.faq}`} aria-labelledby="faq-title">
      <div><span className="eyebrow">Perguntas frequentes</span><h2 id="faq-title" className="section-title" data-reveal>Talvez você<br />queira saber.</h2></div>
      <div className={styles.accordion}>{faqs.map((f, i) => {
        const open = active === i;
        return <article className={styles.faqItem} key={f.question} data-open={open}>
          <h3><button aria-expanded={open} aria-controls={`answer-${i}`} id={`question-${i}`} onClick={() => setActive(open ? null : i)}>{f.question}<i className={`bi ${open ? "bi-dash" : "bi-plus"}`} aria-hidden="true" /></button></h3>
          <div id={`answer-${i}`} aria-labelledby={`question-${i}`} role="region" className={styles.faqAnswer} inert={!open}><div><p>{f.answer}</p></div></div>
        </article>;
      })}</div>
    </section>
  );
}
