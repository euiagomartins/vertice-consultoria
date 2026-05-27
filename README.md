# Vértice Consultoria — Landing Page

> Landing page premium, moderna e altamente persuasiva para a **Vértice Consultoria**, empresa especializada em treinamento e desenvolvimento comercial para clínicas odontológicas.

---

## 📋 Índice

1. [Tecnologias](#-tecnologias)
2. [Pré-requisitos](#-pré-requisitos)
3. [Instalação](#-instalação)
4. [Execução em desenvolvimento](#-execução-em-desenvolvimento)
5. [Build para produção](#-build-para-produção)
6. [Validação da exportação em produção](#-validação-da-exportação-em-produção)
7. [Estrutura do projeto](#-estrutura-do-projeto)
8. [Scripts disponíveis](#-scripts-disponíveis)
9. [Personalização](#-personalização)
10. [Deploy](#-deploy)

---

## 🚀 Tecnologias

| Camada | Tecnologia |
|--------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19 + SSR/SSG) |
| Build Tool | [Vite 7](https://vitejs.dev) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| Componentes | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) |
| Ícones | [Lucide React](https://lucide.dev) |
| Tipagem | [TypeScript 5.8](https://www.typescriptlang.org) |
| Runtime | Node.js 20+ (Bun 1.1+ recomendado) |

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** `>= 20.0.0` ([download](https://nodejs.org))
- **Bun** `>= 1.1.0` *(recomendado, substitui npm/pnpm)* ([instalar Bun](https://bun.sh/docs/installation))

> 💡 **Nota:** Este projeto utiliza `bun.lock` como gerenciador de pacotes. O uso do Bun é **altamente recomendado** para garantir consistência nas dependências.

Verifique as versões instaladas:

```bash
node --version   # v20.0.0 ou superior
bun --version    # 1.1.0 ou superior
```

---

## ⚡ Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd vertice-consultoria
```

### 2. Instale as dependências

**Opção A — Bun (recomendado):**

```bash
bun install
```

**Opção B — npm (fallback):**

```bash
npm install
```

A instalação pode levar de 30 segundos a 2 minutos, dependendo da conexão. Ao final, você verá a pasta `node_modules/` e o arquivo `bun.lock` atualizado.

---

## 🖥️ Execução em desenvolvimento

Inicie o servidor de desenvolvimento com hot-reload:

```bash
bun dev
```

Ou, com npm:

```bash
npm run dev
```

O terminal exibirá:

```
  VITE v7.x.x  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
  ➜  SSR:     http://localhost:3000/ (TanStack Start SSR)
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.  
Edições em arquivos `.tsx`, `.css` ou `.ts` são refletidas instantaneamente sem refresh manual.

> **Porta padrão:** `3000`.  
> Se a porta estiver ocupada, o Vite tentará `3001`, `3002` etc. automaticamente.

---

## 🏗️ Build para produção

Gere os artefatos otimizados para deploy:

```bash
bun run build
```

Ou:

```bash
npm run build
```

O comando executa:
1. **Type checking** em tempo de build
2. **Bundling** com Vite (cliente + servidor SSR)
3. **Geração do Nitro** (serverless entry para edge)
4. **Otimização de assets** (minificação, tree-shaking, divisão de código)

O output será gerado em:

```
dist/
├── client/          # Assets estáticos (JS, CSS, imagens)
├── server/          # Entry point SSR
└── ...
```

> ⏱️ Tempo médio de build: 15–45 segundos, dependendo do hardware.

### Build de desenvolvimento (debug)

Para inspecionar o bundle sem otimizações agressivas:

```bash
bun run build:dev
```

---

## ✅ Validação da exportação em produção

Após o build, valide o output localmente antes de fazer deploy:

### 1. Preview do build

```bash
bun run preview
```

Isso sobe um servidor local servindo os arquivos de `dist/`, simulando o ambiente de produção.

Abra [http://localhost:4173](http://localhost:4173) (porta padrão do preview) e verifique:

- [ ] A página carrega sem erros 404 no console do navegador
- [ ] Todas as imagens e fontes são carregadas corretamente
- [ ] O CSS está aplicado (verifique se não há FOUC — flash de conteúdo sem estilo)
- [ ] A navegação por âncoras (`#hero`, `#problema`, etc.) funciona
- [ ] O layout responsivo se adapta em mobile (< 768px) e desktop (> 1024px)
- [ ] O Console do DevTools não exibe erros de JavaScript não tratados
- [ ] A aba Network não exibe requisições falhando (status 4xx/5xx)

### 2. Inspeção de assets estáticos

Confirme que os arquivos foram gerados corretamente:

```bash
# Liste os chunks de JavaScript
ls -la dist/client/assets/

# Verifique o tamanho do bundle principal
du -sh dist/client/assets/index-*.js

# Confirme que as imagens estão presentes
ls dist/client/assets/hero-vertice-* dist/client/assets/solution-vertice-*
```

### 3. Validação de SEO e meta tags

Inspecione o `<head>` na aba Elements do DevTools:

```bash
# Ou via curl
curl -s http://localhost:4173 | grep -E "<title>|<meta"
```

Certifique-se de que existam:
- `<title>` adequado
- `<meta name="description">`
- Tags Open Graph (`og:title`, `og:description`, `og:image`) — se configuradas
- `<link rel="canonical">` — se aplicável

### 4. Testes de performance (Lighthouse)

Execute o Google Lighthouse no Chrome DevTools → aba **Lighthouse** (ou use o CLI):

```bash
# Instale o Lighthouse globalmente (se necessário)
npm install -g lighthouse

# Execute
lighthouse http://localhost:4173 --output=html --output-path=./lighthouse-report.html
```

Métricas alvo para uma landing page premium:

| Métrica | Meta |
|---------|------|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |
| LCP (Largest Contentful Paint) | ≤ 2.5s |
| CLS (Cumulative Layout Shift) | ≤ 0.1 |

### 5. Teste de responsividade

Use o DevTools (F12 → modo de dispositivo) para testar:

| Viewport | Largura |
|----------|---------|
| Mobile | 375px |
| Tablet | 768px |
| Desktop | 1440px |
| Ultrawide | 1920px+ |

---

## 📁 Estrutura do projeto

```
vertice-consultoria/
├── public/                    # Assets estáticos servidos diretamente
│
├── src/
│   ├── assets/                # Imagens, ícones, fontes
│   │   ├── hero-vertice.jpg
│   │   └── solution-vertice.jpg
│   │
│   ├── components/            # Componentes React
│   │   ├── landing/           # Seções da landing page
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Differentials.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Nav.tsx
│   │   └── ui/                # Componentes shadcn/ui (Button, Card, Dialog etc.)
│   │
│   ├── hooks/                 # Custom React hooks
│   │   └── use-mobile.tsx
│   │
│   ├── lib/                   # Utilitários e configurações
│   │   ├── utils.ts
│   │   └── ...
│   │
│   ├── routes/                # Rotas do TanStack Router (file-based)
│   │   ├── __root.tsx         # Layout raiz (shell HTML)
│   │   ├── index.tsx          # Página inicial (landing page)
│   │   └── README.md
│   │
│   ├── server.ts              # Entry point SSR (wrapper de erro)
│   ├── router.tsx             # Configuração do router
│   ├── start.ts               # Configuração do TanStack Start
│   └── styles.css             # Tailwind CSS + design tokens + animações
│
├── .gitignore
├── bunfig.toml                # Configuração do Bun
├── components.json            # Configuração do shadcn/ui
├── eslint.config.js           # Configuração do ESLint
├── package.json               # Dependências e scripts
├── tsconfig.json              # Configuração do TypeScript
├── vite.config.ts             # Configuração do Vite
└── README.md                  # Este arquivo
```

---

## 📝 Scripts disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `dev` | `bun dev` | Servidor de desenvolvimento com hot-reload |
| `build` | `bun run build` | Build otimizado para produção |
| `build:dev` | `bun run build:dev` | Build sem otimizações (debug) |
| `preview` | `bun run preview` | Servidor de preview do build de produção |
| `lint` | `bun run lint` | Executa ESLint em todo o projeto |
| `format` | `bun run format` | Formata todos os arquivos com Prettier |

---

## 🎨 Personalização

### Design Tokens

As cores, fontes e animações são controladas via CSS custom properties em `src/styles.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.12 0 0);
  --brand: oklch(0.83 0.17 92);
  /* ... */
}
```

Altere os valores `oklch(...)` para ajustar a paleta de cores da marca.

### Fontes

O projeto utiliza **Space Grotesk** (títulos) e **Inter** (corpo).  
Para trocar as fontes, edite `src/styles.css`:

```css
--font-display: "Nova Fonte", system-ui, sans-serif;
--font-sans: "Outra Fonte", system-ui, sans-serif;
```

E adicione o `@import` ou `<link>` correspondente no `__root.tsx`.

### Conteúdo / Copywriting

Todo o conteúdo textual das seções está nos componentes em `src/components/landing/`.  
Basta editar os arquivos `.tsx` para atualizar textos, estatísticas ou depoimentos.

### Imagens

Substitua os arquivos em `src/assets/` mantendo os mesmos nomes, ou atualize os imports nos componentes.  
Formato recomendado: `.jpg` para fotos, `.png` para gráficos com transparência, `.webp` para otimização.

---

## 🌐 Deploy

Este projeto é otimizado para deploy em plataformas edge/serverless:

| Plataforma | Instruções |
|------------|------------|
| **Lovable** | Deploy automático via push para branch principal |
| **Vercel** | Importe o repo; framework preset: *Other*; build command: `bun run build`; output: `dist/` |
| **Netlify** | Conecte o repo; build command: `bun run build`; publish directory: `dist/client` |
| **Cloudflare Pages** | Use o Wrangler CLI ou conecte via Git integration |
| **Docker** | Veja `Dockerfile` de exemplo abaixo |

### Dockerfile (exemplo)

```dockerfile
# Estágio de build
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Estágio de produção (nginx estático)
FROM nginx:alpine
COPY --from=builder /app/dist/client /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🐛 Troubleshooting

### Erro: `bun: command not found`

Instale o Bun seguindo as instruções oficiais: [bun.sh/docs/installation](https://bun.sh/docs/installation)

### Erro: `Failed to resolve import`

Certifique-se de que:
1. Todas as dependências estão instaladas (`bun install`)
2. O arquivo importado existe no caminho correto
3. O alias `@/` está configurado em `tsconfig.json` (já incluso)

### Erro: `Unauthorized` durante build

Se houver server functions protegidas por autenticação, o build de desenvolvimento pode falhar durante o SSR.  
Consulte a documentação do TanStack Start sobre [Auth-Protected Server Functions](https://tanstack.com/start/latest/docs/framework/react/server-functions).

### Build muito lento

Verifique se o antivirus não está escaneando a pasta `node_modules/`.  
Em Windows, exclua o diretório do projeto do scan em tempo real.

---

## 📄 Licença

Este projeto é de propriedade da **Vértice Consultoria**.  
Todos os direitos reservados. Uso comercial exclusivo.

---

<div align="center">
  <sub>Construído com ❤️ usando TanStack Start, React 19 e Tailwind CSS v4.</sub>
</div>
