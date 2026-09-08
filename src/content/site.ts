import type { Locale } from "@/lib/i18n";

export const aiSkills = [
  "Cursor",
  "GitHub Copilot",
  "Prompt engineering",
  "ChatGPT / LLMs",
  "Automação com IA",
  "Code review assistido",
] as const;

export const skills = [
  "Vue.js",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "Laravel",
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
      lead: "Sistemas web, APIs e integrações no setor público e no e-commerce. Uso IA no fluxo de desenvolvimento para entregar mais rápido, com qualidade de produção.",
      ctaProjects: "Ver projetos",
      ctaContact: "Falar comigo",
    },
    about: {
      heading: "Sobre",
      body: [
        "Desenvolvedor pleno em Contagem (MG), hoje na Controladoria-Geral do Estado de Minas Gerais. No dia a dia trabalho com Vue, PHP/Laravel, Node e C#, em aplicações web, APIs e integrações entre sistemas.",
        "Passei por saúde, comércio exterior, fintech, e-commerce e setor público. Em todos esses contextos, o padrão é o mesmo: entender a regra de negócio, expor isso em API ou GraphQL e manter a interface utilizável.",
        "Aberto a vagas pleno/senior full stack e a freelance com escopo bem definido.",
      ],
      location: "Contagem, MG, Brasil",
    },
    ai: {
      heading: "Inteligência artificial",
      lead: "IA faz parte do meu jeito de construir software, não só de falar sobre o tema.",
      body: [
        "Uso Cursor, Copilot e modelos de linguagem no dia a dia para acelerar implementação, refatoração, testes e revisão de código, sem abrir mão de validar o resultado.",
        "Trabalho com prompt engineering para tarefas de produto e engenharia: gerar fluxos, documentar APIs, explorar opções de arquitetura e reduzir retrabalho.",
        "Aplico IA onde ela muda o resultado: automação de rotinas, apoio a decisões técnicas e features que realmente usam LLM quando o problema pede.",
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
      lead: "Web systems, APIs, and integrations across the public sector and e-commerce. I use AI in the development workflow to ship faster with production-level quality.",
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
        "I use Cursor, Copilot, and language models daily to speed up implementation, refactoring, tests, and code review, while still validating the output myself.",
        "I apply prompt engineering for product and engineering work: draft flows, document APIs, explore architecture options, and cut rework.",
        "I put AI where it changes outcomes: routine automation, better technical decisions, and product features that use LLMs when the problem calls for it.",
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
