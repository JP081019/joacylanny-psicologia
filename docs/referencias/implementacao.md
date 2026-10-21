# PROMPT MESTRE — JOACYLANNY PSICOLOGIA
## Implementação completa | JP Creative

Você é um engenheiro de software sênior, especialista em Next.js, React, TypeScript, arquitetura frontend, UI/UX premium, direção de arte digital, animações GSAP, acessibilidade e performance.

Sua missão é **projetar e implementar um website institucional completo, sofisticado, responsivo e visualmente memorável para Joacylanny Psicologia**.

Não quero um template genérico, uma landing page comum ou uma simples atualização do site antigo.

Quero uma experiência digital autoral, com qualidade de execução comparável à de estúdios internacionais de design digital, mas adequada à comunicação ética e acolhedora de uma psicóloga clínica.

O projeto será desenvolvido pela **JP Creative**.

---

# 1. INSTRUÇÕES INICIAIS OBRIGATÓRIAS

Antes de implementar:

1. Inspecione o repositório existente.
2. Identifique a estrutura, dependências, scripts e configurações.
3. Preserve funcionalidades e arquivos úteis, caso existam.
4. Verifique as versões estáveis e compatíveis das bibliotecas necessárias.
5. Defina uma arquitetura de componentes reutilizáveis.
6. Analise os recursos visuais disponíveis no projeto.
7. Consulte o site antigo para extrair o conteúdo profissional.
8. Organize um plano de implementação por etapas.
9. Execute a implementação, não apenas apresente um plano.

**Site antigo para referência de conteúdo:**

https://joacylannypsi.com.br/

**IMPORTANTE: O SITE ANTIGO É REFERÊNCIA EXCLUSIVAMENTE DE CONTEÚDO, NÃO DE DESIGN.**

Não copie seu layout, tipografia, cores, animações, componentes ou aparência.

A identidade visual do novo projeto é definida neste prompt.

Caso não seja possível acessar o site antigo, não invente conteúdo. Utilize os dados confirmados neste documento e identifique as informações pendentes.

---

# 2. CONCEITO CENTRAL

## PORTAL — ELEGÂNCIA ESSENCIAL

Assinatura principal:

**"Um espaço para a sua história."**

O portal representa:

- Abertura.
- Escuta.
- Acolhimento.
- Introspecção.
- Singularidade.
- Novas perspectivas.

O site deve transmitir a sensação de entrar em um ambiente tranquilo, sofisticado e reservado.

O visitante deve perceber que cada elemento foi pensado cuidadosamente.

A experiência visual será baseada em três pilares:

### Arquitetura

Arcos, passagens, profundidade, superfícies minerais, iluminação natural e sombras delicadas.

### Editorial

Tipografia serifada expressiva, hierarquia visual forte, composições assimétricas e espaços negativos generosos.

### Humanidade

Fotografias reais da profissional, conteúdo acolhedor, linguagem acessível e informações objetivas.

**A arquitetura cria a atmosfera. A tipografia conta a história. As animações conduzem a experiência.**

---

# 3. DIREÇÃO DE ARTE

## Estilo

Arquitetônico + Editorial Premium.

Referências estéticas:

- Quiet luxury.
- Editorial contemporâneo.
- Arquitetura minimalista.
- Design suíço aplicado com sensibilidade.
- Fotografia arquitetônica.
- Composição cinematográfica.
- Minimalismo acolhedor.

Não desenvolver um site com aparência de clínica hospitalar.

Também não desenvolver um site que pareça um escritório de arquitetura.

A arquitetura é uma linguagem visual para representar o acolhimento psicológico.

## Atmosfera

Equilíbrio entre seções claras e escuras.

A experiência começa luminosa, ganha profundidade durante a navegação e termina em uma seção escura e sofisticada.

Evitar excesso de elementos decorativos.

---

# 4. PALETA DE CORES

Utilize exatamente estes tokens:

