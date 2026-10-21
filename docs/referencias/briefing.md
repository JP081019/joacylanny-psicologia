# BRIEFING MESTRE — JOACYLANNY PSICOLOGIA

**Projeto:** Redesign completo do site institucional  
**Desenvolvimento:** JP Creative — João Pedro  
**Conceito:** PORTAL — Elegância Essencial  
**Direção visual:** Arquitetônico + Editorial Premium  
**Site de referência para conteúdo:** https://joacylannypsi.com.br/  
**Tipo de projeto:** Website institucional premium, responsivo e animado  
**Stack proposta:** Next.js, React, TypeScript, CSS Modules e GSAP

---

# 1. VISÃO GERAL DO PROJETO

Desenvolver um site institucional sofisticado, contemporâneo e acolhedor para Joacylanny Psicologia.

O projeto deve representar a profissional por meio de uma experiência digital que combine:

- Arquitetura minimalista.
- Design editorial de luxo.
- Fotografia profissional.
- Tipografia expressiva.
- Animações cinematográficas equilibradas.
- Navegação intuitiva.
- Conteúdo humano e profissional.
- Experiência responsiva impecável.

O resultado não deve parecer um template convencional de psicologia.

Queremos um site autoral, com personalidade visual marcante, mas que preserve a seriedade, a ética e a sensibilidade necessárias à comunicação de serviços psicológicos.

## Objetivos

1. Fortalecer a identidade profissional de Joacylanny.
2. Apresentar sua formação, abordagem e experiência.
3. Explicar o funcionamento da psicoterapia.
4. Facilitar o agendamento pelo WhatsApp.
5. Transmitir acolhimento, credibilidade e profissionalismo.
6. Criar uma experiência visual memorável.
7. Oferecer excelente usabilidade em computadores, tablets e celulares.

**Princípio central:**

> O design será inteiramente novo. As informações profissionais, contatos, serviços e perguntas frequentes terão como referência o site antigo da Joacylanny.

---

# 2. FONTES E REFERÊNCIAS

## 2.1. Referência visual

A prancha de identidade visual apresentada para Joacylanny Psicologia será a principal referência estética.

Ela estabelece:

- Monograma inspirado em um portal arquitetônico.
- Arcos e curvas elegantes.
- Paleta terrosa e neutra.
- Tipografia serifada sofisticada.
- Composições minimalistas.
- Iluminação natural e sombras suaves.
- Sensação de tranquilidade e acolhimento.

O site deve expandir essa identidade, transformando-a em uma experiência digital completa.

A prancha funciona como referência criativa até sua aprovação definitiva pela cliente.

## 2.2. Referência de conteúdo

**Site antigo:** https://joacylannypsi.com.br/

Utilizar o site antigo para consultar e reaproveitar:

- Nome profissional.
- Registro no CRP.
- Formação acadêmica.
- Experiência profissional.
- Abordagem psicológica.
- Informações sobre Psicanálise.
- Informações sobre Neuropsicologia.
- Públicos atendidos.
- Modalidade de atendimento.
- Frequência das sessões.
- Funcionamento do acompanhamento.
- Perguntas frequentes e respostas.
- WhatsApp e demais contatos.
- Fotografias profissionais disponíveis.

O site antigo não deve servir como referência de layout, cores, componentes ou animações.

### Regra de integridade do conteúdo

Não inventar informações profissionais, qualificações, serviços, especialidades, depoimentos, diagnósticos atendidos, endereços ou modalidades.

Os textos podem ser reorganizados e refinados editorialmente, desde que seu significado original seja preservado.

Qualquer informação contraditória, incompleta ou desatualizada deve ser sinalizada para confirmação.

---

# 3. CONCEITO CRIATIVO

## PORTAL — ELEGÂNCIA ESSENCIAL

**Assinatura conceitual:**

"Um espaço para a sua história."

O portal simboliza abertura, escuta, acolhimento, introspecção e novas perspectivas.

Essa metáfora deve orientar toda a experiência visual.

O visitante não deve sentir que está apenas percorrendo seções de uma página.

A navegação deve transmitir a sensação de entrar progressivamente em um ambiente tranquilo, reservado e cuidadosamente construído.

### Três pilares da experiência

**Arquitetura**

Cria atmosfera, profundidade e identidade.

**Editorial**

Organiza o conteúdo com sofisticação, hierarquia e clareza.

