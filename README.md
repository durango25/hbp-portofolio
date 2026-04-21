# Hanggara Bima Pramesti — Portfolio

Personal portfolio website built with **Next.js 16**, **Tailwind CSS**, and **shadcn/ui**, showcasing my professional experience, skills, projects, and certificates.

---

## Tech Stack

| Category      | Technology                                                               |
| ------------- | ------------------------------------------------------------------------ |
| Framework     | [Next.js 16](https://nextjs.org/) (App Router)                           |
| Language      | TypeScript                                                               |
| Styling       | Tailwind CSS v4                                                          |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + Radix UI                           |
| Animation     | [Framer Motion](https://www.framer.com/motion/)                          |
| Icons         | [React Icons](https://react-icons.github.io/react-icons/)                |
| Theme         | [next-themes](https://github.com/pacocoursey/next-themes) (Dark / Light) |
| Font          | Poppins (Google Fonts)                                                   |

---

## Features

- Responsive design — mobile first
- Dark / Light mode toggle with smooth transition
- Animated sections using Framer Motion
- Certificate gallery with lightbox preview and keyboard navigation
- Show More pagination for certificates
- Interactive timeline for education & work experience
- Contact section with embedded Google Maps
- SEO metadata with Open Graph & Twitter card support

---

## Sections

1. **Hero** — Introduction with profile photo and social links
2. **Profile** — About me with bio and personal details
3. **Experience** — Education & work experience timeline
4. **Skills** — Tech stack and achievements
5. **Training & Certificate** — Certificate gallery with lightbox
6. **Projects** — Portfolio of built projects
7. **Availability Note** — Open to learn and grow
8. **Contact** — Contact info and location map

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/durango25/my-portofolio.git
cd my-portofolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### Build

```bash
npm run build
npm run start
```

### Lint & Format

```bash
npm run lint       # ESLint
npm run format     # Prettier
npm run typecheck  # TypeScript check
```

---

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Section assembly
  globals.css       # Global styles and theme variables
components/
  sections/         # Page sections (Navbar, Hero, Profile, etc.)
  ui/               # shadcn/ui components
  theme-provider.tsx
hooks/
  use-mobile.ts     # Responsive hook
lib/
  siteConfig.ts     # Site-wide configuration and data
  fonts.ts          # Poppins font setup
  utils.ts          # Utility helpers
public/
  images/           # Profile, hero, logo, certificate images
  favicon.ico
  logo.png
```

---

## Configuration

All site data (name, contact, social links, location) is centralized in `lib/siteConfig.ts`.

---

## Author

**Hanggara Bima Pramesti**

- GitHub: [@durango25](https://github.com/durango25)
- LinkedIn: [hanggara-bima-pramesti](https://www.linkedin.com/in/hanggara-bima-pramesti-68b0971b7)
- Email: hanggarabp123@gmail.com

---

## License

This project is private and for personal portfolio use only.