```css
:root {
  --color-charcoal: #1D1B1A;
  --color-coffee: #51433F;
  --color-taupe: #9C796A;
  --color-sand: #D8C7B8;
  --color-ivory: #F6F1EB;

  --background-primary: var(--color-ivory);
  --background-secondary: var(--color-sand);
  --background-dark: var(--color-charcoal);

  --text-primary: var(--color-charcoal);
  --text-secondary: var(--color-coffee);
  --text-inverse: var(--color-ivory);

  --border-subtle: rgba(81, 67, 63, 0.18);
}
```

Distribuição aproximada:

- 60% superfícies claras.
- 25% superfícies intermediárias.
- 15% superfícies escuras.

Não introduza cores vibrantes fora da identidade.

Não utilize gradientes coloridos chamativos.

Não use preto absoluto ou branco puro como cores predominantes.

---

# 5. TIPOGRAFIA

Utilize:

**Cormorant Garamond**

Para:

- Hero.
- Títulos.
- Frases editoriais.
- Destaques conceituais.
- Chamadas de impacto.

**Manrope**

Para:

- Navegação.
- Parágrafos.
- Botões.
- FAQ.
- Legendas.
- Informações profissionais.

Carregue as fontes utilizando `next/font`.

Utilize tamanhos fluidos com `clamp()`.

Exemplos:

```css
.heroTitle {
  font-size: clamp(3.25rem, 7vw, 7rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.sectionTitle {
  font-size: clamp(2.75rem, 5.5vw, 5.5rem);
  line-height: 1.04;
  letter-spacing: -0.035em;
}

.bodyText {
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  line-height: 1.75;
}
```

Esses valores são pontos de partida.

Ajuste conforme a composição real.

Não sacrifique legibilidade por estética.

---

# 6. LAYOUT E GRID

## Desktop

- Grid de 12 colunas.
- Container máximo aproximado de 1440px.
- Margens laterais generosas.
- Espaçamentos verticais amplos.
- Composições assimétricas.
- Fotografias com recortes elegantes.
- Títulos grandes.
- Elementos arquitetônicos discretos.

## Mobile

- Layout vertical.
- Tipografia redimensionada.
- Navegação compacta.
- Imagens com enquadramento adequado.
- Botões confortáveis para toque.
- Animações simplificadas.
- Nenhuma rolagem horizontal.

Não utilize cards arredondados repetitivos em todas as seções.

Prefira linhas editoriais, blocos tipográficos, fotografias e divisórias finas.

---

# 7. IDENTIDADE E MONOGRAMA

A identidade utiliza um símbolo inspirado em um portal arquitetônico.

Caso os arquivos da marca estejam disponíveis, utilize-os.

Não redesenhe uma marca definitiva diferente da identidade aprovada.

Se os arquivos não estiverem disponíveis, utilize uma representação provisória claramente identificada para substituição posterior.

O símbolo deve aparecer:

1. No cabeçalho.
2. Em detalhes selecionados.
3. No encerramento.
4. Eventualmente na animação inicial.

Evite repetição excessiva.

O monograma deve funcionar como uma assinatura visual.

---

# 8. HEADER

Crie um cabeçalho sofisticado e minimalista.

## Desktop

Esquerda:

Logotipo Joacylanny Psicologia.

Direita:

- Início.
- Sobre.
- Abordagem.
- Atendimento.
- Dúvidas.
- Contato.

Botão:

"Agendar atendimento".

## Comportamento

O cabeçalho pode permanecer fixo.

No início, deve integrar-se ao Hero.

Após a rolagem, pode receber uma superfície discreta e leve efeito de transparência, desde que mantenha contraste adequado.

O botão de agendamento deve permanecer facilmente acessível.

## Mobile

Menu compacto.

Abertura suave.

Links com áreas de toque adequadas.

Fechamento por Escape e ao selecionar um link.

Gerenciamento correto do foco.

Não permitir que o menu cause rolagem horizontal.

---

# 9. HERO — A ENTRADA DO PORTAL

Esta é a seção visualmente mais importante.

## Layout obrigatório

**Editorial dividido.**

A composição deve ter:

### Lado esquerdo

Pequeno identificador:

"JOACYLANNY PSICOLOGIA"

Título:

"Um espaço para a sua história."

Descrição:

"Psicoterapia de orientação psicanalítica, com uma escuta atenta à singularidade de cada pessoa e às questões que atravessam sua trajetória."

