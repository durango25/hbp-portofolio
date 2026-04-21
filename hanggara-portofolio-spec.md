# Content for the .md file
md_content = """# Spesifikasi Teknis Portofolio - Hanggara Bima Pramesti

Dokumen ini berisi instruksi dan data konfigurasi untuk membangun website portofolio profesional menggunakan stack modern.

## 1. Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Prefix: all, Theme: Radix-Vega)
- **Icons**: React Icons (Font Awesome)
- **Animation**: Framer Motion
- **Themes**: Dark & Light Mode (next-themes)

## 2. Konfigurasi Global (siteConfig.ts)
```typescript
export const siteConfig = {
  site_name: "Hanggara Bima Pramesti",
  short_name: "HBP Porto",
  description: "Portofolio Profesional Hanggara Bima Pramesti - Web Developer & Programmer",
  organization: "Bim's Code Zone",
  keywords: ["hanggara bima pramesti", "my portofolio", "my cv", "web developer", "react developer"],
  version: "1.0",
  company_name: "Bim's Code Zone",
  company_sector: "Software Development",
  developer: "Hanggara Bima Pramesti",
  location: {
    address: "Jl. Belanak 5 No 470, Limbungan Baru, Rumbai, Pekanbaru, Riau 28261",
    city: "Pekanbaru",
    province: "Riau",
    postal_code: "28261",
    coords: { lat: 0.5628449051875056, lng: 101.44444079395491 },
    embed_maps: "[https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1994.8129192522053!2d101.44447834488223!3d0.5628046739941762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1776628023938!5m2!1sen!2sid](https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1994.8129192522053!2d101.44447834488223!3d0.5628046739941762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1776628023938!5m2!1sen!2sid)"
  },
  contact: {
    email: "hanggarabp123@gmail.com",
    phone: "082284674247",
    whatsapp: "6282284674247",
  },
  socmed: {
    facebook: "[https://www.facebook.com/hanggarabima.pramesti](https://www.facebook.com/hanggarabima.pramesti)",
    instagram: "[https://www.instagram.com/h_bima_p](https://www.instagram.com/h_bima_p)",
    linkedin: "[https://www.linkedin.com/in/hanggara-bima-pramesti-68b0971b7](https://www.linkedin.com/in/hanggara-bima-pramesti-68b0971b7)",
    github: "[https://github.com/durango25](https://github.com/durango25)"
  }
};
```

## 3. Desain & Style Guidelines
- Warna Utama: Primary Violet, Secondary Pink (Gradient Linear pada heading & button).
- Navbar: Rounded, fixed, glassmorphism/transparent saat scroll.
- Mobile: Stack vertikal, menu collapsible (hamburger).
- Fitur: Smooth scroll (Lenis atau CSS), Framer Motion whileInView animations.


## 4. Design System
Role: Expert Frontend Developer (Next.js & Tailwind)
Task: Bangun website portofolio berdasarkan data siteConfig di atas dengan detail section sebagai berikut:
    Setup:
        Inisialisasi Next.js dengan Tailwind.
        Konfigurasi tailwind.config.js dengan palette: primary: violet dan secondary: pink.
        Install shadcn/ui dengan preset theme radix-vega dan prefix all-.

    Hero Section:
        Layout grid 2 kolom (Mobile: 1 kolom).
        Tampilkan foto estetik, Nama, Profesi (Web Developer), dan tagline profesional.
        Icon sosial media (FA) dengan hover effect.
        Button CTA: Download CV (Outline) & Contact Me (Gradient Violet-Pink).

    Profile Section:
        Bio singkat yang menyoroti keahlian Software Development (TypeScript, React, Unity).

    Education & Work Experience:
        Gunakan format Timeline vertikal.
        Animasikan setiap item (Slide up/Fade in) saat memasuki viewport menggunakan Framer Motion.

    Achievement & Skills:
        Achievement: Bullet list dengan delay animation.
        Skills: Grid of SVG icons (Next.js, React, Laravel, MySQL, Unity).

    Training & Certificate
        Tampilkan sebagai daftar atau kartu
        Jenis Sertifikat (misalnya, Workshop, Pelatihan, Sertifikasi)
        Nama Sertifikat
        Penerbit (Institusi / Organisasi)
        Tahun atau rentang tanggal (sertakan tanggal kedaluwarsa jika ada)
        Dan Gambar Sertifikat

    Project Experience:
        Card grid layout dengan hover scale effect.
        Badge untuk teknologi (Misal: Badge violet untuk Next.js).

    Fitur Tambahan:
        Implementasikan Light/Dark mode toggle menggunakan next-themes.
        Pastikan navigasi menggunakan smooth scroll.
        Navbar harus transparan di atas dan berubah menjadi blur-background saat scroll down.