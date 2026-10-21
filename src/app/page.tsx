import { Hero } from "@/components/sections/Hero";
import { About, Approach, Audience, FinalCTA, Manifesto, Process } from "@/components/sections/ContentSections";
import { FAQ } from "@/components/sections/FAQ";
import { PortalExperience } from "@/components/animations/PortalExperience";
import { site } from "@/data/site-content";
import styles from "@/components/sections/Sections.module.css";

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: site.role, url: site.url, telephone: site.phone, identifier: site.crp, image: `${site.url}${encodeURI(site.images.portrait)}`, knowsAbout: ["Psicanálise", "Psicologia", "Neuropsicologia"] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main id="conteudo"><Hero /><Manifesto /><About /><Approach /><Audience /><Process /><FAQ /><FinalCTA /></main>
      <a className={styles.floatingWhatsapp} href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Joacylanny pelo WhatsApp"><i className="bi bi-whatsapp" aria-hidden="true" /></a>
      <PortalExperience />
    </>
  );
}