Botão principal:

"Agendar atendimento".

Indicador discreto de rolagem.

### Lado direito

Imagem arquitetônica com um arco monumental.

Características:

- Superfícies minerais.
- Tons de areia.
- Profundidade.
- Iluminação natural.
- Sombras suaves.
- Composição minimalista.

A arquitetura deve representar uma passagem.

## Composição

O texto precisa ser o protagonista informativo.

A arquitetura será o protagonista visual.

Ambos devem funcionar como uma composição única.

Não utilize imagem genérica de consultório como elemento principal do Hero.

## Animação de entrada

Sequência:

1. Identificador aparece.
2. Título é revelado por linhas.
3. Descrição entra suavemente.
4. CTA aparece.
5. Arquitetura recebe uma revelação visual discreta.

Duração total aproximada: 1,2 a 1,8 segundo, sem bloquear a interação.

## Portal Reveal

Implemente uma animação vinculada ao scroll.

O arco deve ganhar escala ou revelar progressivamente a próxima seção.

A transição deve criar a sensação de atravessar uma passagem.

Utilize GSAP e ScrollTrigger, caso apropriado.

Evite:

- Escalas exageradas.
- Travamentos.
- Movimentos bruscos.
- Longos períodos de scroll bloqueado.
- Conteúdo invisível caso o JavaScript falhe.

No mobile, simplifique o efeito quando necessário.

---

# 10. MANIFESTO — O VALOR DA ESCUTA

## Objetivo

Criar uma pausa editorial após o Hero.

## Título

"Nem tudo precisa ser compreendido de imediato."

## Conteúdo

Utilize o conteúdo do site antigo sobre escuta psicanalítica e singularidade para desenvolver um texto curto e acolhedor.

Não invente conceitos clínicos atribuídos à profissional.

## Layout

- Fundo marfim.
- Tipografia grande.
- Composição assimétrica.
- Espaço negativo.
- Elementos arquitetônicos mínimos.

## Animação

Revelação por linhas.

Movimento vertical discreto.

Não animar cada palavra do texto de leitura.

---

# 11. SOBRE JOACYLANNY

## Objetivo

Apresentar a profissional com credibilidade e humanidade.

## Conteúdo de referência

Informações identificadas no site antigo:

- Psicóloga Clínica.
- CRP 22/02243.
- Mais de 10 anos de formação em Psicologia.
- Orientação psicanalítica.
- Pós-graduação em Neuropsicologia.
- Formação contínua pelo Corpo Freudiano.

Esses dados devem ser verificados antes da publicação.

## Título

"Prazer, sou Joacylanny."

## Layout

Composição editorial assimétrica.

Fotografia vertical em destaque.

Texto com largura confortável.

Informações acadêmicas bem organizadas.

Utilizar fotografias reais, quando disponíveis.

Não substituir a profissional por uma pessoa gerada por IA.

## Animações

- Revelação da fotografia.
- Entrada gradual dos textos.
- Parallax discreto na imagem.

---

# 12. ABORDAGEM — PSICANÁLISE E NEUROPSICOLOGIA

## Objetivo

Explicar a abordagem profissional e sua formação complementar.

Criar dois blocos editoriais.

### Bloco 01 — Psicanálise

Explicar a orientação psicanalítica a partir das informações reais do site antigo.

Abordar:

- Escuta.
- História pessoal.
- Singularidade.
- Reflexão.
- Processo terapêutico.

### Bloco 02 — Neuropsicologia

Apresentar a formação complementar em Neuropsicologia.

Não afirmar que a profissional realiza avaliações neuropsicológicas sem confirmação.

## Layout

- Numeração editorial.
- Títulos serifados.
- Linhas divisórias.
- Textos objetivos.
- Composição sem cards genéricos.

## Animação

Transições suaves de opacidade e posição.

Hover discreto.

---

# 13. PÚBLICOS ATENDIDOS

## Conteúdo

Utilize as informações do site antigo sobre:

- Adultos.
- Adolescentes.
- Acompanhamento psicológico em contextos que podem envolver acompanhamento psiquiátrico.

A idade mínima deve ser confirmada.

## Design

Lista editorial numerada.

