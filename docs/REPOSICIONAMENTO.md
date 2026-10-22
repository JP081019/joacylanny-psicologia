# Reposicionamento em Psicanálise

Atualização de 22 de outubro de 2026, conforme o novo briefing da cliente. Este documento complementa a entrega inicial e descreve a comunicação atual do site.

## Alterações realizadas

A escuta psicanalítica passou a ser o centro da apresentação profissional, do Hero, do manifesto, da abordagem, dos públicos, da timeline, do FAQ e dos metadados. A formação em Psicologia foi preservada. A Neuropsicologia aparece somente na seção Sobre, como formação complementar, sem seção de serviço, CTA específico ou oferta de avaliações.

Foram preservados o conceito PORTAL, a paleta, as fontes, o cabeçalho e suas âncoras, a arquitetura, a fotografia, as marcas, a abertura cinematográfica, as animações GSAP, o acordeão e o crédito JPCreative. No Hero, apenas o tamanho responsivo e as quebras de linha foram adaptados ao novo título. O número, o link e a mensagem do WhatsApp permanecem iguais.

Não foram adicionadas dependências, páginas ou alterações em `next.config.ts`. Não houve deploy.

## Arquivos modificados

| Arquivo | Alteração |
| --- | --- |
| `src/data/site-content.ts` | Conteúdo centralizado, apresentação provisória, textos das seções, oito FAQs e SEO |
| `src/components/sections/Hero.tsx` | Identificador, título por linhas e apresentação profissional |
| `src/components/sections/ContentSections.tsx` | Manifesto, Sobre, abordagem com três conceitos e CTA final |
| `src/components/sections/Sections.module.css` | Título responsivo, quebra da identificação e espaçamento dos novos parágrafos da abordagem |
| `src/app/layout.tsx` | Título, descrição, Open Graph e Twitter Cards |
| `src/app/page.tsx` | Dados estruturados coerentes com a atuação psicanalítica |
| `src/app/opengraph-image.tsx` | Imagem de compartilhamento com o novo posicionamento |
| `tests/site.spec.ts` | Expectativas de conteúdo atualizadas e verificação do reposicionamento |
| `docs/referencias/reposicionamento-psicanalise.md` | Briefing original preservado |
| `README.md`, `docs/ENTREGA.md` | Referência à atualização de conteúdo |

Os componentes existentes de públicos e timeline recebem os novos textos pelo arquivo centralizado. Rodapé, menu móvel, legenda do retrato e página de privacidade continuam utilizando a identificação compartilhada da profissional.

## Textos atualizados

### Apresentação provisória

Joacylanny — Psicóloga | Atendimento de orientação psicanalítica

CRP 22/02243, sujeito à conferência. Não foi adotado o título profissional definitivo de “psicanalista”.

### Hero

Identificador: **Psicologia e Psicanálise**.

Título: **Um espaço para escutar o que há de singular em você.**

Descrição: Um convite à fala, à escuta e à compreensão da própria história, respeitando o tempo e a singularidade de cada pessoa.

CTA: Agendar atendimento.

### Manifesto

**Nem tudo precisa ser compreendido de imediato.**

Há questões que se repetem, sentimentos difíceis de nomear e histórias que ainda procuram palavras. A escuta psicanalítica oferece um espaço para falar sobre essas experiências, sem respostas prontas ou julgamentos, respeitando o tempo de cada pessoa.

### Sobre

**Prazer, sou Joacylanny.**

Sou psicóloga, com mais de 10 anos de formação em Psicologia. A Psicanálise é a orientação central do meu trabalho clínico, e minha trajetória inclui a formação contínua pelo Corpo Freudiano.

Atendo adultos e adolescentes em um espaço de fala e escuta, atento à história e às questões de cada pessoa. O acompanhamento respeita a singularidade e o tempo de cada processo.

Minha trajetória acadêmica também inclui pós-graduação em Neuropsicologia, como formação complementar ao olhar clínico.

Trajetória apresentada: atuação clínica de orientação psicanalítica; formação contínua pelo Corpo Freudiano; formação complementar com pós-graduação em Neuropsicologia.

### Abordagem

**A escuta que vai além do que é dito.**

A Psicanálise oferece um espaço de fala e escuta em que cada pessoa pode se aproximar de sua própria história, de seus conflitos e de questões que nem sempre encontram respostas imediatas.

Não se trata de oferecer soluções prontas, mas de construir um percurso de reflexão e elaboração, respeitando a singularidade de cada sujeito.

1. **A palavra:** Um espaço em que falar livremente faz parte do processo de escuta e reflexão.
2. **A singularidade:** Cada pessoa possui uma história própria, que merece ser considerada em sua complexidade.
3. **O tempo:** O processo psicanalítico respeita o percurso individual, sem estabelecer respostas ou resultados padronizados.

### Públicos

- **Adultos:** Uma escuta de orientação psicanalítica para falar sobre as relações, os conflitos e as experiências que atravessam a vida adulta.
- **Adolescentes:** Um espaço de fala e escuta atento às transformações dessa fase, respeitando a história e a singularidade de cada adolescente.
- **Cuidado em conjunto:** Quando necessário, o acompanhamento de orientação psicanalítica pode caminhar junto ao cuidado psiquiátrico.

### Como funciona

1. **Primeiro contato:** O primeiro passo é entrar em contato para obter informações e combinar o agendamento.
2. **Primeira sessão:** Um primeiro espaço de conversa e escuta, em que você poderá falar sobre o que o levou a buscar atendimento.
3. **Continuidade:** O acompanhamento é construído ao longo das sessões, respeitando a singularidade e o tempo de cada processo.