**Humanidade**

Conecta o visitante à profissional e apresenta informações reais de forma acessível.

A arquitetura nunca deve competir com a fotografia da psicóloga ou dificultar a leitura.

---

# 4. IDENTIDADE VISUAL

## 4.1. Paleta de cores

| Cor | Hexadecimal | Aplicação |
|---|---|---|
| Carvão profundo | #1D1B1A | Títulos, rodapé e seções escuras |
| Café acinzentado | #51433F | Botões, elementos de destaque |
| Taupe rosado | #9C796A | Detalhes, linhas e acentos |
| Areia quente | #D8C7B8 | Superfícies secundárias |
| Marfim editorial | #F6F1EB | Fundo principal |

### Distribuição visual

Aproximadamente 60% da experiência deve utilizar superfícies claras, 25% tons intermediários e 15% superfícies escuras.

Essa distribuição é uma orientação estética, não uma regra matemática.

O objetivo é construir contraste e ritmo visual.

Evitar:

- Gradientes coloridos intensos.
- Branco puro como fundo predominante.
- Preto absoluto em grandes superfícies.
- Cores vibrantes fora da identidade.
- Sombras artificiais exageradas.

## 4.2. Tipografia

**Cormorant Garamond**

Utilização:

- Títulos principais.
- Frases editoriais.
- Chamadas de impacto.
- Destaques conceituais.

**Manrope**

Utilização:

- Navegação.
- Parágrafos.
- Botões.
- FAQ.
- Informações profissionais.
- Elementos funcionais.

### Hierarquia aproximada

Desktop:

- Hero: 80–104 px.
- Títulos de seção: 56–80 px.
- Subtítulos: 26–36 px.
- Corpo: 17–19 px.
- Legendas: 12–14 px.

Mobile:

- Hero: 44–58 px.
- Títulos de seção: 36–48 px.
- Corpo: 16–18 px.

Aplicar tamanhos fluidos com CSS `clamp()`.

Priorizar legibilidade, especialmente em textos longos.

---

# 5. DIRETRIZES DE LAYOUT

## Desktop

- Grid de 12 colunas.
- Largura máxima aproximada de 1440 px.
- Margens laterais generosas.
- Espaçamento vertical amplo.
- Composições assimétricas pontuais.
- Fotografias com recortes arquitetônicos.
- Seções com alturas naturais, sem forçar tudo a ocupar 100vh.

## Mobile

- Composição predominantemente vertical.
- Títulos ajustados para leitura confortável.
- Fotografias com enquadramento específico.
- Botões fáceis de tocar.
- Menu compacto e acessível.
- Animações simplificadas.
- Nenhum elemento deve provocar rolagem horizontal.

## Elementos visuais

Utilizar:

- Arcos.
- Linhas finas.
- Divisórias discretas.
- Recortes fotográficos.
- Sobreposições moderadas.
- Espaços negativos.
- Pequenos indicadores editoriais.
- Numeração de seções, quando fizer sentido.

Evitar cards repetitivos em excesso.

A sofisticação deve surgir da composição e da tipografia.

---

# 6. ESTRUTURA COMPLETA DO SITE

## SEÇÃO 01 — HEADER

### Objetivo

Criar uma navegação minimalista, funcional e consistente com a identidade.

### Elementos

À esquerda:

Logotipo Joacylanny Psicologia.

À direita:

- Início.
- Sobre.
- Abordagem.
- Atendimento.
- Dúvidas.
- Contato.

CTA destacado:

"Agendar atendimento".

### Comportamento

O cabeçalho poderá ser fixo, com aparência discreta.

Após a rolagem inicial, aplicar uma superfície sutil que preserve a leitura sobre fundos claros ou escuros.

No mobile, utilizar menu expansível com animação suave.

Garantir navegação por teclado, indicação de foco e fechamento por Escape.

---

## SEÇÃO 02 — HERO: O PORTAL

### Conceito

"Um espaço para a sua história."

### Layout

Hero dividido em duas grandes áreas.

**Esquerda — Conteúdo editorial**

- Pequeno identificador profissional.
- Título principal.
- Descrição curta.
- CTA de agendamento.
- Indicador discreto de rolagem.

**Direita — Arquitetura**

Uma composição arquitetônica com arco monumental, superfícies em tons de areia e iluminação natural.

