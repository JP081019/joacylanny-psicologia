// Dados conferidos em https://joacylannypsi.com.br/ em 21/10/2026.
// Comunicação reposicionada conforme o briefing da cliente em 22/10/2026.
// A denominação profissional definitiva e o CRP seguem sujeitos à aprovação.
// Modalidade e idade mínima ainda precisam de confirmação direta.
const heroTitleLines = ["Um espaço para ", "escutar o que ", "há de singular ", "em você."] as const;

export const site = {
  name: "Joacylanny",
  brand: "Joacylanny Psicologia",
  role: "Psicóloga",
  positioning: "Atendimento de orientação psicanalítica",
  crp: "CRP 22/02243",
  url: "https://joacylannypsi.com.br",
  phone: "+55 99 91840-1780",
  whatsapp: "https://wa.me/5599918401780?text=" + encodeURIComponent("Olá, Joacylanny! Gostaria de obter informações sobre o atendimento psicológico."),
  hero: {
    eyebrow: "Psicologia e Psicanálise",
    title: heroTitleLines.join(""),
    titleLines: heroTitleLines,
    description: "Um convite à fala, à escuta e à compreensão da própria história, respeitando o tempo e a singularidade de cada pessoa.",
  },
  manifesto: {
    title: "Nem tudo precisa ser compreendido de imediato.",
    text: "Há questões que se repetem, sentimentos difíceis de nomear e histórias que ainda procuram palavras. A escuta psicanalítica oferece um espaço para falar sobre essas experiências, sem respostas prontas ou julgamentos, respeitando o tempo de cada pessoa.",
  },
  about: [
    "Sou psicóloga, com mais de 10 anos de formação em Psicologia. A Psicanálise é a orientação central do meu trabalho clínico, e minha trajetória inclui a formação contínua pelo Corpo Freudiano.",
    "Atendo adultos e adolescentes em um espaço de fala e escuta, atento à história e às questões de cada pessoa. O acompanhamento respeita a singularidade e o tempo de cada processo.",
    "Minha trajetória acadêmica também inclui pós-graduação em Neuropsicologia, como formação complementar ao olhar clínico.",
  ],
  qualifications: ["Atuação clínica de orientação psicanalítica", "Formação contínua pelo Corpo Freudiano", "Formação complementar: pós-graduação em Neuropsicologia"],
  approach: {
    title: "A escuta que vai além do que é dito.",
    paragraphs: [
      "A Psicanálise oferece um espaço de fala e escuta em que cada pessoa pode se aproximar de sua própria história, de seus conflitos e de questões que nem sempre encontram respostas imediatas.",
      "Não se trata de oferecer soluções prontas, mas de construir um percurso de reflexão e elaboração, respeitando a singularidade de cada sujeito.",
    ],
    concepts: [
      { title: "A palavra", text: "Um espaço em que falar livremente faz parte do processo de escuta e reflexão." },
      { title: "A singularidade", text: "Cada pessoa possui uma história própria, que merece ser considerada em sua complexidade." },
      { title: "O tempo", text: "O processo psicanalítico respeita o percurso individual, sem estabelecer respostas ou resultados padronizados." },
    ],
  },
  finalCta: {
    text: "Um espaço de escuta, reflexão e acolhimento, respeitando a singularidade de cada percurso.",
  },
  seo: {
    title: "Joacylanny | Psicologia e Psicanálise",
    description: "Conheça o trabalho clínico de Joacylanny, psicóloga com atuação orientada pela Psicanálise. Um espaço de escuta que respeita a singularidade de cada pessoa.",
    imageTitle: "Psicologia e Psicanálise",
  },
  images: {
    horizontalLogo: "/logo/Logotipo Minimalista Joacylanny Psicologia.png",
    darkLogo: "/logo/Logo Elegante Joacylanny Psicologia.png",
    monogram: "/logo/Arco Minimalista em Tons Terrosos.png",
    portrait: "/img/Retrato Sereno no Jardim Florido.png",
    architecture: "/images/architecture/portal.webp",
  },
} as const;

export const navigation = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

export const audiences = [
  { title: "Adultos", text: "Uma escuta de orientação psicanalítica para falar sobre as relações, os conflitos e as experiências que atravessam a vida adulta." },
  { title: "Adolescentes", text: "Um espaço de fala e escuta atento às transformações dessa fase, respeitando a história e a singularidade de cada adolescente." },
  { title: "Cuidado em conjunto", text: "Quando necessário, o acompanhamento de orientação psicanalítica pode caminhar junto ao cuidado psiquiátrico." },
] as const;

export const steps = [
  { title: "Primeiro contato", text: "O primeiro passo é entrar em contato para obter informações e combinar o agendamento." },
  { title: "Primeira sessão", text: "Um primeiro espaço de conversa e escuta, em que você poderá falar sobre o que o levou a buscar atendimento." },
  { title: "Continuidade", text: "O acompanhamento é construído ao longo das sessões, respeitando a singularidade e o tempo de cada processo." },
] as const;

export const faqs = [
  { question: "O que é a Psicanálise?", answer: "A Psicanálise é uma abordagem clínica que valoriza a fala, a escuta e a investigação das experiências, dos conflitos e da história singular de cada pessoa." },
  { question: "Preciso saber exatamente o que falar na primeira sessão?", answer: "Não. Você não precisa chegar com tudo organizado ou saber exatamente por onde começar. A conversa pode partir daquilo que estiver presente para você naquele momento." },
  { question: "Quanto tempo dura um processo psicanalítico?", answer: "Não existe um prazo único para todos. A duração do acompanhamento considera as particularidades de cada pessoa e de seu processo." },
  { question: "Preciso ter um diagnóstico para procurar atendimento?", answer: "Não. A busca por acompanhamento pode partir de diferentes questões, dificuldades, conflitos ou do desejo de compreender melhor determinadas experiências." },
  { question: "O atendimento é presencial ou online?", answer: "Para confirmar a modalidade disponível e combinar o formato mais adequado, entre em contato pelo WhatsApp. Você também pode esclarecer suas dúvidas antes de agendar." },
  { question: "A partir de que idade você atende?", answer: "Atendo adolescentes e adultos, com um olhar atento às particularidades de cada fase da vida. A idade mínima e as orientações para adolescentes podem ser confirmadas no primeiro contato." },
  { question: "Você trabalha junto com acompanhamento psiquiátrico?", answer: "Sim. Quando necessário, o acompanhamento psicológico segue de forma integrada ao cuidado psiquiátrico." },
  { question: "Como agendo a primeira sessão?", answer: "É só chamar no WhatsApp pelo botão do site. No primeiro contato, você recebe informações sobre como funciona o atendimento e combina um horário." },
] as const;
