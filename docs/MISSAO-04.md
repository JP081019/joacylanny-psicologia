# Missão 04 · Joacylanny Psicologia

05/11/2026 · Entrega local para Branding e Design, Revisão e Qualidade

## A. Diagnóstico

- Projeto confirmado em `C:\Users\joao0\OneDrive\Desktop\JP Creative\Clientes\Joacylanny`, com remoto `JP081019/joacylanny-psicologia`.
- Stack instalada com Next.js 16.4.2 (App Router e Turbopack), React 19.3.1, TypeScript 6.0.3, GSAP 3.15.0, CSS Modules e npm. A suíte usa Playwright 1.64.1 e axe.
- O `Header` e o `Footer` são compartilhados pelas rotas. A configuração `src/data/site-content.ts` concentra as âncoras de navegação e o destino do WhatsApp. O cabeçalho alterna para o menu móvel em 800 px e oculta o CTA desktop em 1150 px.
- O diálogo anterior media até 420 px e preenchia a largura de celulares de até 420 px. O telefone e o WhatsApp divergiam da confirmação da Diretoria. O e-mail oficial não estava disponível no rodapé. O rodapé escuro referenciava caminhos de marca desatualizados e o crédito apontava para uma imagem ausente.
- O Git iniciou em `main` alinhada a `origin/main` na referência local. Havia cinco arquivos de logotipo marcados como removidos, duas pastas de marca novas e um PDF não rastreado. O trabalho preservou esse estado preexistente.
- Consultei o Manual v1.0, as instruções do repositório e a documentação local do projeto. O site público respondeu via HTTPS. [Manual Oficial](https://docs.google.com/document/d/1-wIR-RKBeQFklpQRI3fZe0Medv8U-37U9i56kFMoGYI/edit) · [Site de referência](https://www.joacylannypsi.com.br/)

## B. Implementação do menu

- [Header.tsx](../src/components/layout/Header.tsx) e [Layout.module.css](../src/components/layout/Layout.module.css) reutilizam o diálogo nativo e a lista de navegação existente. O painel abre pela direita, tem largura de `min(85vw, 340px)`, overlay de 32% e rolagem interna em telas baixas.
- O painel desliza e o overlay muda de opacidade em 240 ms. A preferência por movimento reduzido desativa a transição. Navegadores sem suporte às transições discretas do diálogo mantêm a abertura e o fechamento nativos.
- O botão de fechamento recebe o foco inicial. Escape, botão de fechar, toque fora e seleção de link fecham o painel. A modalidade nativa mantém o conteúdo de fundo inerte enquanto o painel está aberto, e o bloqueio de rolagem é liberado no fechamento. O acionador recupera o foco nas dispensas do menu. Redimensionar acima de 800 px encerra o painel.
- A navegação e o CTA de desktop conservaram a composição e os breakpoints. A referência da imagem do cabeçalho passou a usar a nova pasta do mesmo arquivo, confirmado pelo hash Git.

## C. Correção dos contatos

| Informação | Valor oficial | Resultado local |
| --- | --- | --- |
| E-mail | `joacylanny.psi@gmail.com` | `mailto:joacylanny.psi@gmail.com` e Schema.org verificados |
| Telefone | `(99) 99184-0178` | `tel:+5599991840178`, texto da política de privacidade e Schema.org verificados |
| WhatsApp | `wa.me/5599991840178` | Destino e parâmetro `text` verificados nos botões e na política de privacidade |

O número anterior aparecia como `+55 99 91840-1780` e a URL usava a terminação `…1780`. A auditoria final de `src` e dos testes não encontrou essas referências. O telefone internacional alimenta o link de chamada, o WhatsApp e o dado estruturado. A mensagem original de WhatsApp foi mantida com a mesma codificação. A validação de clique interceptou a abertura externa e confirmou a URL sem enviar mensagem.

## D. Refinamento do rodapé

O fundo usa `--background-primary`, que aponta para o marfim `--color-ivory` (`#F6F1EB`), a tonalidade mais clara da paleta. Os textos usam carvão e café da mesma paleta, com contraste aproximado de 15,3:1 e 8,4:1 sobre o marfim.

O arquivo `Logo transparente minimalista Joacylanny Psicanálise.png` (2098 × 749, PNG com transparência) preserva a proporção da marca existente. Identidade, navegação e contatos ficam em três colunas no desktop, duas no tablet com identidade acima e uma coluna no smartphone. Os links têm pelo menos 44 px de altura. O CRP, a identificação profissional e a política de privacidade continuam disponíveis.

## E. JP Creative

O crédito **Desenvolvido por JP Creative** usa `public/logo/Logo - JP Creative/Logotipo JP Minimalista em Fundo Escuro.png` (1254 × 1254, PNG quadrado com fundo escuro incorporado). A variante original aparece em 44 × 44 px ao lado do texto do link acessível, na faixa inferior. O link abre em nova aba com `noopener noreferrer`. O domínio consta no Manual, já era o destino no rodapé e respondeu via HTTPS, com redirecionamento para `www`. [JP Creative](https://jpcreative.com.br)

## F. Evidências visuais

Capturas reais do site local no Microsoft Edge. A captura ocultou apenas o indicador de desenvolvimento do Next.js.

| Mobile · 390 px | Desktop · 1366 px |
| --- | --- |
| [Cabeçalho com menu fechado](validacao/missao-04/mobile-cabecalho.png) | [Cabeçalho](validacao/missao-04/desktop-cabecalho.png) |
| [Drawer aberto](validacao/missao-04/mobile-drawer.png) | [Rodapé](validacao/missao-04/desktop-rodape.png) |
| [Drawer com overlay](validacao/missao-04/mobile-overlay.png) | |
| [Rodapé](validacao/missao-04/mobile-rodape.png) | |

## G. Testes

| Verificação | Resultado |
| --- | --- |
| `npm run lint` e `npm run typecheck` | ESLint e TypeScript passaram |
| `npm run build` | Build local concluído, incluindo a rota Open Graph |
| `npm ls --depth=0` | Dependências diretas resolvidas |
| `npm test` | 11 testes passaram no Microsoft Edge. Cobertura de menu, teclado, toque emulado, responsividade, marcas, contatos, navegação, privacidade, SEO e axe |
| `git diff --check` | Sem problemas de whitespace |
| Next.js e navegação local | Sem erros de compilação ou sessão na inspeção via Next.js MCP |

A suíte verificou larguras de 320, 360, 390, 768, 1366, 1440 e 1920 px, incluindo a mudança de navegação em 800/801 px. Uma checagem complementar em 320 × 360 confirmou rolagem interna e ausência de overflow horizontal. As primeiras rodadas revelaram a necessidade de rolar até imagens com carregamento tardio e um conflito de precedência no recuo do crédito. A captura e a asserção de posição do crédito cobrem o ajuste final.

## H. Pendências

- **Técnicas** · E-mail e chamada foram validados pelo destino. O WhatsApp foi exercitado com interceptação. O recebimento real de mensagens e chamadas ficou fora do teste local.
- **Visuais** · Testes executados no Edge, com emulação para telas móveis. A avaliação de marca e composição segue para Branding e Design.
- **Informações e materiais** · A Ficha Individual não foi localizada na pasta da cliente nem na busca pelo nome no Drive. Os contatos vieram da confirmação expressa da Diretoria na missão. Os arquivos necessários das duas marcas estavam disponíveis.
- **Aprovações** · Revisão visual e técnica, seguida da autorização expressa da Diretoria para lançamento.
- **Fora do escopo** · O HTML público consultado ainda não apresentava o novo destino do WhatsApp. A atualização está no ambiente local.

## I. Status

**Concluído e pronto para revisão.** Entrega restrita ao projeto Joacylanny e ao ambiente local, sem commit, push, merge ou publicação.
