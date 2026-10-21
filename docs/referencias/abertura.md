# PROMPT — ANIMAÇÃO CINEMATOGRÁFICA DE ABERTURA
## Joacylanny Psicologia | PORTAL — Elegância Essencial

Você é um desenvolvedor frontend sênior especializado em Next.js, React, TypeScript, GSAP, SVG Animation, direção de arte digital e experiências web premium.

Sua tarefa é **implementar uma animação cinematográfica de entrada no site Joacylanny Psicologia**, integrando-a perfeitamente ao design arquitetônico + editorial já desenvolvido.

Além disso, você deverá localizar e utilizar de maneira estratégica os arquivos de logotipo e as fotografias reais da Joacylanny que já estão disponíveis na pasta do projeto.

**IMPORTANTE: Não recrie o site do zero. Trabalhe sobre o projeto existente, preservando sua estrutura, identidade visual, conteúdo, responsividade e funcionalidades.**

---

# 1. CONCEITO DA ANIMAÇÃO

## O nascimento do Portal

A identidade visual da Joacylanny utiliza um símbolo inspirado em um arco arquitetônico.

Quero transformar esse símbolo em uma experiência visual.

Quando o visitante entrar no site pela primeira vez, verá o arco sendo desenhado progressivamente, como se a identidade estivesse ganhando vida.

Depois de formado, o arco deverá crescer e se transformar visualmente no portal arquitetônico presente no Hero.

A transição precisa parecer uma única cena contínua.

**O símbolo não deve simplesmente desaparecer para dar lugar ao site. Ele deve se transformar no elemento arquitetônico do Hero.**

A experiência deve transmitir:

- Elegância.
- Tranquilidade.
- Sofisticação.
- Acolhimento.
- Fluidez.
- Identidade.
- Profundidade.

Nada de efeitos exagerados, flashes, partículas, brilhos tecnológicos ou transições bruscas.

A referência é uma experiência cinematográfica minimalista de uma marca premium.

---

# 2. PRIMEIRA ETAPA — INSPEÇÃO DOS ARQUIVOS

Antes de implementar qualquer coisa, inspecione o projeto.

Localize:

1. Os arquivos de logotipo da Joacylanny.
2. As versões horizontal, vertical e de monograma, caso existam.
3. Os arquivos SVG, PNG, JPG ou WebP da identidade.
4. As fotografias reais da Joacylanny.
5. As imagens arquitetônicas já utilizadas.
6. Os componentes existentes do Hero.
7. A estrutura de estilos e animações.
8. As dependências instaladas.

Não presuma os nomes dos arquivos.

Localize os recursos reais disponíveis no repositório.

Não substitua arquivos existentes sem necessidade.

## Regras para os logotipos

Utilize prioritariamente a identidade oficial encontrada no projeto.

Se houver um SVG vetorial do monograma, aproveite seus caminhos para a animação de desenho.

Se houver apenas uma imagem rasterizada, não tente aplicar animação de traçado diretamente sobre o PNG.

Nesse caso, crie uma representação vetorial fiel ao símbolo original, preservando suas proporções e geometria.

Não invente um novo logotipo.

Não utilize uma fonte ou um ícone genérico para substituir o monograma.

Se não for possível reproduzir fielmente o símbolo, sinalize a limitação e mantenha a marca original, utilizando uma transição alternativa.

---

# 3. SEQUÊNCIA CINEMATOGRÁFICA

A animação será dividida em cinco momentos.

## MOMENTO 01 — SILÊNCIO VISUAL

Duração aproximada: 0–0,3 segundo.

A tela apresenta um fundo marfim:

`#F6F1EB`

No centro, existe apenas o espaço onde o símbolo aparecerá.

Não utilizar spinner, porcentagem de carregamento ou textos como "Loading".

A tela deve parecer intencionalmente minimalista.

## MOMENTO 02 — FORMAÇÃO DO ARCO

Duração aproximada: 0,3–1,5 segundo.

A primeira linha do monograma começa a ser desenhada.

O movimento deverá seguir a geometria real do símbolo.

A linha percorre a lateral, alcança a curva superior e completa o arco.

Cor principal:

`#51433F`

Utilizar SVG com técnicas de animação de traçado, como `stroke-dasharray` e `stroke-dashoffset`, controladas pelo GSAP.

A velocidade deverá ser suave, com easing elegante.

