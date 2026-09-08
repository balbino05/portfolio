import type { Locale } from "@/lib/i18n";

export type Project = {
  slug: string;
  featured?: boolean;
  name: string;
  repo?: string;
  live?: string;
  kind: "opensource" | "production";
  tags: string[];
  summary: Record<Locale, string>;
};

export const projects: Project[] = [
  {
    slug: "devstore",
    featured: true,
    name: "DevStore",
    repo: "https://github.com/balbino05/exemplo-tech",
    kind: "opensource",
    tags: [
      "Laravel",
      "GraphQL",
      "Vue 3",
      "Quasar",
      "Go",
      "Python",
      "Hyperf",
      "RabbitMQ",
      "Redis",
      "Docker",
    ],
    summary: {
      pt: "Plataforma full stack de catálogo e operações: API Laravel com GraphQL e JWT, SPA em Vue/Quasar e microserviços em Hyperf, Go e Python com RabbitMQ e Redis. Arquitetura completa com auth, filas, relatórios e dashboard.",
      en: "Full stack catalog and operations platform: Laravel GraphQL API with JWT, Vue/Quasar SPA, and Hyperf, Go, and Python microservices on RabbitMQ and Redis. Complete architecture with auth, queues, reports, and a dashboard.",
    },
  },
  {
    slug: "cargo-sapiens",
    name: "Cargo Sapiens",
    live: "https://cargosapiens.com/",
    kind: "production",
    tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Logística"],
    summary: {
      pt: "Atuação na plataforma de cotação e gestão de fretes (marítimo, aéreo, rodoviário e multimodal). Regras de negócio, interfaces e integrações em ambiente de produção para comércio exterior.",
      en: "Work on the freight quoting and management platform (ocean, air, road, and multimodal). Business rules, UI, and integrations in a production foreign-trade environment.",
    },
  },
  {
    slug: "fasters-health",
    name: "Sistema de saúde (Fasters)",
    kind: "production",
    tags: ["Vue 3", "Node.js", "PHP", "GraphQL", "APIs"],
    summary: {
      pt: "Sistema para a área da saúde com gestão e processamento de dados médicos. Integração de APIs, consultas otimizadas e fluxos de frontend em Vue 3 com GraphQL.",
      en: "Healthcare system for medical data management and processing. API integration, optimized queries, and Vue 3 frontend flows over GraphQL.",
    },
  },
  {
    slug: "dictionary-api",
    name: "Dictionary API",
    repo: "https://github.com/balbino05/Backend-Dictionary",
    kind: "opensource",
    tags: ["Laravel", "MySQL", "Redis", "Passport", "Swagger"],
    summary: {
      pt: "API RESTful de dicionário (desafio Coodesh): autenticação com Laravel Passport, cache Redis, MySQL e documentação OpenAPI/Swagger. Backend completo, pronto para consumo.",
      en: "Dictionary REST API (Coodesh challenge): Laravel Passport auth, Redis cache, MySQL, and OpenAPI/Swagger docs. A complete backend ready for clients.",
    },
  },
  {
    slug: "proeventos",
    name: "ProEventos",
    repo: "https://github.com/balbino05/ProEventos",
    kind: "opensource",
    tags: ["Angular", ".NET", "C#", "SQL Server"],
    summary: {
      pt: "Aplicação full stack de eventos com Angular no frontend e .NET no backend. CRUD, autenticação e fluxo de gestão de eventos ponta a ponta.",
      en: "Full stack events app with Angular on the frontend and .NET on the backend. CRUD, auth, and end-to-end event management.",
    },
  },
  {
    slug: "pass-in",
    name: "Pass.in",
    repo: "https://github.com/balbino05/pass-in",
    kind: "opensource",
    tags: ["Java", "API", "Eventos"],
    summary: {
      pt: "API de check-in para eventos (NLW Unite): cadastro de participantes, credenciamento e consulta de presença. Backend em Java focado em regras de evento.",
      en: "Event check-in API (NLW Unite): participant registration, badge flow, and attendance lookup. Java backend focused on event rules.",
    },
  },
];

export const featuredCase = {
  role: {
    pt: "Projeto pessoal de demonstração técnica: arquitetura, API, frontend e microserviços.",
    en: "Personal technical showcase covering architecture, API, frontend, and microservices.",
  },
  layers: [
    {
      title: { pt: "Frontend", en: "Frontend" },
      body: {
        pt: "SPA em Vue 3 + Quasar + Apollo Client. Autenticação JWT, listagem e gestão de produtos via GraphQL. Há também um admin em React (Vite) e uma variação Vue mais enxuta.",
        en: "Vue 3 + Quasar + Apollo Client SPA. JWT auth, product listing and management over GraphQL. There is also a React (Vite) admin and a slimmer Vue variant.",
      },
    },
    {
      title: { pt: "API central", en: "Core API" },
      body: {
        pt: "Laravel 10 com Rebing GraphQL e JWT. CRUD de produtos, auth (login, registro, refresh), repository/service e testes de serviço. MySQL como persistência.",
        en: "Laravel 10 with Rebing GraphQL and JWT. Product CRUD, auth (login, register, refresh), repository/service layers, and service tests. MySQL for persistence.",
      },
    },
    {
      title: { pt: "Microserviços", en: "Microservices" },
      body: {
        pt: "Hyperf (PHP) consome filas e expõe tarefas pesadas. Go gera relatórios (Excel). Python cuida de ETL/analytics. Tudo sobe com Docker Compose junto de RabbitMQ, Redis e MySQL.",
        en: "Hyperf (PHP) consumes queues and runs heavy tasks. Go generates reports (Excel). Python handles ETL/analytics. Docker Compose brings up RabbitMQ, Redis, and MySQL alongside the services.",
      },
    },
  ],
  flow: {
    pt: [
      "Quasar chama GraphQL no Laravel, autenticado com JWT.",
      "Laravel publica evento no RabbitMQ.",
      "Hyperf, Go e Python processam o pipeline.",
      "Python grava resultado no Redis.",
      "O frontend atualiza o dashboard (gráficos / WebSocket).",
    ],
    en: [
      "Quasar calls Laravel GraphQL, authenticated with JWT.",
      "Laravel publishes an event to RabbitMQ.",
      "Hyperf, Go, and Python run the processing pipeline.",
      "Python writes the result to Redis.",
      "The frontend updates the dashboard (charts / WebSocket).",
    ],
  },
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
