import type { Locale } from "@/lib/i18n";

export const aiSkills = [
  "Spec Driven Development",
  "Cursor",
  "GitHub Copilot",
  "Prompt engineering",
  "ChatGPT / LLMs",
  "Automação com IA",
  "Code review assistido",
] as const;

export const skills = [
  "PHP",
  "Yii2",
  "Laravel",
  "Joomla",
  "JavaScript",
  "Livewire",
  "Alpine.js",
  "Tailwind CSS",
  "Vue.js",
  "React",
  "Next.js",
  "Node.js",
  "C#",
  "GraphQL",
  "REST",
  "MySQL",
  "PostgreSQL",
  "SQL Server",
  "Docker",
  "Git",
  "Linux",
  "IA / LLMs",
  "Spec Driven Development",
] as const;

export const site = {
  name: "Ivan Balbino",
  fullName: "Ivan Cássio Balbino Dias Amaral",
  email: "Ivancs62@gmail.com",
  github: "https://github.com/balbino05",
  linkedin:
    "https://www.linkedin.com/in/ivan-c%C3%A1ssio-balbino-dias-amaral-57b26632/",
  cv: "/Ivan_Balbino_CV.pdf",
  whatsapp: "https://wa.me/5531998193805",
  photo: "/ivan-balbino.png",
} as const;

type Copy = {
  metaTitle: string;
  metaDescription: string;
  nav: {
    about: string;
    ai: string;
    experience: string;
    projects: string;
    contact: string;
    toDark: string;
    toLight: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    heading: string;
    body: string[];
    location: string;
  };
  ai: {
    heading: string;
    lead: string;
    body: string[];
  };
  experience: {
    heading: string;
    current: string;
  };
  projects: {
    heading: string;
    featured: string;
    viewCase: string;
    viewRepo: string;
    viewLive: string;
    production: string;
    opensource: string;
  };
  contact: {
    heading: string;
    lead: string;
    email: string;
    linkedin: string;
    github: string;
    cv: string;
    whatsapp: string;
  };
  footer: string;
  notFound: {
    title: string;
    body: string;
    home: string;
  };
  caseStudy: {
    back: string;
    role: string;
    stack: string;
    architecture: string;
    flow: string;
    repo: string;
  };
};