Evitar movimentos mecânicos.

## MOMENTO 03 — PROFUNDIDADE DO SÍMBOLO

Duração aproximada: 1,0–1,9 segundo.

Enquanto a primeira linha termina, a estrutura interna do monograma começa a surgir.

A segunda linha utiliza a tonalidade:

`#9C796A`

O resultado deverá reproduzir o símbolo real da identidade visual.

Os traços devem aparecer em uma sequência visual harmoniosa.

## MOMENTO 04 — REVELAÇÃO DA MARCA

Duração aproximada: 1,9–2,3 segundos.

Após a formação do arco, o nome Joacylanny Psicologia aparece suavemente.

Utilize preferencialmente a versão oficial do logotipo disponível na pasta.

A marca pode surgir por opacidade e um pequeno deslocamento vertical.

Não recrie a tipografia da marca de forma aproximada caso exista um arquivo oficial.

A composição deve ficar centralizada e equilibrada.

## MOMENTO 05 — TRANSFORMAÇÃO NO HERO

Duração aproximada: 2,3–3,1 segundos.

Este é o momento mais importante.

O arco central começa a aumentar de tamanho e se deslocar suavemente em direção à área arquitetônica do Hero.

A transformação deve criar a sensação de que o símbolo se torna um portal real.

O movimento poderá utilizar:

- Scale.
- Translate.
- Clip-path.
- SVG masks.
- Transform origin.
- Opacity.
- GSAP timeline.

A arquitetura do Hero deverá ser revelada progressivamente através da abertura do arco.

Não quero simplesmente um fade-out da introdução seguido de um fade-in do Hero.

Quero continuidade visual.

O arco da identidade deve funcionar como a ponte entre a abertura e o site.

Ao finalizar:

1. A arquitetura do Hero estará visível.
2. O título surgirá à esquerda.
3. A descrição aparecerá.
4. O CTA será revelado.
5. O site ficará completamente navegável.

Título do Hero:

**"Um espaço para a sua história."**

A sequência deve terminar de maneira natural, sem qualquer salto visual.

Os tempos são referências e podem ser refinados conforme a implementação.

---

# 4. INTEGRAÇÃO COM O HERO EXISTENTE

O Hero já segue a direção arquitetônica + editorial.

Preserve essa composição.

## Desktop

À esquerda:

- Identificador profissional.
- Título principal.
- Descrição.
- Botão de agendamento.

À direita:

- Portal arquitetônico.
- Profundidade visual.
- Iluminação natural.
- Elementos da identidade.

A animação de entrada deverá terminar exatamente nessa composição.

## Mobile

A animação deverá ser adaptada.

O arco pode crescer e revelar a imagem arquitetônica sem movimentos laterais excessivos.

Evitar grandes escalas que prejudiquem o desempenho.

Não provocar rolagem horizontal.

Não utilizar dimensões fixas que ultrapassem a viewport.

---

# 5. UTILIZAÇÃO INTELIGENTE DAS LOGOS

Os arquivos de logo já estão disponíveis na pasta do projeto.

Quero que você os identifique e escolha a versão mais apropriada para cada contexto.

## Header

Utilize a versão horizontal ou a composição mais adequada ao espaço disponível.

O logotipo deve ter excelente legibilidade e proporções corretas.

## Animação inicial

Utilize o monograma isolado.

O símbolo deve ser o protagonista.

## Hero

O arco arquitetônico deverá dialogar visualmente com a geometria do monograma.

Não é necessário repetir o logotipo completo em vários pontos.

## Footer

Utilize a versão mais apropriada para o fundo escuro ou claro existente.

## Mobile

Se houver uma versão compacta oficial, considere utilizá-la no cabeçalho.

### Regras obrigatórias

- Preservar proporções.
- Não distorcer.
- Não aplicar filtros desnecessários.
- Não modificar as cores oficiais sem justificativa.
- Não usar versões diferentes aleatoriamente.
- Não criar duplicações decorativas excessivas.
- Manter a marca reconhecível.

---

# 6. UTILIZAÇÃO INTELIGENTE DAS FOTOGRAFIAS

**As fotografias reais da Joacylanny também estão na pasta do projeto.**

Localize e analise os arquivos antes de decidir onde utilizá-los.

Não escolha fotografias aleatoriamente.

Observe:

