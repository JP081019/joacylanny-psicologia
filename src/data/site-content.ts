// Dados conferidos em https://joacylannypsi.com.br/ em 21/10/2026.
// Modalidade e idade mínima ainda precisam de confirmação direta.
export const site = {
  name: "Joacylanny",
  brand: "Joacylanny Psicologia",
  role: "Psicóloga Clínica",
  crp: "CRP 22/02243",
  url: "https://joacylannypsi.com.br",
  phone: "+55 99 91840-1780",
  whatsapp: "https://wa.me/5599918401780?text=" + encodeURIComponent("Olá, Joacylanny! Gostaria de obter informações sobre o atendimento psicológico."),
  hero: {
    title: "Um espaço para a sua história.",
    description: "Psicoterapia de orientação psicanalítica, com uma escuta atenta à singularidade de cada pessoa e às questões que atravessam sua trajetória.",
  },
  about: [
    "Sou psicóloga clínica, com mais de 10 anos de formação em Psicologia. Meu trabalho é orientado pela psicanálise, com formação contínua pelo Corpo Freudiano e pós-graduação em Neuropsicologia.",
    "Atendo adultos e adolescentes, com uma escuta voltada às questões existenciais e do inconsciente. Um cuidado que respeita a singularidade e o tempo de cada processo.",
  ],
  qualifications: ["Orientação psicanalítica", "Formação contínua pelo Corpo Freudiano", "Pós-graduação em Neuropsicologia"],
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
  { title: "Adultos", text: "Um espaço para as questões da vida adulta, as relações, o trabalho e os caminhos da sua história." },
  { title: "Adolescentes", text: "Uma escuta sensível às transformações, descobertas e particularidades dessa fase da vida." },
  { title: "Cuidado em conjunto", text: "Quando necessário, o acompanhamento psicológico pode caminhar junto ao cuidado psiquiátrico." },
] as const;

export const steps = [
  { title: "Primeiro contato", text: "Pelo WhatsApp, você pode esclarecer suas dúvidas e combinar um horário para o primeiro encontro." },
  { title: "Primeira sessão", text: "Um momento para conhecer sua história e conversar sobre o que trouxe você até aqui, no seu tempo." },
  { title: "Continuidade", text: "A frequência e o formato são combinados ao longo do processo. A escuta se constrói com continuidade, sem prazo fixo." },
] as const;

export const faqs = [
  { question: "O atendimento é presencial ou online?", answer: "Para confirmar a modalidade disponível e combinar o formato mais adequado, entre em contato pelo WhatsApp. Você também pode esclarecer suas dúvidas antes de agendar." },
  { question: "A partir de que idade você atende?", answer: "Atendo adolescentes e adultos, com um olhar atento às particularidades de cada fase da vida. A idade mínima e as orientações para adolescentes podem ser confirmadas no primeiro contato." },
  { question: "Preciso ter um diagnóstico para procurar terapia?", answer: "Não. Muitas pessoas buscam o processo analítico antes mesmo de saber nomear o que sentem, e é justamente aí que o trabalho começa." },
  { question: "Você trabalha junto com acompanhamento psiquiátrico?", answer: "Sim. Quando necessário, o acompanhamento psicológico segue de forma integrada ao cuidado psiquiátrico." },
  { question: "Como agendo a primeira sessão?", answer: "É só chamar no WhatsApp pelo botão do site. No primeiro contato, você recebe informações sobre como funciona o atendimento e combina um horário." },
] as const;
