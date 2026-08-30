# Portfolio Website

A premium, production-ready personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ installed
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

---

## ✏️ How to Customize

**All your personal information lives in a single file:**

```
src/data/portfolio.ts
```

Edit this file to update the entire website. You do NOT need to touch any component files.

---

### 1. Change Personal Information

Open `src/data/portfolio.ts` and edit the `personal` section:

```typescript
personal: {
  name: "Your Full Name",
  title: "AI & ML ENGINEER",
  subtitle: "Your professional subtitle...",
  bio: "Your short bio...",
  location: "Your City, Country",
  image: "/images/profile.jpg",
  cv: "/cv.pdf",
  badge: "Your Achievement Badge",  // optional, set to "" to hide
}
```

### 2. Change Profile Photo

1. Replace the file at `public/images/profile.jpg` with your professional portrait
2. Use a high-quality image (recommended: 800×1000px or larger)
3. The filename must match what's in `portfolio.ts` → `personal.image`

### 3. Add/Remove Skills

Edit the `skills` section in `portfolio.ts`:

```typescript
skills: {
  languages: ["C++", "Python", "Java"],
  ai_ml: ["Machine Learning", "Deep Learning"],
  // Add new categories or modify existing ones
  new_category: ["Skill 1", "Skill 2"],
}
```

If you add a new category key, also add its display label:

```typescript
skillLabels: {
  new_category: "Display Name",
}
```

### 4. Add Projects

Add a new object to the `projects` array:

```typescript
projects: [
  {
    title: "Project Name",
    description: "What this project does...",
    image: "/images/projects/project-name.png",
    technologies: ["React", "Python", "TensorFlow"],
    github: "https://github.com/you/project",
    demo: "https://project-demo.com",
    featured: true,  // true = large card, false = grid card
    metrics: "Optional metric like '95% accuracy'",
    category: "AI/ML",
  },
  // ...
]
```

Place project images in `public/images/projects/`.

### 5. Add Experience

Add a new object to the `experience` array:

```typescript
experience: [
  {
    company: "Company Name",
    role: "Your Role",
    duration: "Start — End",
    location: "City, Country",
    description: "What you did...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
    technologies: ["React", "Node.js"],
  },
  // ...
]
```

### 6. Add Certificates

Add a new object to the `certificates` array:

```typescript
certificates: [
  {
    title: "Certificate Name",
    issuer: "Issuing Organization",
    date: "2026",
    credentialId: "ABC123",
    credentialUrl: "https://verify.example.com/ABC123",
    image: "/images/certificates/cert.jpg",
  },
  // ...
]
```

### 7. Add Extracurricular Activities

Add a new object to the `extracurricular` array:

```typescript
extracurricular: [
  {
    year: "2026",
    title: "Activity Title",
    description: "What you did...",
    category: "hackathon",  // hackathon, club, competition, open-source, volunteering
  },
  // ...
]
```

### 8. Change Education

Edit the `education` array:

```typescript
education: [
  {
    institution: "Your University",
    degree: "B.Tech in Computer Science",
    specialization: "AI & ML",
    duration: "2024 — 2028",
    grade: "CGPA: 9.5",
    coursework: ["Course 1", "Course 2"],
    achievements: ["Achievement 1"],
  },
]
```

### 9. Change Social Links

Edit the `contact` section:

```typescript
contact: {
  email: "you@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "",  // leave empty to hide
  heading: "Let's Build Something Meaningful.",
  subtext: "Your contact description...",
}
```

### 10. Replace CV

1. Replace the file at `public/cv.pdf` with your actual CV/resume
2. The filename must match what's in `portfolio.ts` → `personal.cv`

### 11. Replace Project Images

1. Place images in `public/images/projects/`
2. Update the `image` field in the corresponding project object in `portfolio.ts`
3. Recommended size: 1200×800px or similar 3:2 aspect ratio

### 12. Update SEO

Edit the `seo` section:

```typescript
seo: {
  title: "Your Name — AI & ML Engineer",
  description: "Your meta description...",
  url: "https://yourwebsite.com",
}
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Your portrait photo
│   │   ├── projects/            # Project screenshots
│   │   ├── certificates/        # Certificate images
│   │   └── extracurricular/     # Activity images
│   └── cv.pdf                   # Your CV/resume
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with fonts & SEO
│   │   ├── page.tsx             # Main page assembling all sections
│   │   └── globals.css          # Global styles & theme
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky navigation
│   │   ├── Hero.tsx             # Hero/About section
│   │   ├── Skills.tsx           # Technical skills
│   │   ├── Projects.tsx         # Project showcase
│   │   ├── Experience.tsx       # Work experience
│   │   ├── Certificates.tsx     # Certifications
│   │   ├── Extracurricular.tsx  # Activities & achievements
│   │   ├── Education.tsx        # Education background
│   │   ├── Contact.tsx          # Contact section
│   │   └── Footer.tsx           # Minimal footer
│   │
│   └── data/
│       └── portfolio.ts         # ← ALL YOUR CONTENT GOES HERE
│
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy — Vercel auto-detects Next.js

### Other Platforms

```bash
# Build static export (if needed)
npm run build

# The output will be in .next/ directory
# Follow your platform's deployment guide
```

---

## 🎨 Design Customization

### Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-ivory: #F5F0EB;
  --color-cream: #EDE8E1;
  --color-charcoal: #2C2C2C;
  --color-bronze: #B8956A;
  /* ... */
}
```

### Fonts

Edit font imports in `src/app/layout.tsx`. Currently uses:
- **Playfair Display** — editorial headings
- **Inter** — body text
- **JetBrains Mono** — technical/monospace text

---

## 📋 Tech Stack

- **Next.js** — React framework with SSR/SSG
- **React** — UI components
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Premium icons
- **Google Fonts** — Playfair Display, Inter, JetBrains Mono

---

## ✅ Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Active section highlighting
- ✅ Mobile hamburger menu
- ✅ SEO optimized
- ✅ Accessible (semantic HTML, ARIA, keyboard nav)
- ✅ Performance optimized (lazy loading, optimized fonts)
- ✅ Reduced motion support
- ✅ Single data file for all content
- ✅ Premium editorial typography
- ✅ Warm neutral color palette
