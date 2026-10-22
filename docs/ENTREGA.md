# Entrega — Joacylanny Psicologia

Atualização de conteúdo em 22/10/2026: o posicionamento vigente prioriza a escuta psicanalítica. Consulte `docs/REPOSICIONAMENTO.md` para os novos textos e a validação desta atualização. O registro abaixo documenta a entrega inicial.

Implementação local concluída em 21 de outubro de 2026, seguindo os três documentos fornecidos, preservados em `docs/referencias/`.

Prévia local: http://127.0.0.1:3000. O site atual não foi modificado nem houve publicação em hospedagem.

## Resultado

- Base Next.js 16.4.2, React, TypeScript, CSS Modules, GSAP/ScrollTrigger, Bootstrap Icons e next/font.
- Identidade oficial, paleta especificada e tipografia Cormorant Garamond/Manrope.
- Hero editorial dividido, arquitetura em arco e fotografia real na seção Sobre.
- Manifesto, apresentação profissional, abordagem, públicos atendidos, funcionamento, FAQ e convite final.
- WhatsApp com o número conferido e mensagem sem solicitação de dados clínicos.
- Menu móvel com diálogo nativo, foco contido, Escape e fechamento após navegação.
- FAQ com controles por teclado, aria-expanded e regiões associadas.
- Abertura com desenho sequencial dos caminhos do monograma, assinatura oficial, deslocamento/escala e máscara que revela a arquitetura. Não se limita a uma troca por opacidade.
- Introdução uma vez por sessão, botão de pular, Escape, restauração do foco, tratamento de armazenamento bloqueado e encerramento de segurança.
- Movimento reduzido abre diretamente o conteúdo e remove os movimentos de rolagem.
- SEO: título, descrição, canonical, Open Graph, Twitter Cards, imagem de compartilhamento, sitemap, robots e dados estruturados com informações conferidas.
- Política de privacidade de acordo com os recursos implementados: sem formulário, pixels ou analytics; WhatsApp externo e indicador temporário da introdução.
- Rodapé com marca oficial, CRP e crédito com logotipo e link da JPCreative.

## Arquivos principais

| Área | Arquivos |
| --- | --- |
| Configuração | `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `playwright.config.ts` |
| Conteúdo | `src/data/site-content.ts` |
| Identidade e estilos | `src/styles/tokens.css`, `src/app/globals.css`, módulos CSS dos componentes |
| Página | `src/app/layout.tsx`, `src/app/page.tsx` |
| Estrutura | `src/components/layout/Header.tsx`, `Footer.tsx` |
| Seções | `src/components/sections/Hero.tsx`, `ContentSections.tsx`, `FAQ.tsx` |
| Animação | `src/components/animations/PortalExperience.tsx`, `src/components/ui/Monogram.tsx` |
| SEO e privacidade | `src/app/opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, `politica-de-privacidade/page.tsx` |
| Testes | `tests/site.spec.ts` |
| Recursos novos | `public/images/architecture/portal.webp`, `public/images/brand/jpcreative.webp` |

## Verificações executadas

| Verificação | Resultado |
| --- | --- |
| TypeScript | Sem erros; também executado durante o build |
| ESLint | Sem erros ou avisos |
| Build de produção | Concluído; sete páginas estáticas geradas, incluindo rotas internas do Next.js |
| Suíte Playwright no Microsoft Edge | 9 testes aprovados |
| Rechecagem após acabamento do rodapé e logos | 3 testes aprovados: responsividade, SEO/contatos e acessibilidade |
| Primeira visita e recarregamento | Abertura completa e indicador de sessão conferidos |
| Pular introdução e Escape | Encerramento, foco e desbloqueio da rolagem conferidos |
| Movimento reduzido | Abertura dispensada, navegação e FAQ funcionais |
| Armazenamento bloqueado | Conteúdo continua disponível; alteração da preferência encerra a abertura |
| Larguras 320, 390, 768 e 1440px | Sem transbordamento horizontal; imagens carregadas |
| Sem JavaScript | Conteúdo principal e links de contato disponíveis; introdução fechada |
| Menu móvel | Foco contido, Escape e âncoras conferidos |
| axe-core WCAG A/AA e WCAG 2.1/2.2 AA | Nenhuma violação automática detectada no desktop e no menu móvel |
| Console e hidratação | Sem erros de página no cenário completo de entrada |
| Next.js get_compilation_issues | Nenhum problema de compilação |
| Open Graph, sitemap e robots | HTTP 200 |
| Auditoria das dependências de produção | Zero vulnerabilidades reportadas |

As checagens automáticas de acessibilidade não substituem avaliação manual completa com tecnologias assistivas. Métricas de Core Web Vitals em dispositivos reais não foram medidas; precisam ser acompanhadas no domínio publicado.

Capturas em `docs/validacao/`: `abertura.png`, `hero-390.png`, `hero-1440.png`, `site-390.png` e `site-1440.png`.

## Pendências para publicação

1. Confirmar diretamente com Joacylanny as modalidades oferecidas, idade mínima para adolescentes, frequência/duração e informações operacionais. O site não publica uma modalidade definitiva.
2. Ratificar o WhatsApp, CRP, formação e redação final com a profissional, embora coincidam com o site público consultado.
3. Revisar e aprovar o texto de privacidade considerando o provedor de hospedagem escolhido e os procedimentos reais do atendimento.
4. Confirmar Instagram oficial, se houver interesse em adicioná-lo. Nenhum perfil foi inventado.
5. Publicar na Vercel, configurar domínio/DNS e conferir canonical, links e desempenho no ambiente real. Não é necessária chave de API para o funcionamento deste site.
6. A auditoria completa de desenvolvimento apontou cinco ocorrências altas na cadeia transitiva de globbing do ESLint/Next, com origem em braces. A sugestão automática implica rebaixar a configuração do Next.js; não foi aplicada. As dependências de produção não apresentaram ocorrências. Reavaliar quando o fornecedor disponibilizar correção compatível.

Instruções de execução e manutenção estão no `README.md`. Origens das imagens e prompt completo do ImageGen estão em `docs/RECURSOS.md`.