- Resolução.
- Orientação.
- Enquadramento.
- Expressão.
- Iluminação.
- Fundo.
- Espaço negativo.
- Compatibilidade com a identidade visual.

## Prioridade 01 — Seção Sobre

Escolha a fotografia mais adequada para apresentar a profissional.

Preferencialmente:

- Retrato vertical.
- Boa iluminação.
- Expressão natural.
- Enquadramento elegante.
- Fundo visualmente harmonioso.

A fotografia deve ser um elemento importante da seção.

Não a coloque em um card pequeno e genérico.

Utilize uma composição editorial com destaque visual.

## Prioridade 02 — Outras seções

Se houver fotografias adicionais, distribua-as estrategicamente.

Exemplos:

- Uma fotografia espontânea em uma seção de apresentação.
- Um retrato alternativo em uma composição editorial.
- Uma imagem contextual em uma seção de atendimento, caso faça sentido.

Não é obrigatório utilizar todas as fotografias.

**É melhor utilizar duas imagens de maneira excelente do que espalhar cinco imagens sem propósito.**

## Tratamento visual

Caso necessário, utilize ajustes discretos de:

- Enquadramento.
- Posicionamento.
- Proporção.
- Contraste visual por CSS.
- `object-fit`.
- `object-position`.

Não altere artificialmente o rosto ou a aparência da profissional.

Não gere uma nova pessoa para substituí-la.

Não utilize as fotografias como elementos decorativos sem função.

---

# 7. ARQUITETURA TÉCNICA DA ANIMAÇÃO

Utilize preferencialmente:

- React.
- TypeScript.
- GSAP.
- SVG.
- CSS Modules.

Crie componentes reutilizáveis.

Estrutura sugerida:

```text
src/
  components/
    intro/
      PortalIntro.tsx
      PortalIntro.module.css
      PortalSymbol.tsx

    sections/
      Hero.tsx
      Hero.module.css

  hooks/
    useReducedMotion.ts
```

Adapte à arquitetura existente.

Não crie arquivos redundantes.

## GSAP

Utilize uma timeline principal para sincronizar os movimentos.

Exemplo conceitual:

```ts
const timeline = gsap.timeline({
  paused: true,
});

timeline
  .fromTo(
    outerPath,
    { strokeDashoffset: outerLength },
    {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power2.inOut",
    }
  )
  .fromTo(
    innerPath,
    { strokeDashoffset: innerLength },
    {
      strokeDashoffset: 0,
      duration: 0.9,
      ease: "power2.inOut",
    },
    "-=0.6"
  )
  .fromTo(
    brand,
    { autoAlpha: 0, y: 12 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.45,
    }
  )
  .to(portal, {
    scale: 2.5,
    duration: 0.9,
    ease: "power3.inOut",
  });
```

Este código é apenas ilustrativo.

Não copie valores cegamente.

Calcule o comprimento real dos caminhos SVG e ajuste o posicionamento conforme a geometria do símbolo e do Hero.

---

# 8. CONTINUIDADE VISUAL REAL

A transformação entre monograma e arquitetura deve ser cuidadosamente construída.

Se necessário, utilize uma camada de transição posicionada sobre o Hero.

Durante a animação:

1. O símbolo aparece no centro.
2. O símbolo aumenta.
3. Sua abertura revela a arquitetura.
4. A camada de introdução desaparece progressivamente.
5. A arquitetura permanece na posição final correta.

Evite qualquer flash de fundo.

Evite diferenças abruptas de escala.

Evite desalinhamento entre o arco SVG e a imagem arquitetônica.

Caso a imagem arquitetônica não corresponda exatamente à geometria do símbolo, utilize uma máscara de transição que preserve a sensação de continuidade, sem deformar a marca oficial.

A prioridade é uma transformação visual convincente.

---

# 9. CONTROLE DE EXIBIÇÃO

A animação não deve aparecer a cada navegação.

Comportamento desejado:

- Primeira entrada da sessão: executar animação completa.
- Recarregamento durante a mesma sessão: apresentar o Hero diretamente.
- Navegação interna: não repetir.
- Nova sessão: permitir nova exibição.

Utilize `sessionStorage` quando disponível, com tratamento seguro para ambientes sem acesso ao armazenamento.

Não provoque problemas de hidratação no Next.js.

A animação não deve depender de recursos externos que possam atrasar indefinidamente a entrada.

## Botão de pular

