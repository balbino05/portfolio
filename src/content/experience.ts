import type { Locale } from "@/lib/i18n";

export type ExperienceItem = {
  company: string;
  role: Record<Locale, string>;
  period: Record<Locale, string>;
  current?: boolean;
  bullets: Record<Locale, string[]>;
};

export const experience: ExperienceItem[] = [
  {
    company: "CGE-MG",
    role: {
      pt: "Desenvolvedor pleno",
      en: "Mid-level developer",
    },
    period: {
      pt: "jun 2026 — presente",
      en: "Jun 2026 — present",
    },
    current: true,
    bullets: {
      pt: [
        "Desenvolvimento e manutenção de sistemas web institucionais da Controladoria-Geral do Estado de Minas Gerais.",
        "Atuação em portais, APIs e aplicações internas usadas no dia a dia da gestão pública.",
      ],
      en: [
        "Building and maintaining institutional web systems for the State Comptroller General’s Office of Minas Gerais.",
        "Work on portals, APIs, and internal applications used in day-to-day public administration.",
      ],
    },
  },
  {
    company: "Fasters",
    role: {
      pt: "Desenvolvedor pleno",
      en: "Mid-level developer",
    },
    period: {
      pt: "2025 — jun 2026",
      en: "2025 — Jun 2026",
    },
    bullets: {
      pt: [
        "Sistema para a área da saúde com Vue 3, Node.js, PHP e GraphQL.",
        "Funcionalidades de gestão e processamento de dados médicos, com integração de APIs e otimização de consultas.",
      ],
      en: [
        "Healthcare system using Vue 3, Node.js, PHP, and GraphQL.",
        "Management features and medical data processing, including API integration and query optimization.",
      ],
    },
  },
  {
    company: "Cargo Sapiens",
    role: {
      pt: "Desenvolvedor pleno",
      en: "Mid-level developer",
    },
    period: {
      pt: "2025",
      en: "2025",
    },
    bullets: {
      pt: [
        "Sistema de comércio exterior em Laravel e PHP.",
        "Interfaces e regras de negócio em JavaScript na plataforma de cotação e gestão de fretes.",
      ],
      en: [
        "Foreign-trade platform in Laravel and PHP.",
        "UI and business rules in JavaScript on a freight quoting and management product.",
      ],
    },
  },
  {
    company: "Avaliza",
    role: {
      pt: "Desenvolvedor pleno",
      en: "Mid-level developer",
    },
    period: {
      pt: "2024",
      en: "2024",
    },
    bullets: {
      pt: [
        "Frontend em Vue.js integrado a backend em C#.",
        "Suporte a sistema legado em PHP.",
      ],
      en: [
        "Vue.js frontend integrated with a C# backend.",
        "Support for a legacy PHP system.",
      ],
    },
  },
  {
    company: "Matter",
    role: {
      pt: "Desenvolvedor pleno",
      en: "Mid-level developer",
    },
    period: {
      pt: "2023 — 2024",
      en: "2023 — 2024",
    },
    bullets: {
      pt: [
        "Sistema de gerenciamento com PHP, Laravel, GraphQL e Vue.js.",
      ],
      en: [
        "Management system using PHP, Laravel, GraphQL, and Vue.js.",
      ],
    },
  },
  {
    company: "OSAS",
    role: {
      pt: "Desenvolvedor IV",
      en: "Developer IV",
    },
    period: {
      pt: "2023",
      en: "2023",
    },
    bullets: {
      pt: [
        "Soluções para o setor público com C#, SQL Server e JavaScript.",
      ],
      en: [
        "Public-sector solutions using C#, SQL Server, and JavaScript.",
      ],
    },
  },
  {
    company: "Big Shop Ecommerce",
    role: {
      pt: "Desenvolvedor pleno",
      en: "Mid-level developer",
    },
    period: {
      pt: "2021 — 2023",
      en: "2021 — 2023",
    },
    bullets: {
      pt: [
        "Soluções de e-commerce com PHP, Laravel e Vue.js.",
        "Integração com MySQL e regras de loja em produção.",
      ],
      en: [
        "E-commerce solutions with PHP, Laravel, and Vue.js.",
        "MySQL integration and production store rules.",
      ],
    },
  },
];
