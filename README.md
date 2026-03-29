# Ircham.dev — Personal Portfolio & Engineering Hub

This is the source code for the personal website of **Ircham Aji**, a Software Engineer. Built with a focus on clean architecture, performance, and a robust MDX-based content system.

## 🚀 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI System:** [Once UI](https://once-ui.com) (Customized)
- **Styling:** SCSS Modules + CSS Variables (Design Tokens)
- **Content:** [MDX](https://mdxjs.com/) (Markdown with JSX) via `next-mdx-remote`
- **Formatting:** [Biome](https://biomejs.dev/)
- **Deployment:** [Vercel](https://vercel.com)

## 🏗️ Architecture

The project follows a modular structure designed for ease of content updates and design consistency.

```text
├── src/
│   ├── app/                # Next.js App Router (Routes & API)
│   │   ├── blog/           # Blog section (MDX-based)
│   │   ├── work/           # Projects section (MDX-based)
│   │   ├── gallery/        # Photo gallery
│   │   └── api/            # Backend functions (RSS, OG, Auth)
│   ├── components/         # Reusable UI components
│   ├── resources/          # CORE CONFIGURATION (Content & Styles)
│   │   ├── content.tsx     # Site content, bio, social links, experience
│   │   └── once-ui.config.ts # Theme, fonts, and feature flags
│   ├── types/              # TypeScript definitions
│   └── utils/              # Helper functions
├── public/                 # Static assets (images, icons)
└── .env                    # Environment variables (Auth, API keys)
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.17+
- Bun (optional, but used in the project)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 📝 Content Management

Most of the website's content is managed without touching the core UI components.

### 1. Global Information (`src/resources/content.tsx`)
This is the single source of truth for:
- **Person:** Name, role, avatar, location.
- **Work Experience:** Achievements and timelines.
- **Studies:** Educational background.
- **Technical Skills:** Grouped skills with icons.
- **Social Links:** Links to GitHub, LinkedIn, etc.

### 2. Design & Features (`src/resources/once-ui.config.ts`)
Modify this file to:
- Toggle routes (e.g., enable/disable `/blog` or `/gallery`).
- Change themes (Brand/Accent colors, border styles).
- Configure SEO (Base URL, Schema data).
- Customize background effects (Dots, Grids, Gradients).

### 3. Adding Blog Posts & Projects
- **Blog:** Add `.mdx` files to `src/app/blog/posts/`.
- **Work:** Add `.mdx` files to `src/app/work/projects/`.
- **Archive:** Older or drafted content can be found in `src/app/archive/`.

## ⚙️ Core Scripts

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.
- `npm run biome-write`: Auto-format code using Biome.

## 🔒 Security & Optimization

- **Password Protection:** Routes can be protected by setting flags in `once-ui.config.ts` and configuring the `PASSWORD` environment variable.
- **SEO:** Automatic Open Graph (OG) image generation is handled via `src/app/api/og/`.
- **Performance:** Leveraging Next.js Server Components and optimized font loading via `next/font`.

## 📄 License

Distributed under the CC BY-NC 4.0 License. See `LICENSE` for more information.
