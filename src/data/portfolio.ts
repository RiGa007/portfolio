// ============================================================
// PORTFOLIO DATA — Edit this file to update your entire website
// ============================================================
// This is the SINGLE SOURCE OF TRUTH for all portfolio content.
// Update your information here and the UI will reflect changes automatically.
// No need to edit component files unless you want to change the design.
// ============================================================

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  metrics?: string;
  category?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  type?: string;
  badge?: string;
  badgeUrl?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl: string;
  image?: string;
}

export interface Extracurricular {
  year: string;
  title: string;
  description: string;
  category: string;
}

export interface Badge {
  title: string;
  issuer?: string;
  url: string;
}

export interface Education {
  institution: string;
  degree: string;
  specialization: string;
  duration: string;
  grade: string;
  coursework: string[];
  achievements?: string[];
}

export const portfolio = {
  // ==============================
  // PERSONAL INFORMATION
  // ==============================
  // Replace with your actual details.
  // "image" should be a professional portrait photo placed at public/images/profile.jpg
  // "cv" should be your resume/CV placed at public/cv.pdf
  personal: {
    name: "Rishabh Gangwar",
    title: "Full Stack Engineer",
    subtitle: "Pursuing B.Tech in Computer Science Engineering with interest in Backend Development.",
    bio: "Building robust systems and tackling complex problems through thoughtful engineering.",
    location: "India",
    image: "/images/profile.jpg",
    cv: "https://docs.google.com/document/d/1O8n9nTFL-LCL0eGExncY-ajCoy0tKh27/edit?usp=sharing&ouid=116453523905600619486&rtpof=true&sd=true",
    badge: "OPEN SOURCE CONTRIBUTOR · GSSoC 2026",
  },

  // ==============================
  // NAVIGATION
  // ==============================
  // Customize navigation labels if needed.
  // href values correspond to section IDs in the page.
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Extra Curricular", href: "#extracurricular" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  // ==============================
  // SKILLS
  // ==============================
  // Add or remove skills in each category.
  // Add new categories by adding new keys.
  skills: {
    languages: ["C++", "Python", "C", "JavaScript", "HTML", "SQL"],
    ai_ml: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Generative AI",
      "LLMs",
    ],
    frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "TensorFlow",
      "PyTorch",
    ],
    tools: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
    databases: ["PostgreSQL", "MongoDB", "Supabase"],
    other: ["REST APIs", "CI/CD", "System Design"],

    // Professional / interpersonal skills (rendered in a separate subsection)
    professional: [
      "Leadership",
      "Adaptability",
      "Problem Solving",
      "Time Management",
      "Communication",
      "Team Collaboration",
      "Critical Thinking",
      "Project Management",
    ],
  },

  // ==============================
  // SKILL CATEGORY DISPLAY NAMES
  // ==============================
  // Human-readable labels for skill categories.
  skillLabels: {
    languages: "Languages",
    ai_ml: "AI / ML",
    frameworks: "Frameworks",
    tools: "Tools",
    databases: "Databases",
    other: "Other",
    professional: "Professional Skills",
  } as Record<string, string>,

  // ==============================
  // PROJECTS
  // ==============================
  // Add or remove project objects below.
  // Set "featured: true" for projects that should appear larger/more prominent.
  // Images should be placed in public/images/projects/
  projects: [
    {
      title: "DevFlow",
      description:
        "A full-stack project and task management platform designed for organizing projects, tasks, and workflows with authentication, Kanban and list views, search, filtering, and secure user-level data access.",
      image: "/images/projects/devflow.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
      ],
      github: "https://github.com/RiGa007/devflow",
      demo: "https://devflow-two-nu.vercel.app",
      featured: true,
      category: "Full-Stack",
    },
    {
      title: "Smart Buoy",
      description:
        "A floating IoT-based water monitoring system designed to monitor water conditions in real time, including water temperature, pH, turbidity, and overall water cleanliness.",
      technologies: ["ESP32", "pH Sensor", "Turbidity Sensor", "IoT"],
      github: "",
      demo: "",
      featured: true,
      category: "IoT / Embedded Systems",
    },
  ] as Project[],

  // ==============================
  // INTERNSHIP / EXPERIENCE
  // ==============================
  // Add your work experience, internships, and roles.
  experience: [
    {
      company: "GirlScript Summer of Code",
      role: "Open Source Contributor (GSSoC 2026)",
      type: "Internship",
      duration: "May 2026 – Present",
      location: "Remote",
      description:
        "Selected as an Open Source Contributor for GSSoC 2026.",
      achievements: [],
      technologies: [],
      badge: "GSSoC 2026 Contributor",
    },
    {
      company: "Google Developer Experts",
      role: "Google Cloud & NVIDIA Community Member",
      type: "Apprenticeship",
      duration: "Feb 2026 – Present",
      location: "Jalandhar, Punjab, India · Remote",
      description:
        "Active member of the Google Cloud & NVIDIA community, exploring cloud infrastructure, GPU computing, and AI/ML technologies.",
      achievements: [],
      technologies: [],
      badge: "Google Cloud & NVIDIA Community",
      badgeUrl:
        "https://developers.google.com/profile/badges/nvidia-developer",
    },
  ] as Experience[],

  // ==============================
  // CERTIFICATES
  // ==============================
  // Add your certifications and credentials.
  certificates: [
    {
      title:
        "Generative AI for Software Developers Specialization Certificate",
      issuer: "Coursera",
      date: "2026",
      credentialUrl:
        "https://coursera.org/share/ee3470f1d3fafff66aeff63eac4d4a3a",
    },
    {
      title: "Generative AI: Introduction and Application",
      issuer: "Coursera",
      date: "2026",
      credentialUrl:
        "https://coursera.org/share/a7b59f6e56349b55ec4f2c61f99f6c98",
    },
    {
      title: "Generative AI: Prompt Engineering Basics",
      issuer: "Coursera",
      date: "2026",
      credentialUrl:
        "https://coursera.org/share/0d259725a55b4edd829866c12ed2caad",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      date: "2026",
      credentialUrl:
        "https://coursera.org/share/6737c3b8b7e2514119e9a9bcc52bb642",
    },
  ] as Certificate[],

  // ==============================
  // EXTRA CURRICULAR ACTIVITIES
  // ==============================
  // Add hackathons, clubs, competitions, volunteering, etc.
  extracurricular: [
    {
      year: "2025",
      title: "Smart India Hackathon 2025 — Top 10, Internal Round",
      description:
        "Team placed among the Top 10 teams in the internal selection round of Smart India Hackathon 2025.",
      category: "Hackathon",
    },
    {
      year: "2025",
      title: "Hackathon — Top 10 / 50 Teams",
      description:
        "Team placed in the Top 10 out of 50 participating teams.",
      category: "Hackathon",
    },
    {
      year: "2025",
      title: "Reddix Club — Member",
      description:
        "Member of the Reddix Club since 2025, participating in technical activities and collaborative initiatives.",
      category: "Technical Club",
    },
  ] as Extracurricular[],

  // ==============================
  // LEARNING BADGES & CREDENTIALS
  // ==============================
  badges: [
    {
      title: "Google Cloud & NVIDIA Community",
      issuer: "Google / NVIDIA",
      url: "https://developers.google.com/profile/badges/nvidia-developer",
    },
    {
      title: "Speed Up Data Analytics with GPUs",
      issuer: "Google / NVIDIA",
      url: "https://developers.google.com/profile/badges/playlists/speed-up-data-analytics-GPUs",
    },
    {
      title: "Deploy Faster Generative AI Models",
      issuer: "Google / NVIDIA",
      url: "https://developers.google.com/profile/badges/playlists/nvidia-deploy-with-gen-ai",
    },
  ] as Badge[],

  // ==============================
  // EDUCATION
  // ==============================
  // Add your educational qualifications.
  education: [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Full Stack Engineer",
      duration: "2025 – 2029",
      grade: "CGPA: 8.09",
      coursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
      ],
      achievements: [],
    },
  ] as Education[],

  // ==============================
  // CONTACT INFORMATION
  // ==============================
  // Replace with your actual contact links.
  // Set any field to "" to hide it from the website.
  contact: {
    email: "gangwarrishab94@gmail.com",
    github: "https://github.com/RiGa007",
    linkedin: "https://www.linkedin.com/in/rishabh-gangwar-44861b2ab/",
    twitter: "",
    heading: "Let's Build Something Meaningful.",
    subtext:
      "Open to internships, collaborations, research opportunities, and interesting engineering projects.",
  },

  // ==============================
  // SEO & METADATA
  // ==============================
  // Used for page title, meta description, and Open Graph tags.
  seo: {
    title: "Rishabh Gangwar — Full Stack Engineer",
    description:
      "Full Stack Engineer building intelligent systems through machine learning and software engineering.",
    url: "https://yourwebsite.com",
  },
};