Cada item pode apresentar título e descrição.

Utilize transições suaves para expandir informações adicionais.

O conteúdo não deve depender exclusivamente de hover.

---

# 14. COMO FUNCIONA O ATENDIMENTO

## Objetivo

Explicar o processo de agendamento e acompanhamento.

## Estrutura

### 01 — Primeiro contato

O visitante entra em contato pelo WhatsApp.

### 02 — Primeira sessão

O horário é combinado e o acompanhamento é iniciado conforme as orientações da profissional.

### 03 — Continuidade

O processo terapêutico ocorre com frequência e duração adequadas ao acompanhamento.

## Informações do site antigo

- Contato pelo WhatsApp.
- Sessões geralmente semanais.
- Processo sem prazo fixo.
- Atendimento online mencionado no FAQ.

Existe uma divergência no conteúdo antigo sobre atendimento presencial e online.

Não publicar uma modalidade definitiva sem confirmação.

## Layout

Timeline editorial.

Numeração grande.

Linhas finas.

Textos curtos.

## Animação

A linha da timeline pode surgir progressivamente durante a rolagem.

---

# 15. PERGUNTAS FREQUENTES

Utilize as perguntas e respostas do site antigo.

As perguntas identificadas são:

1. O atendimento é presencial ou online?
2. A partir de que idade você atende?
3. Preciso ter um diagnóstico para procurar terapia?
4. Você trabalha junto com acompanhamento psiquiátrico?
5. Como agendo a primeira sessão?

Preserve o significado das respostas originais.

Confirme informações contraditórias antes da publicação.

## Design

Acordeão editorial premium.

- Fundo marfim.
- Linhas divisórias finas.
- Tipografia clara.
- Ícones discretos.
- Expansão suave.
- Sem sombras exageradas.

## Acessibilidade

Utilizar botões semânticos.

Aplicar `aria-expanded`.

Garantir navegação por teclado.

Respeitar preferência por movimento reduzido.

---

# 16. CTA FINAL — O CONVITE

## Conceito

"Existe espaço para a sua história."

## Design

Fundo carvão profundo.

Monograma arquitetônico em destaque.

Tipografia serifada grande.

Composição central ou levemente assimétrica.

## Conteúdo

Título:

"Existe espaço para a sua história."

Texto breve de convite para entrar em contato.

Botão:

"Entrar em contato".

## WhatsApp

Número identificado no site antigo:

+55 99 91840-1780

Validar antes de publicar.

Mensagem sugerida:

"Olá, Joacylanny! Gostaria de obter informações sobre o atendimento psicológico."

Não solicitar informações clínicas sensíveis no texto pré-preenchido.

## Animação

Transição suave entre a seção anterior e o fundo escuro.

Revelação gradual do símbolo.

Entrada sequencial do título e do botão.

---

# 17. FOOTER

Incluir:

- Logotipo.
- Nome profissional.
- CRP.
- Navegação.
- WhatsApp.
- Instagram, se confirmado.
- Política de privacidade.
- Direitos autorais.

## Crédito obrigatório

"Desenvolvido por JPCreative"

Com logotipo e link:

https://jpcreative.com.br

O crédito deve ser elegante, discreto e responsivo.

---

# 18. ANIMAÇÕES PREMIUM

Utilize GSAP + ScrollTrigger para animações complexas.

CSS para microinterações simples.

## Efeitos principais

### Portal Reveal

Animação arquitetônica vinculada ao scroll.

### Typography Reveal

Títulos revelados por linhas.

### Image Reveal

Fotografias surgem com máscara e opacidade.

### Architectural Parallax

Movimento sutil em imagens selecionadas.

### Dark Transition

Mudança visual para a seção final.

### Button Microinteractions

Movimento discreto de ícones, transições de fundo e feedback visual.

## Parâmetros iniciais

- Hero: 700–900ms por sequência principal.
- Títulos: 500–750ms.
- Botões: 180–250ms.
- Acordeões: 250–350ms.
- Parallax: deslocamento máximo aproximado de 8%.

Ajuste os valores conforme a experiência real.

## Requisitos obrigatórios