A imagem deve transmitir profundidade e tranquilidade.

### Conteúdo proposto

Título:

"Um espaço para a sua história."

Descrição:

"Psicoterapia de orientação psicanalítica, com uma escuta atenta à singularidade de cada pessoa e às questões que atravessam sua trajetória."

A redação definitiva deverá ser aprovada pela profissional.

### CTA

"Agendar atendimento".

Direcionar ao WhatsApp profissional.

### Animação

Na entrada:

- O título surge por linhas.
- A descrição aparece em seguida.
- O CTA entra suavemente.
- A arquitetura revela sua imagem com um movimento sutil.

Na rolagem:

O arco cresce progressivamente e cria uma passagem visual para a próxima seção.

Essa será a principal animação de assinatura do site.

Não utilizar movimentos bruscos ou efeitos que prejudiquem a leitura.

---

## SEÇÃO 03 — MANIFESTO: O VALOR DA ESCUTA

### Objetivo

Apresentar a filosofia de acolhimento e a proposta de escuta clínica.

### Direção visual

Seção editorial predominantemente tipográfica.

Fundo marfim.

Grande frase central ou alinhada assimetricamente.

Elementos arquitetônicos muito discretos.

### Chamada proposta

"Nem tudo precisa ser compreendido de imediato."

### Conteúdo

Desenvolver um texto breve a partir das informações reais sobre a abordagem psicanalítica apresentadas no site antigo.

O texto deve abordar:

- Singularidade.
- História pessoal.
- Escuta.
- Reflexão.
- Tempo individual.

Não sugerir resultados garantidos.

### Animação

Revelação progressiva de frases por linha.

Pequenas transições de opacidade e posição.

---

## SEÇÃO 04 — SOBRE JOACYLANNY

### Objetivo

Apresentar a profissional e fortalecer a confiança.

### Informações de referência do site antigo

- Psicóloga Clínica.
- CRP 22/02243.
- Mais de 10 anos de formação em Psicologia.
- Orientação psicanalítica.
- Pós-graduação em Neuropsicologia.
- Formação contínua pelo Corpo Freudiano.

Essas informações devem ser conferidas antes da publicação.

### Layout

Composição editorial assimétrica.

À esquerda:

Fotografia profissional vertical.

À direita:

- Pequeno identificador "Sobre mim".
- Título expressivo.
- Apresentação profissional.
- Formação.
- Registro no CRP.

### Título

"Prazer, sou Joacylanny."

### Direção fotográfica

Utilizar fotografia real da profissional.

Priorizar iluminação natural, enquadramento elegante e fundo neutro.

Evitar alterações artificiais de aparência.

### Animação

Fotografia com revelação suave.

Texto entrando progressivamente.

Parallax muito discreto, sem deslocar elementos de leitura.

---

## SEÇÃO 05 — ABORDAGEM E FORMAÇÃO

### Objetivo

Explicar a orientação clínica e apresentar a trajetória acadêmica.

### Conteúdo

Basear-se nas informações do site antigo sobre:

**Psicanálise**

Apresentar a abordagem como um espaço de fala, escuta e reflexão, considerando a história e a singularidade da pessoa.

**Neuropsicologia**

Apresentar a formação complementar da profissional, respeitando exatamente suas qualificações.

Não anunciar avaliação neuropsicológica ou outros serviços específicos sem confirmação.

### Layout

Dois grandes blocos editoriais.

Cada bloco terá:

- Numeração.
- Título.
- Descrição.
- Linha divisória.
- Detalhe arquitetônico.

Evitar cards convencionais.

### Interação

Os blocos poderão ter pequenas transições visuais no hover.

O conteúdo essencial deve permanecer acessível sem depender de interação.

---

## SEÇÃO 06 — PARA QUEM É O ATENDIMENTO

### Objetivo

Explicar os públicos atendidos e facilitar a identificação do visitante com o serviço.

### Informações do site antigo

- Adultos.
- Adolescentes.
- Pessoas com questões relacionadas ao acompanhamento psiquiátrico.

A idade mínima e o escopo dos atendimentos precisam ser confirmados.

### Layout

Lista editorial numerada, com títulos grandes e descrições objetivas.

### Comportamento

Ao selecionar um item, a descrição correspondente poderá se expandir suavemente.

Não utilizar animações que dificultem o acesso ao conteúdo.

---

