import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site-content";
import styles from "./privacy.module.css";

export const metadata: Metadata = { title: "Política de privacidade", description: "Informações sobre privacidade, funcionamento deste site e contato pelo WhatsApp.", alternates: { canonical: "/politica-de-privacidade" } };

export default function Privacy() {
  return <main id="conteudo" className={`container ${styles.privacy}`}>
    <Link className="text-link" href="/">Voltar ao início</Link>
    <span className="eyebrow">Privacidade e cuidado</span>
    <h1>Política de privacidade</h1>
    <p>Atualizada em 21 de outubro de 2026.</p>
    <h2>Sobre este site</h2><p>Este site apresenta o trabalho de {site.name}, {site.role}, {site.crp}. Não há cadastro, formulário de atendimento ou coleta de informações clínicas por meio das páginas.</p>
    <h2>Dados de navegação</h2><p>A infraestrutura de hospedagem pode processar informações técnicas, como endereço IP, data, navegador e registros de acesso, para disponibilizar e proteger o site. Este projeto não inclui ferramentas de publicidade, pixels de rastreamento ou serviços de análise de audiência.</p>
    <h2>Preferência da animação</h2><p>O navegador armazena apenas um indicador temporário em sessionStorage, chamado joacylanny.portal.seen.v1, para que a introdução não se repita durante a mesma sessão. Esse indicador não identifica você e não é enviado ao servidor. Se o armazenamento estiver indisponível, o site continua funcionando.</p>
    <h2>Contato pelo WhatsApp</h2><p>Ao selecionar um botão de contato, você acessa um serviço externo, sujeito às políticas do WhatsApp. A mensagem sugerida solicita somente informações sobre o atendimento. Compartilhe dados pessoais ou informações de saúde apenas quando necessário, diretamente com a profissional.</p>
    <h2>Fontes, imagens e links externos</h2><p>As fontes e imagens são servidas pelo próprio site. O rodapé contém um link para a JPCreative. Sites e serviços externos seguem suas próprias práticas de privacidade.</p>
    <h2>Suas solicitações</h2><p>Para dúvidas sobre privacidade e sobre o tratamento de dados fornecidos diretamente no contato, fale com a profissional pelo <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {site.phone}</a>. Informações sobre registros do acompanhamento são tratadas diretamente com ela.</p>
  </main>;
}