- Respeitar `prefers-reduced-motion`.
- Não bloquear interações.
- Evitar layout shifts.
- Não deixar conteúdo invisível.
- Limpar listeners e instâncias GSAP.
- Utilizar `gsap.context()` quando apropriado.
- Evitar conflitos com React Strict Mode.
- Garantir comportamento correto em mudanças de viewport.

---

# 19. RECURSOS VISUAIS

Prioridade:

1. Logotipo oficial.
2. Fotografias reais da profissional.
3. Imagens arquitetônicas.
4. Texturas discretas.
5. Elementos gráficos construídos em CSS ou SVG.

Se não houver fotografias disponíveis:

- Utilize placeholders elegantes.
- Preserve a composição final.
- Identifique os recursos pendentes.
- Não invente retratos da profissional.

Se não houver imagens arquitetônicas licenciadas:

- Utilize placeholders adequados.
- Não faça download de imagens sem verificar direitos de uso.
- Não substitua automaticamente por imagens genéricas inadequadas.

Não utilize emojis como ícones.

Utilize Bootstrap Icons quando necessário.

---

# 20. ARQUITETURA DO PROJETO

Stack preferencial:

- Next.js.
- React.
- TypeScript.
- CSS Modules.
- GSAP.
- ScrollTrigger.
- Bootstrap Icons.
- next/font.

Utilize versões compatíveis e estáveis.

Não instale dependências desnecessárias.

Estrutura sugerida:

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
    brand/
    architecture/
    professional/