## SEÇÃO 07 — COMO FUNCIONA O ATENDIMENTO

### Objetivo

Explicar o processo de forma simples e transparente.

### Informações existentes

- Primeiro contato pelo WhatsApp.
- Agendamento da primeira sessão.
- Sessões geralmente semanais.
- Acompanhamento sem prazo fixo.
- Modalidade online mencionada no FAQ.

O site antigo também apresenta referência a atendimento presencial. Essa divergência precisa ser resolvida.

### Estrutura visual

Três etapas:

**01 — Primeiro contato**

A pessoa entra em contato pelo WhatsApp para obter informações e combinar o agendamento.

**02 — Primeira sessão**

Início do contato clínico, conforme o funcionamento estabelecido pela profissional.

**03 — Continuidade**

Acompanhamento psicológico com frequência e duração adequadas ao processo.

### Layout

Timeline editorial vertical ou horizontal, dependendo do dispositivo.

Utilizar linhas finas, numeração elegante e bastante espaço negativo.

### Animação

A linha da timeline pode ser revelada progressivamente conforme a rolagem.

---

## SEÇÃO 08 — PERGUNTAS FREQUENTES

### Objetivo

Resolver dúvidas práticas e reduzir barreiras ao primeiro contato.

### Fonte

Reaproveitar as perguntas e respostas do site antigo, preservando seu significado.

### Perguntas identificadas

**1. O atendimento é presencial ou online?**

A resposta existente no FAQ indica atendimento online.

Confirmar a modalidade definitiva antes de publicar.

**2. A partir de que idade você atende?**

O site informa atendimento a adolescentes e adultos.

Confirmar idade mínima.

**3. Preciso ter um diagnóstico para procurar terapia?**

Não. A busca por acompanhamento psicológico não depende necessariamente de diagnóstico prévio.

**4. Você trabalha junto com acompanhamento psiquiátrico?**

O site informa que sim, quando necessário.

**5. Como agendo a primeira sessão?**

O agendamento é iniciado pelo WhatsApp.

### Layout

Acordeão editorial premium.

Características:

- Fundo marfim.
- Linhas divisórias finas.
- Perguntas com boa hierarquia.
- Ícones discretos de expansão.
- Respostas com largura confortável.
- Animações curtas.

### Acessibilidade

Utilizar botões semânticos, atributos `aria-expanded` e controle por teclado.

---

## SEÇÃO 09 — CONVITE FINAL

### Conceito

"Existe espaço para a sua história."

### Layout

Fundo carvão profundo.

Monograma arquitetônico ampliado.

Título serifado expressivo.

Texto breve de convite.

Botão de agendamento.

### Animação

Transição suave do fundo claro para o escuro.

O símbolo aparece progressivamente.

O título e o CTA entram em sequência.

### CTA

"Entrar em contato".

Destino: WhatsApp profissional.

Número identificado no site antigo:

+55 99 91840-1780

Confirmar antes da publicação.

A mensagem pré-preenchida deverá ser neutra, por exemplo:

"Olá, Joacylanny! Gostaria de obter informações sobre o atendimento psicológico."

Não solicitar relatos clínicos ou dados sensíveis pelo botão de contato.

---

## SEÇÃO 10 — FOOTER

### Elementos

- Logotipo.
- Nome profissional.
- CRP.
- Links de navegação.
- WhatsApp.
- Instagram, se confirmado.
- Política de privacidade.
- Informações de direitos autorais.

### Crédito obrigatório

"Desenvolvido por JPCreative"

Incluir logotipo da JP Creative e link:

https://jpcreative.com.br

O crédito deve ser discreto e visualmente integrado à identidade do projeto.

---

# 7. SISTEMA DE ANIMAÇÕES

## Biblioteca principal

GSAP + ScrollTrigger.

Utilizar CSS para transições simples.

## 7.1. Portal Reveal

Principal efeito do site.

O arco do Hero deve expandir visualmente conforme o usuário rola a página.

A transição revela a seção seguinte, criando a sensação de passagem.

Evitar distorções e escalas excessivas.

## 7.2. Typography Reveal

Títulos entram com:

- Pequeno deslocamento vertical.
- Opacidade progressiva.
- Máscara de revelação, quando apropriado.
- Sequenciamento discreto.

Não animar cada palavra de todos os parágrafos.

## 7.3. Parallax arquitetônico