Inclua uma opção discreta:

"Pular introdução".

O botão deve:

- Ser acessível por teclado.
- Interromper a timeline corretamente.
- Remover a camada de introdução.
- Exibir imediatamente o Hero.
- Restaurar a rolagem e o foco.
- Evitar estados intermediários quebrados.

---

# 10. ACESSIBILIDADE

Respeite `prefers-reduced-motion`.

Quando o usuário preferir movimento reduzido:

- Não executar a sequência cinematográfica.
- Mostrar diretamente o Hero.
- Não aplicar grandes escalas.
- Não bloquear a navegação.

A introdução não pode impedir o acesso ao conteúdo principal.

Se houver erro no carregamento da animação, o site deverá continuar funcional.

O conteúdo do Hero deve permanecer semanticamente disponível.

Evite duplicar títulos e textos importantes apenas para fins visuais.

---

# 11. PERFORMANCE

A animação deve ser leve.

Priorize:

- SVG vetorial.
- Transformações aceleradas.
- Opacidade.
- Máscaras eficientes.
- Imagens otimizadas.
- Ausência de vídeos pesados.
- Poucas operações de layout.

Não utilize WebGL ou Three.js para um efeito que pode ser realizado com SVG e GSAP.

Evite animações simultâneas desnecessárias.

Utilize `will-change` apenas nos elementos necessários e remova a otimização após a transição quando apropriado.

A introdução não deve prejudicar o LCP, CLS ou INP.

---

# 12. INTEGRAÇÃO COM O SITE

Não altere desnecessariamente:

- A paleta de cores.
- A tipografia.
- O conteúdo profissional.
- O FAQ.
- Os contatos.
- O WhatsApp.
- O SEO.
- As outras seções.
- A responsividade.
- O rodapé da JP Creative.

O objetivo é **adicionar uma experiência de abertura premium e melhorar a utilização dos recursos visuais existentes**, preservando todo o restante.

Se identificar problemas reais de composição relacionados às fotografias ou logos, corrija-os sem descaracterizar o projeto.

---

# 13. TESTES OBRIGATÓRIOS

Após implementar:

1. Teste a primeira visita.
2. Teste o recarregamento.
3. Teste a navegação interna.
4. Teste o botão de pular.
5. Teste o modo de movimento reduzido.
6. Teste desktop.
7. Teste tablet.
8. Teste mobile.
9. Teste telas pequenas.
10. Verifique o alinhamento do arco.
11. Verifique a transição para o Hero.
12. Verifique a utilização das logos.
13. Verifique o enquadramento das fotografias.
14. Verifique erros de hidratação.
15. Verifique o console.
16. Execute TypeScript, lint e build.
17. Corrija os problemas encontrados.

Não afirme que um teste foi realizado se não foi possível executá-lo.

---

# 14. CRITÉRIOS DE ACEITE

A implementação estará concluída quando:

- O monograma oficial for utilizado corretamente.
- O arco for desenhado progressivamente.
- A animação apresentar fluidez.
- A marca surgir elegantemente.
- O arco se transformar visualmente no Hero.
- A transição não parecer um simples fade.
- O Hero permanecer responsivo.
- A animação puder ser pulada.
- A introdução não se repetir desnecessariamente.
- O modo de movimento reduzido funcionar.
- As fotografias reais estiverem bem posicionadas.
- As logos estiverem corretamente distribuídas.
- O conteúdo e as funcionalidades existentes forem preservados.
- Não houver erros relevantes de console ou build.

---

# 15. INSTRUÇÃO FINAL

Quero que a animação inicial se torne uma assinatura visual exclusiva do site Joacylanny Psicologia.

O visitante deverá ver o arco da marca nascer, ganhar forma e se transformar no portal arquitetônico do Hero.

Tudo precisa acontecer como uma experiência contínua, elegante e cinematográfica.

Além disso, utilize de maneira inteligente os arquivos de identidade visual e as fotografias reais já disponíveis na pasta do projeto.

Não utilize placeholders se os arquivos corretos já estiverem disponíveis.

Não invente novos logotipos.

Não distribua imagens aleatoriamente.

Não recrie o projeto.

**Implemente a animação completa, integre os recursos reais, refine as transições e valide o resultado.**

Ao finalizar, informe quais arquivos foram utilizados, quais componentes foram modificados, quais testes foram executados e se existe alguma pendência.