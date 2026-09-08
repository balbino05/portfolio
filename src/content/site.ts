import type { Locale } from "@/lib/i18n";

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
  "Git",
  "Linux",
] as const;

type Copy = {
  metaTitle: string;
  metaDescription: string;
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    toDark: string;
    toLight: string;
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
  experience: {
    heading: string;
    current: string;
  };
  projects: {
    heading: string;
    featured: string;
    viewCase: string;
    viewRepo: string;
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
    metaTitle: "Ivan Balbino — Desenvolvedor Full Stack",
    metaDescription:
      "Portfólio de Ivan Balbino, desenvolvedor full stack. Experiência em Vue, Laravel, Node, GraphQL e sistemas empresariais — vagas e projetos freelance.",
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      toDark: "Ativar modo escuro",
      toLight: "Ativar modo claro",
    },
    hero: {
      kicker: "Desenvolvedor full stack",
      title: "Ivan Balbino",
      lead: "Sistemas web, APIs e integrações — do setor público ao e-commerce. Código que aguenta produção e conversa com quem contrata.",
      ctaProjects: "Ver projetos",
      ctaContact: "Falar comigo",
    },
    about: {
      heading: "Sobre",
      body: [
        "Desenvolvedor pleno em Contagem (MG), hoje na Controladoria-Geral do Estado de Minas Gerais. Trabalho no dia a dia com Vue, PHP/Laravel, Node e C#, entregando aplicações web, APIs e integrações entre sistemas.",
        "Já passei por saúde, comércio exterior, fintech, e-commerce e setor público. O que se repete: entender a regra de negócio, expor isso em API ou GraphQL, e deixar a interface utilizável.",
        "Aberto a vagas full stack e a trabalhos freelance com escopo claro.",
      ],
      location: "Contagem – MG, Brasil",
    },
    experience: {
      heading: "Experiência",
      current: "Atual",
    },
    projects: {
      heading: "Projetos pessoais",
      featured: "Destaque",
      viewCase: "Ver case",
      viewRepo: "GitHub",
    },
    contact: {
      heading: "Contato",
      lead: "Para vaga, proposta ou papo técnico — e-mail é o caminho mais direto.",
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
    metaTitle: "Ivan Balbino — Full Stack Developer",
    metaDescription:
      "Portfolio of Ivan Balbino, full stack developer. Experience with Vue, Laravel, Node, GraphQL, and business systems — open to roles and freelance work.",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      toDark: "Switch to dark mode",
      toLight: "Switch to light mode",
    },
    hero: {
      kicker: "Full stack developer",
      title: "Ivan Balbino",
      lead: "Web systems, APIs, and integrations — from the public sector to e-commerce. Production-ready code that also reads well to whoever is hiring.",
      ctaProjects: "See projects",
      ctaContact: "Get in touch",
    },
    about: {
      heading: "About",
      body: [
        "Mid-level developer based in Contagem (Minas Gerais, Brazil), currently at the State Comptroller General’s Office of Minas Gerais. Day to day I work with Vue, PHP/Laravel, Node, and C#, shipping web apps, APIs, and system integrations.",
        "I have worked in healthcare, foreign trade, fintech, e-commerce, and government. The through-line: understand the business rules, expose them through REST or GraphQL, and keep the UI usable.",
        "Open to full stack roles and freelance work with a clear scope.",
      ],
      location: "Contagem, Minas Gerais, Brazil",
    },
    experience: {
      heading: "Experience",
      current: "Current",
    },
    projects: {
      heading: "Personal projects",
      featured: "Featured",
      viewCase: "Read case study",
      viewRepo: "GitHub",
    },
    contact: {
      heading: "Contact",
      lead: "For a role, a proposal, or a technical conversation — email is the fastest path.",
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