```

Adapte a estrutura conforme o repositório existente.

## Organização do conteúdo

Centralize os dados profissionais em `site-content.ts`.

Não espalhe contatos, CRP, formação e textos por vários componentes.

Isso facilitará futuras atualizações.

---

# 21. PERFORMANCE

Priorize:

- Server Components quando apropriado.
- Client Components apenas onde necessários.
- Importação dinâmica de animações pesadas, quando útil.
- Imagens otimizadas.
- Fontes locais.
- Lazy loading abaixo da primeira dobra.
- Dimensões explícitas para imagens.
- Redução de JavaScript desnecessário.
- Carregamento eficiente do Hero.

Metas orientativas:

- LCP inferior a 2,5 segundos.
- CLS inferior a 0,1.
- INP inferior a 200ms.

Avaliar em condições representativas de dispositivos móveis.

Não sacrificar desempenho para adicionar efeitos visuais.

---

# 22. SEO

Implementar:

- Metadata API do Next.js.
- Title.
- Description.
- Open Graph.
- Twitter Cards.
- Sitemap.
- Robots.txt.
- Canonical.
- Hierarquia correta de headings.
- Textos alternativos adequados.
- Dados estruturados somente com informações verificadas.

Não inventar cidades, endereços, especialidades ou serviços para melhorar SEO.

Criar uma página de política de privacidade apropriada aos dados efetivamente coletados e às integrações utilizadas, sujeita à revisão antes da publicação.

---

# 23. ÉTICA PROFISSIONAL

O conteúdo deve respeitar as orientações aplicáveis do Conselho Federal de Psicologia e do Conselho Regional correspondente.

Não utilizar:

- Promessas de cura.
- Garantias de resultados.
- Depoimentos clínicos sem análise ética e autorização adequada.
- Diagnósticos inventados.
- Qualificações não confirmadas.
- Publicidade sensacionalista.
- Linguagem que explore sofrimento psicológico.

Identificar corretamente a profissional e seu CRP.

A comunicação deve ser acolhedora, objetiva e responsável.

---

# 24. ACESSIBILIDADE

Implementar:

- HTML semântico.
- Navegação por teclado.
- Estados de foco visíveis.
- Contraste adequado.
- Labels acessíveis.
- Botões com nomes compreensíveis.
- FAQ acessível.
- Menu mobile acessível.
- Preferência por movimento reduzido.
- Hierarquia correta de títulos.
- Links identificáveis.

Utilizar WCAG 2.2 AA como referência de qualidade.

---

# 25. CRITÉRIOS DE DESIGN

O resultado precisa apresentar:

- Identidade visual consistente.
- Tipografia sofisticada.
- Ritmo entre seções.
- Espaçamento bem resolvido.
- Fotografias com propósito.
- Hierarquia visual clara.
- Animações fluidas.
- Excelente responsividade.
- Experiência mobile refinada.

Evite:

- Aparência de template.
- Cards genéricos repetidos.
- Gradientes excessivos.
- Glassmorphism exagerado.
- Sombras artificiais.
- Ícones desnecessários.
- Animações em todos os elementos.
- Texto centralizado em todas as seções.
- Seções visualmente idênticas.
- Botões sem funcionalidade.

---

# 26. PLANO DE EXECUÇÃO

Implemente em etapas organizadas.

## Etapa 1 — Fundação

- Inspeção do projeto.
- Configuração.
- Dependências.
- Design tokens.
- Tipografia.
- Layout global.

## Etapa 2 — Hero e identidade

- Header.
- Hero editorial dividido.
- Arquitetura.
- Portal Reveal.
- Responsividade.

## Etapa 3 — Conteúdo

- Manifesto.
- Sobre.
- Abordagem.
- Públicos atendidos.
- Funcionamento.

## Etapa 4 — Conversão

- FAQ.
- CTA final.
- WhatsApp.
- Footer.

## Etapa 5 — Refinamento

- Animações.
- Microinterações.
- Tipografia.
- Espaçamento.
- Mobile.
- Acessibilidade.

## Etapa 6 — Validação

- TypeScript.
- Lint.
- Build.
- Testes funcionais.
- Responsividade.
- Links.
- SEO.
- Performance.

Execute as etapas de maneira contínua, salvo quando depender de uma decisão essencial do usuário.

---

# 27. VALIDAÇÃO OBRIGATÓRIA

Antes de considerar a implementação concluída:

1. Execute a verificação de tipos.
2. Execute o lint.
3. Execute o build de produção.
4. Corrija erros encontrados.
5. Verifique possíveis problemas de hidratação.
6. Confirme que as animações funcionam.
7. Teste o menu mobile.
8. Teste o FAQ.
9. Verifique todos os links.
10. Confirme a ausência de rolagem horizontal.
11. Verifique o comportamento em movimento reduzido.
12. Confirme que nenhum conteúdo essencial depende de animação.
13. Verifique a consistência das fontes e cores.
14. Revise a semântica e acessibilidade.
15. Identifique informações profissionais pendentes de aprovação.

Não afirme que um teste foi executado se não foi possível realizá-lo.

---

# 28. RESULTADO ESPERADO

Entregar um website institucional premium para Joacylanny Psicologia, com:

- Identidade arquitetônica marcante.
- Hero editorial dividido.
- Portal animado.
- Tipografia sofisticada.
- Seções claras e escuras equilibradas.
- Conteúdo profissional real.
- Fotografias integradas à narrativa.
- Animações GSAP premium.
- Excelente experiência mobile.
- SEO e acessibilidade.
- CTA de WhatsApp funcional.
- Rodapé com crédito da JP Creative.

O projeto deve transmitir a sensação de um espaço cuidadosamente criado para receber o visitante.

**Não quero apenas um site bonito. Quero uma experiência digital elegante, acolhedora, memorável e tecnicamente sólida.**

---

# 29. INSTRUÇÃO FINAL

Você possui autonomia para tomar decisões técnicas e realizar refinamentos visuais necessários para alcançar o melhor resultado.

Entretanto, preserve rigorosamente:

1. O conceito PORTAL — Elegância Essencial.
2. A paleta oficial.
3. A tipografia definida.
4. O Hero editorial dividido.
5. A linguagem arquitetônica + editorial.
6. As animações premium e equilibradas.
7. O conteúdo profissional verdadeiro.
8. A responsividade e acessibilidade.
9. A integração com WhatsApp.
10. O crédito da JP Creative.

Não substitua a direção criativa por uma solução genérica.

Não invente informações profissionais.

Não copie o design do site antigo.

Não entregue apenas uma demonstração visual quando a implementação funcional for possível.

**Implemente o projeto completo, refine os detalhes e valide o resultado antes de finalizar.**

Ao concluir, apresente um resumo objetivo com os arquivos modificados, funcionalidades implementadas, testes executados, resultados e pendências para publicação.