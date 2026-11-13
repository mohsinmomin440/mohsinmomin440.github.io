# 🌌 MOHSIN.EXE — 3D Developer Portfolio

<div align="center">

  <img src="public/profile.png" width="120" height="120" style="border-radius: 50%; border: 3px solid #915EFF;" alt="Mohsin Avatar" />

  <h3><strong>Hi, I'm Mohsin | Creative Developer</strong></h3>
  <p>Discord Bot Developer • Web Developer • Open Source Developer • 3D Creative Engineer</p>

  <p>
    <a href="https://github.com/mohsinmomin440"><img src="https://img.shields.io/badge/GitHub-mohsinmomin440-181717?style=for-the-badge&logo=github" alt="GitHub" /></a>
    <a href="https://discord.gg/codexdevs"><img src="https://img.shields.io/badge/Discord-CODEx%20Devs-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /></a>
    <img src="https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js" alt="Three.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>
  <p>
    🌐 <strong>Live Demo:</strong> <a href="https://mohsinmomin440.github.io/mohsinali.github.io/">https://mohsinmomin440.github.io/mohsinali.github.io/</a>
  </p>
</div>

---

## 🚀 Overview

A production-ready, ultra-premium 3D developer portfolio website built with **React**, **Three.js**, **React Three Fiber**, **React Three Drei**, **Tailwind CSS**, and **Framer Motion**.

Inspired by high-end spatial web experiences, this portfolio features full 3D interactive models, floating decal spheres, orbit controls, smooth parallax tilt effects, and an interactive contact planet.

---

## ✨ Features

- 🖥️ **Interactive 3D Retro Desktop PC (`ComputersCanvas`)**: Fully interactive 3D computer model in the Hero section with dynamic spot/point lighting and 360° orbit rotation.
- 🧩 **Tech stack grid**: Tilt cards with inline SVG/PNG icons for each technology.
- 🌍 **3D Rotating Planet (`EarthCanvas`)**: Realistic orbiting Earth model with atmosphere and cloud layers in the Contact section.
- ⭐ **Twinkling Starfield (`StarsCanvas`)**: 5,000 algorithmic procedural 3D stars floating and gently rotating across the deep space void.
- 🎴 **3D Parallax Tilt Cards**: Glare-enabled tilt cards for disciplines and projects powered by `react-parallax-tilt`.
- ⏳ **Experience Timeline**: Vertical interactive timeline powered by `react-vertical-timeline-component`.
- 💬 **Interactive Contact Section**: Instant email transmission, clipboard copy, and direct Discord community invite link.
- 📱 **100% Responsive**: Tailored for smooth 60fps performance across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **3D Graphics & Physics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling & UI**: [Tailwind CSS](https://tailwindcss.com/), [Lucide React](https://lucide.dev/)
- **Animations & Interactivity**: [Framer Motion](https://www.framer.com/motion/), [React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt), [React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline)

---

## 📂 Project Structure

```
├── public/
│   ├── desktop_pc/        # 3D retro computer glTF model & textures
│   └── planet/            # 3D Earth glTF model & textures
├── src/
│   ├── assets/            # Tech icons, project previews (WebP), profile image
│   ├── components/
│   │   ├── canvas/        # three.js scenes (Computers, Earth, Stars) – lazy loaded
│   │   ├── LazyMount.jsx  # Mounts a canvas only while it's near the viewport
│   │   ├── Navbar.jsx     # Nav with scroll-spy + aria-current
│   │   ├── Hero.jsx, About.jsx, Experience.jsx, Tech.jsx, Works.jsx, Contact.jsx, Footer.jsx
│   │   └── Loader.jsx     # DOM loading-progress overlay for the canvases
│   ├── constants/index.js # Profile data, projects, experience, social links
│   ├── hoc/               # Section wrapper (scroll-in animation + anchor id)
│   ├── utils/motion.js    # Framer Motion variants
│   └── index.css          # Tailwind layers, gradients, reduced-motion rules
└── .github/workflows/ci.yml  # Lint + build on every push / PR
```

## ⚙️ Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build && npm run preview
```

### Contact form

By default the form opens the visitor's email app (`mailto:`). To send messages
directly, create a form on [Formspree](https://formspree.io), copy `.env.example`
to `.env` and set `VITE_FORMSPREE_ID`.

## 🚀 Performance notes

- three.js scenes are code-split and only mount when scrolled into view
  (`LazyMount`), so the first load doesn't download the ~1 MB three.js chunk.
- Project images and the hero background are WebP; large 3D textures were
  down-scaled. Further saving: compress `scene.bin` / `scene.gltf` with
  `gltf-transform optimize` (meshopt) – not applied here.
- `prefers-reduced-motion` is respected (Framer Motion `MotionConfig` + CSS).

## 📝 TODO before going live

- Point each project's `source_code_link` in `src/constants/index.js` to its real repo.
- Add your deployed URL to `og:url` / `og:image` in `index.html`.