Aplicar apenas em imagens selecionadas.

Movimento máximo sugerido: 8%.

## 7.4. Transições de superfície

Alternar seções claras e escuras com transições visuais suaves.

## 7.5. Microinterações

Botões:

- Transição de cor.
- Movimento discreto do ícone.
- Feedback de foco e hover.

Links:

- Sublinhado animado.
- Mudança sutil de tonalidade.

Acordeões:

- Expansão fluida.
- Ícone acompanhando o estado.

## 7.6. Movimento reduzido

Respeitar `prefers-reduced-motion`.

Quando ativado:

- Remover parallax.
- Desabilitar efeitos de scroll vinculados ao movimento.
- Simplificar transições.
- Garantir que todo conteúdo continue visível.

---

# 8. RESPONSIVIDADE

## Desktop

Experiência arquitetônica completa.

Hero dividido.

Animações premium.

Composições editoriais assimétricas.

## Tablet

Reduzir sobreposições.

Ajustar proporções e espaçamentos.

Simplificar movimentos complexos.

## Mobile

Priorizar:

- Carregamento rápido.
- Leitura confortável.
- CTA acessível.
- Navegação simples.
- Imagens corretamente enquadradas.
- Ausência de rolagem horizontal.

O Hero poderá apresentar primeiro o texto e depois a arquitetura.

A animação do portal deve ser simplificada quando necessário.

---

# 9. ARQUITETURA TÉCNICA

## Stack

- Next.js com App Router.
- React.
- TypeScript.
- CSS Modules.
- GSAP.
- ScrollTrigger.
- Bootstrap Icons.
- next/font.
- Vercel.

## Organização sugerida

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    politica-de-privacidade/
      page.tsx

  components/
    layout/
      Header.tsx
      Footer.tsx

    sections/
      Hero.tsx
      Manifesto.tsx
      About.tsx
      Approach.tsx
      Audience.tsx
      Process.tsx
      FAQ.tsx
      FinalCTA.tsx

    ui/
      Button.tsx
      SectionHeading.tsx
      PortalVisual.tsx
      RevealText.tsx

  data/
    site-content.ts
    navigation.ts

  hooks/
    useReducedMotion.ts

  styles/
    tokens.css

public/
  images/
    architecture/
    professional/
    brand/
