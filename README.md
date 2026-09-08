# Portfólio | Ivan Balbino

Site pessoal em Next.js (App Router), TypeScript e Tailwind. Conteúdo em português e inglês.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000) (`/pt` por padrão).

Textos, experiência e projetos ficam em `src/content/`.

## Docker

```bash
docker compose up --build -d
```

App em [http://localhost:3000](http://localhost:3000).

```bash
docker compose down
```

## Vercel

1. Conecte o repositório `balbino05/portfolio` na Vercel.
2. Branch: `main`.
3. Framework: Next.js (detectado sozinho). Build: `next build`.
