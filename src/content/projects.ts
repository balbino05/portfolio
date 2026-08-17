import type { Locale } from "@/lib/i18n";

export type Project = {
  slug: string;
  featured?: boolean;
  name: string;
  repo: string;
  live?: string;
  tags: string[];
  summary: Record<Locale, string>;
};

export const projects: Project[] = [
  {
    slug: "exemplo-tech",
    featured: true,
    name: "Exemplo Tech",
    repo: "https://github.com/balbino05/exemplo-tech",
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
    ],
    summary: {
      pt: "Plataforma de demonstração full stack: API Laravel com GraphQL e JWT, SPA em Vue/Quasar, e microserviços em Hyperf, Go e Python com RabbitMQ e Redis. Mostra o recorte que eu gosto de trabalhar — frontend reativo, backend e processamento assíncrono no mesmo produto.",
      en: "Full stack demo platform: Laravel GraphQL API with JWT, Vue/Quasar SPA, and Hyperf, Go, and Python microservices on RabbitMQ and Redis. This is the slice of work I enjoy — reactive UI, backend, and async processing in one product.",
    },
  },
  {
    slug: "captchajoomla",
    name: "Captcha Joomla",
    repo: "https://github.com/balbino05/captchajoomla",
    tags: ["PHP", "Joomla", "Plugin"],
    summary: {
      pt: "Captcha auto-hospedado para Joomla, com desafio de imagens no estilo reCAPTCHA v2 — sem chaves Google. Inclui plugin de login.",
      en: "Self-hosted Joomla captcha with an image challenge in the reCAPTCHA v2 style — no Google keys. Includes a login plugin.",
    },
  },
  {
    slug: "citymap",
    name: "Citymap",
    repo: "https://github.com/balbino05/citymap",
    tags: ["PHP", "Vue", "Geolocalização"],
    summary: {
      pt: "Aplicação de mapa/geolocalização com backend PHP e frontend Vue (repositórios citymap e citymap-frontend).",
      en: "Map / geolocation app with a PHP backend and Vue frontend (citymap and citymap-frontend repos).",
    },
  },
  {
    slug: "ecoleta",
    name: "Ecoleta",
    repo: "https://github.com/balbino05/ecoleta",
    tags: ["Node", "React", "React Native"],
    summary: {
      pt: "Marketplace de coleta de resíduos da Next Level Week: API, web e mobile para conectar pessoas a pontos de coleta.",
      en: "Waste-collection marketplace from Next Level Week: API, web, and mobile to connect people with collection points.",
    },
  },
];

export const exemploTechCase = {
  role: {
    pt: "Projeto pessoal de demonstração técnica — arquitetura, API, frontend e microserviços.",
    en: "Personal technical showcase — architecture, API, frontend, and microservices.",
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