```

Os conteúdos profissionais devem ficar centralizados em arquivos de dados, facilitando futuras atualizações.

## Requisitos de qualidade

- HTML semântico.
- SEO estruturado.
- Metadados específicos.
- Open Graph.
- Sitemap.
- Robots.txt.
- Otimização de imagens.
- Lazy loading fora do Hero.
- Navegação acessível.
- Foco visível.
- Contraste adequado.
- Boa performance.
- Ausência de erros de hidratação.
- Ausência de vazamentos de listeners ou animações GSAP.
- Testes em diferentes larguras de tela.

---

# 10. SEO E CONTEÚDO

## SEO principal

Utilizar o nome profissional, Psicologia Clínica e a abordagem confirmada.

Não adicionar cidades, especialidades ou serviços não verificados apenas para melhorar posicionamento.

## Estrutura

Uma única tag H1 no Hero.

Títulos H2 para seções principais.

Hierarquia semântica consistente.

## Metadados

Título e descrição específicos.

Imagem de compartilhamento alinhada à identidade.

Dados estruturados apenas com informações verificadas.

## Linguagem

A comunicação deve ser:

- Humana.
- Profissional.
- Acolhedora.
- Clara.
- Ética.
- Sofisticada sem ser excessivamente poética.

Evitar promessas de cura, garantias de transformação ou afirmações que possam criar expectativas inadequadas sobre resultados terapêuticos.

---

# 11. FOTOGRAFIAS E RECURSOS

## Prioridade

1. Fotografias reais da Joacylanny.
2. Logotipo aprovado.
3. Imagens arquitetônicas alinhadas à prancha.
4. Texturas e elementos gráficos discretos.

## Regras

Não utilizar fotografias de pessoas desconhecidas como se fossem a profissional.

Não representar imagens conceituais como fotografias reais do consultório.

Não utilizar recursos externos sem verificar licença de uso.

As imagens do site antigo poderão ser reaproveitadas quando houver acesso aos arquivos e autorização.

## Arquitetura visual

Buscar imagens que apresentem:

- Arcos.
- Profundidade.
- Materiais naturais.
- Superfícies minerais.
- Sombras suaves.
- Luz quente.
- Tons neutros.

Evitar imagens excessivamente decorativas ou que façam o site parecer de uma empresa de arquitetura.

---

# 12. INFORMAÇÕES A CONFIRMAR

Antes da publicação:

- [ ] Aprovação da identidade visual.
- [ ] Logotipo definitivo.
- [ ] Nome profissional completo.
- [ ] Confirmação do CRP.
- [ ] Formação acadêmica atualizada.
- [ ] Abordagem profissional.
- [ ] Áreas de atuação.
- [ ] Público e idade mínima.
- [ ] Atendimento online ou presencial.
- [ ] Cidade e endereço, se aplicável.
- [ ] Frequência e duração das sessões.
- [ ] WhatsApp profissional.
- [ ] Instagram oficial.
- [ ] Fotografias autorizadas.
- [ ] Domínio definitivo.
- [ ] Aprovação dos textos.
- [ ] Política de privacidade adequada.
- [ ] Revisão de conformidade com as orientações profissionais aplicáveis.

As informações pendentes não devem ser preenchidas com dados fictícios.

Durante o desenvolvimento, utilizar placeholders claramente identificados.

---

# 13. ETAPAS DE DESENVOLVIMENTO

## Fase 1 — Fundação

- Inicializar projeto.
- Configurar fontes.
- Criar tokens visuais.
- Definir grid e responsividade.
- Implementar componentes compartilhados.

## Fase 2 — Identidade e Hero

- Criar Header.
- Implementar Hero editorial dividido.
- Integrar arquitetura.
- Desenvolver Portal Reveal.
- Ajustar desktop e mobile.

## Fase 3 — Conteúdo institucional

- Manifesto.
- Sobre.
- Abordagem.
- Públicos atendidos.
- Funcionamento das sessões.

## Fase 4 — Conversão e informações

- FAQ.
- CTA final.
- WhatsApp.
- Footer.
- Política de privacidade.

## Fase 5 — Refinamento visual

- Microinterações.
- Transições.
- Parallax.
- Tipografia.
- Espaçamentos.
- Revisão das imagens.

## Fase 6 — Qualidade

- Testes responsivos.
- Acessibilidade.
- Performance.
- SEO.
- Revisão de conteúdo.
- Verificação de links.
- Aprovação final.

## Fase 7 — Publicação

- Configuração do domínio.
- Deploy na Vercel.
- Teste em produção.
- Verificação do WhatsApp.
- Revisão de metadados.
- Validação final com a cliente.

---

# 14. CRITÉRIOS DE ACEITE

O projeto será considerado pronto quando:

1. O visual estiver alinhado ao conceito PORTAL — Elegância Essencial.
2. A identidade aprovada estiver aplicada consistentemente.
3. O Hero dividido funcionar corretamente.
4. O efeito de portal estiver fluido.
5. As animações não prejudicarem a navegação.
6. Todas as seções estiverem completas.
7. Os conteúdos profissionais tiverem sido verificados.
8. O FAQ utilizar informações reais.
9. O WhatsApp estiver correto.
10. O site estiver responsivo.
11. Não houver erros relevantes de console ou hidratação.
12. Os requisitos de acessibilidade forem atendidos.
13. A experiência mobile estiver refinada.
14. Os metadados e o SEO básico estiverem configurados.
15. O rodapé apresentar o crédito da JP Creative.
16. A cliente tiver aprovado o conteúdo final.

---

# 15. RESULTADO ESPERADO

O novo site Joacylanny Psicologia deve ser uma experiência digital autoral, sofisticada e funcional.

A arquitetura deverá transmitir acolhimento.

A tipografia deverá transmitir elegância.

As fotografias deverão transmitir humanidade.

As animações deverão conduzir a experiência sem competir com o conteúdo.

E as informações profissionais deverão ser fiéis à atuação real da Joacylanny.

**Síntese definitiva:**

Criar um website de psicologia com estética arquitetônica e editorial premium, utilizando a identidade PORTAL — Elegância Essencial como referência visual e o site antigo joacylannypsi.com.br como fonte principal de conteúdo.

O objetivo não é reproduzir o site anterior.

É preservar sua essência profissional e apresentá-la por meio de uma experiência digital inteiramente renovada.

**Desenvolvido por JP Creative.**