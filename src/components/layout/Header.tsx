"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { navigation, site } from "@/data/site-content";
import styles from "./Layout.module.css";

export function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  function closeMenu() {
    dialog.current?.close();
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/#inicio" aria-label={`${site.brand} — início`} className={styles.brand}>
          <Image src={site.images.horizontalLogo} alt={site.brand} width={1983} height={793} priority sizes="300px" />
        </Link>
        <nav aria-label="Navegação principal" className={styles.desktopNav}>
          {navigation.map(item => <Link href={`/${item.href}`} key={item.href}>{item.label}</Link>)}
        </nav>
        <a className={styles.headerCta} href={site.whatsapp} target="_blank" rel="noopener noreferrer">Agendar atendimento <i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
        <button ref={trigger} className={styles.menuTrigger} aria-label="Abrir menu" aria-expanded={open} aria-controls="menu-mobile" onClick={() => { dialog.current?.showModal(); setOpen(true); }}>
          <span /><span />
        </button>
      </div>
      <dialog ref={dialog} id="menu-mobile" className={styles.menuDialog} aria-label="Menu de navegação" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) closeMenu(); }}>
        <div className={styles.menuPanel}>
          <button className={styles.menuClose} onClick={closeMenu} aria-label="Fechar menu"><i className="bi bi-x-lg" aria-hidden="true" /></button>
          <span className="eyebrow">Joacylanny Psicologia</span>
          <nav aria-label="Navegação móvel">
            {navigation.map(item => <Link href={`/${item.href}`} key={item.href} onClick={closeMenu}>{item.label}</Link>)}
          </nav>
          <a className="button" href={site.whatsapp} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Agendar atendimento <i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
          <p>{site.role} · {site.crp}</p>
        </div>
      </dialog>
    </header>
  );
}