export const copy: Record<Locale, Copy> = {
  pt: {
    metaTitle: "Ivan Balbino | Desenvolvedor Full Stack",
    metaDescription:
      "Portfólio de Ivan Balbino, desenvolvedor full stack. Vue, Laravel, Node, GraphQL, Docker e uso prático de IA no desenvolvimento.",
    nav: {
      about: "Sobre",
      ai: "IA",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      toDark: "Ativar modo escuro",
      toLight: "Ativar modo claro",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      kicker: "Desenvolvedor full stack",
      title: "Ivan Balbino",
      lead: "Sistemas web, APIs e integrações no setor público e no e-commerce. Uso Spec Driven Development e IA no fluxo para gerar código de forma inteligente e entregar com qualidade de produção.",
      ctaProjects: "Ver projetos",
      ctaContact: "Falar comigo",
    },
    about: {
      heading: "Sobre",
      body: [
        "Desenvolvedor pleno em Contagem (MG), hoje na Controladoria-Geral do Estado de Minas Gerais. Nos sistemas da CGE trabalho principalmente com PHP (Yii2, Laravel e Joomla), JavaScript, Livewire, Alpine.js, Tailwind, MySQL e Docker.",
        "Também tenho experiência com Vue, Node, C# e GraphQL em outras empresas. Em todos esses contextos, o padrão é o mesmo: entender a regra de negócio, expor isso em API ou interface e manter o sistema utilizável.",
        "Aberto a vagas pleno/senior full stack e a freelance com escopo bem definido.",
      ],
      location: "Contagem, MG, Brasil",
    },
    ai: {
      heading: "Inteligência artificial",
      lead: "IA faz parte do meu jeito de construir software, não só de falar sobre o tema.",
      body: [
        "No dia a dia uso Spec Driven Development: defino a especificação antes de gerar código, para a IA (e o time) trabalhar com contexto claro, menos retrabalho e entregas mais previsíveis.",
        "Uso Cursor, Copilot e modelos de linguagem para acelerar implementação, refatoração, testes e revisão de código, sempre validando o resultado.",
        "Trabalho com prompt engineering e specs para gerar fluxos, documentar APIs, explorar arquitetura e produzir código de forma inteligente, alinhado ao problema real.",
      ],
    },
    experience: {
      heading: "Experiência",
      current: "Atual",
    },
    projects: {
      heading: "Projetos",
      featured: "Destaque",
      viewCase: "Ver case",
      viewRepo: "GitHub",
      viewLive: "Site",
      production: "Produção",
      opensource: "Open source",
    },
    contact: {
      heading: "Contato",
      lead: "Para vaga, proposta ou papo técnico, o e-mail é o caminho mais direto.",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Baixar CV",
      whatsapp: "WhatsApp",
    },
    footer: "Ivan Balbino · Contagem, MG",
    notFound: {
      title: "Página não encontrada",
      body: "Esse endereço não existe neste site.",
      home: "Voltar ao início",
    },
    caseStudy: {
      back: "Voltar ao portfólio",
      role: "Papel",
      stack: "Stack",
      architecture: "Arquitetura",
      flow: "Fluxo",
      repo: "Repositório no GitHub",
    },
  },
  en: {
    metaTitle: "Ivan Balbino | Full Stack Developer",
    metaDescription:
      "Portfolio of Ivan Balbino, full stack developer. Vue, Laravel, Node, GraphQL, Docker, and practical AI use in software development.",
    nav: {
      about: "About",
      ai: "AI",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      toDark: "Switch to dark mode",
      toLight: "Switch to light mode",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      kicker: "Full stack developer",
      title: "Ivan Balbino",
      lead: "Web systems, APIs, and integrations across the public sector and e-commerce. I use Spec Driven Development and AI in the workflow to generate code intelligently and ship with production quality.",
      ctaProjects: "See projects",
      ctaContact: "Get in touch",
    },
    about: {
      heading: "About",
      body: [
        "Mid-level developer based in Contagem (Minas Gerais, Brazil), currently at the State Comptroller General's Office of Minas Gerais. Day to day I work with Vue, PHP/Laravel, Node, and C# on web apps, APIs, and system integrations.",
        "I have worked in healthcare, foreign trade, fintech, e-commerce, and government. The pattern is consistent: learn the business rules, expose them through REST or GraphQL, and keep the UI usable.",
        "Open to mid/senior full stack roles and freelance work with a clear scope.",
      ],
      location: "Contagem, Minas Gerais, Brazil",
    },
    ai: {
      heading: "Artificial intelligence",
      lead: "AI is part of how I build software, not only a talking point.",
      body: [
        "Day to day I use Spec Driven Development: I define the specification before generating code, so AI tools (and the team) work with clear context, less rework, and more predictable delivery.",
        "I use Cursor, Copilot, and language models to speed up implementation, refactoring, tests, and code review, while still validating the output.",
        "I combine prompt engineering and specs to draft flows, document APIs, explore architecture, and generate code intelligently against the real problem.",
      ],
    },
    experience: {
      heading: "Experience",
      current: "Current",
    },
    projects: {
      heading: "Projects",
      featured: "Featured",
      viewCase: "Read case study",
      viewRepo: "GitHub",
      viewLive: "Live site",
      production: "Production",
      opensource: "Open source",
    },
    contact: {
      heading: "Contact",
      lead: "For a role, a proposal, or a technical conversation, email is the fastest path.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download CV",
      whatsapp: "WhatsApp",
    },
    footer: "Ivan Balbino · Contagem, Brazil",
    notFound: {
      title: "Page not found",
      body: "This address is not part of the site.",
      home: "Back to home",
    },
    caseStudy: {
      back: "Back to portfolio",
      role: "Role",
      stack: "Stack",
      architecture: "Architecture",
      flow: "Flow",
      repo: "GitHub repository",
    },
  },
};

export function t(locale: Locale) {
  return copy[locale];
}