Modalidade, frequência e demais detalhes continuam direcionados à confirmação com a profissional.

### Perguntas frequentes

**O que é a Psicanálise?**

A Psicanálise é uma abordagem clínica que valoriza a fala, a escuta e a investigação das experiências, dos conflitos e da história singular de cada pessoa.

**Preciso saber exatamente o que falar na primeira sessão?**

Não. Você não precisa chegar com tudo organizado ou saber exatamente por onde começar. A conversa pode partir daquilo que estiver presente para você naquele momento.

**Quanto tempo dura um processo psicanalítico?**

Não existe um prazo único para todos. A duração do acompanhamento considera as particularidades de cada pessoa e de seu processo.

**Preciso ter um diagnóstico para procurar atendimento?**

Não. A busca por acompanhamento pode partir de diferentes questões, dificuldades, conflitos ou do desejo de compreender melhor determinadas experiências.

**O atendimento é presencial ou online?**

Para confirmar a modalidade disponível e combinar o formato mais adequado, entre em contato pelo WhatsApp. Você também pode esclarecer suas dúvidas antes de agendar.

**A partir de que idade você atende?**

Atendo adolescentes e adultos, com um olhar atento às particularidades de cada fase da vida. A idade mínima e as orientações para adolescentes podem ser confirmadas no primeiro contato.

**Você trabalha junto com acompanhamento psiquiátrico?**

Sim. Quando necessário, o acompanhamento psicológico segue de forma integrada ao cuidado psiquiátrico.

**Como agendo a primeira sessão?**

É só chamar no WhatsApp pelo botão do site. No primeiro contato, você recebe informações sobre como funciona o atendimento e combina um horário.

### Convite final

**Existe espaço para a sua história.**

Um espaço de escuta, reflexão e acolhimento, respeitando a singularidade de cada percurso.

CTA: Entrar em contato.

### SEO

Título: **Joacylanny | Psicologia e Psicanálise**.

Descrição: Conheça o trabalho clínico de Joacylanny, psicóloga com atuação orientada pela Psicanálise. Um espaço de escuta que respeita a singularidade de cada pessoa.

O mesmo posicionamento foi aplicado ao Open Graph, Twitter Cards, imagem de compartilhamento e dados estruturados. O registro estruturado mantém “Psicóloga” como profissão e descreve o atendimento de orientação psicanalítica; a Neuropsicologia não aparece como oferta de serviço. URLs e canonical foram preservados.

## Informações para aprovação da Joacylanny

- Denominação profissional definitiva. A apresentação atual é provisória, conforme solicitado.
- Conferência final do CRP 22/02243, da trajetória, dos mais de dez anos de formação, do Corpo Freudiano e da pós-graduação mencionada. Esses dados constam do site público consultado e não substituem aprovação direta.
- Modalidades de atendimento. Permanece a divergência entre a apresentação presencial/online e a resposta exclusivamente online no site antigo; nenhuma modalidade definitiva foi inventada.
- Idade mínima para adolescentes, frequência/duração e informações operacionais que ainda não tenham sido confirmadas.
- Aprovação editorial dos textos e revisão final da política de privacidade antes de publicar.

## Validação

| Verificação executada | Resultado |
| --- | --- |
| `npm run lint` | Sem erros ou avisos |
| `npm run build` | Concluído com sucesso no Next.js 16.4.2/Turbopack |
| TypeScript durante o build | Sem erros |
| Saída de produção | Rotas estáticas preservadas: início, privacidade, Open Graph, robots e sitemap |
| `npm test` no Microsoft Edge | 10 testes aprovados, em 32,3 segundos |
| Primeira visita e recarregamento | Desenho do arco, encerramento da abertura e indicador de sessão conferidos |
| Pular introdução e Escape | Fechamento, foco e liberação da rolagem aprovados |
| Movimento reduzido e armazenamento indisponível | Conteúdo e navegação funcionais |
| Hero em 320, 390, 768 e 1440px | Texto completo, sem transbordamento horizontal e com imagens carregadas |
| Menu móvel e âncoras | Foco contido, Escape e navegação conferidos |
| FAQ | Oito perguntas; todas as respostas abertas e verificadas, com controles acessíveis |
| Posicionamento | Formação em Psicologia preservada; Neuropsicologia somente na seção Sobre; três conceitos na abordagem |
| WhatsApp | Número, link e mensagem conferidos contra os valores anteriores |
| Metadata, Open Graph e Twitter | Novo título e descrição aplicados; canonical preservado |
| Dados estruturados | Psicóloga, CRP e orientação psicanalítica coerentes; nenhuma nova oferta de serviço |
| Privacidade, sitemap, robots e imagem Open Graph | Páginas e recursos responderam corretamente; endpoints de SEO com HTTP 200 |
| Acessibilidade automática axe-core | Nenhuma violação detectada nas regras WCAG A/AA e 2.1/2.2 AA verificadas, no desktop e no menu móvel |
| JavaScript desativado | Conteúdo e contato disponíveis; introdução fechada |
| Erros de página no cenário de entrada | Nenhum erro capturado |

Capturas atualizadas do Hero: `docs/validacao/hero-1440.png` e `docs/validacao/hero-390.png`. A abertura foi capturada em `docs/validacao/abertura.png`.

As verificações automáticas não equivalem a auditoria manual completa de acessibilidade nem a medição de desempenho no ambiente publicado. Não houve mudanças na configuração de deploy e não foi executado deploy. Prévia local durante esta entrega: http://127.0.0.1:3000.
