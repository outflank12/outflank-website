import { Code2, Smartphone, Globe2, BrainCircuit, ShoppingBag, Server, Check, Layers3 } from 'lucide-react';

export type Project = {
  id: string
  title: string
  category: string
  type: string
  description: string
  image: string
  technologies: string[]
  featured: boolean
  liveUrl?: string
  appUrl?: string
  role: string
  features: string[]
}

export const projects: Project[] = [
  {
    id: "swakash",
    title: "Swakash",
    category: "E-commerce",
    type: "E-commerce Platform",
    description: "A modern e-commerce platform built for Swakash, focusing on conversion, speed, and clean UI for the Indian market.",
    image: "/projects/swakash.webp",
    technologies: ["Next.js", "React", "Tailwind CSS", "E-commerce"],
    featured: true,
    liveUrl: "https://swakash.in",
    role: "Full-Stack Developer",
    features: ["High Conversion UI", "Responsive Design", "Fast Loading"],
  },
  {
    id: "masai-makhana",
    title: "Masai Makhana",
    category: "E-commerce",
    type: "Food & Beverage E-commerce",
    description: "A vibrant and responsive e-commerce experience tailored for the food and wellness market, optimizing product discovery.",
    image: "/projects/masai-makhana.webp",
    technologies: ["Web Development", "E-commerce", "Responsive UI"],
    featured: true,
    liveUrl: "https://masaimakhana.com",
    role: "Frontend Developer",
    features: ["Product Discovery", "Clean UI", "Brand Integration"],
  },
  {
    id: "voylla",
    title: "Voylla",
    category: "E-commerce",
    type: "Jewelry E-commerce",
    description: "A premium online shopping experience featuring seamless product discovery and elegant design for the jewelry sector.",
    image: "/projects/voylla.webp",
    technologies: ["Premium UI", "E-commerce", "Web Development"],
    featured: true,
    liveUrl: "https://www.voylla.com",
    role: "Web Developer",
    features: ["Elegant Design", "Visual Focus", "Performance Optimized"],
  },
  {
    id: "knights-curry",
    title: "Knights Curry Express",
    category: "Restaurant",
    type: "Web Development",
    description: "A modern restaurant website built for Knights Curry Express, focused on presenting the restaurant brand, menu, food offerings and digital ordering experience.",
    image: "/projects/knights-curry.webp",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "Vercel"],
    featured: false,
    liveUrl: "https://www.knightscurryexpress.com/",
    role: "Full-Stack Developer",
    features: ["Responsive UI", "Menu Showcase", "Brand Integration"],
  },
  {
    id: "curry-bowl",
    title: "Curry Bowl Orlando",
    category: "Restaurant",
    type: "Web Development",
    description: "A modern Indian restaurant website designed to showcase the restaurant brand, menu and ordering experience through a clean, responsive digital experience.",
    image: "/projects/curry-bowl.webp",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "Vercel"],
    featured: false,
    liveUrl: "https://curry-bowl.vercel.app/",
    role: "Frontend Developer",
    features: ["Clean Interface", "Menu Integration", "Mobile Optimization"],
  },
  {
    id: "goodtimes",
    title: "GoodTimes Bar & Grill",
    category: "Restaurant",
    type: "Website Migration / Modernization",
    description: "A restaurant website rebuilt from an existing WordPress experience into a modern Next.js-based website with a responsive interface and improved maintainability.",
    image: "/projects/goodtimes.webp",
    technologies: ["Next.js", "React", "Tailwind CSS", "WordPress Migration", "Responsive Design", "Vercel"],
    featured: false,
    liveUrl: "https://goodtimesbarandgrill.com/",
    role: "Full-Stack Developer",
    features: ["Performance Optimization", "Custom UI", "SEO Improvements"],
  },
  {
    id: "zee-crown",
    title: "Zee Crown",
    category: "Mobile",
    type: "React Native / Mobile App",
    description: "A production mobile application built using React Native and Expo, with backend integration and an Android deployment workflow.",
    image: "/projects/zee-crown.webp",
    technologies: ["React Native", "Expo", "Supabase", "API Integration", "Android", "EAS"],
    featured: false,
    appUrl: "https://play.google.com/store/apps/details?id=com.alam.zeecrown&pcampaignid=web_share",
    role: "Mobile App Developer",
    features: ["Cross-Platform", "Real-time Backend", "EAS Deployment Workflow"],
  },
  {
    id: "grilli",
    title: "Grilli",
    category: "Restaurant",
    type: "Web Development",
    description: "A modern restaurant website concept focused on premium visual presentation, responsive layouts, restaurant branding and polished frontend interactions.",
    image: "/projects/grilli.webp",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "Vercel"],
    featured: false,
    liveUrl: "https://grilli-master-theta.vercel.app/",
    role: "Frontend Developer",
    features: ["Visual Presentation", "Animations", "Responsive Layout"],
  },
  {
    id: "foodhub",
    title: "FoodHub",
    category: "Restaurant",
    type: "Web Development",
    description: "A modern restaurant website focused on food presentation, menu discovery, responsive design and a polished customer-facing experience.",
    image: "/projects/foodhub.webp",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "Vercel"],
    featured: false,
    liveUrl: "https://foodhub-restaurant-website-master.vercel.app/",
    role: "Frontend Developer",
    features: ["Menu Discovery", "Food Presentation", "Responsive UI"],
  },
  {
    id: "nextjs-animations",
    title: "Next.js Animations",
    category: "UI / Frontend",
    type: "Interactive Web Experience",
    description: "An interactive frontend showcase exploring modern animation techniques, transitions and motion-based UI interactions using Next.js.",
    image: "/projects/nextjs-animations.webp",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    featured: false,
    liveUrl: "https://nextjs-animations-theta.vercel.app/",
    role: "Frontend Developer",
    features: ["Complex Animations", "Motion UI", "Interactive Experience"],
  },
  {
    id: "bnf-piston",
    title: "BNF Piston",
    category: "Corporate",
    type: "Industrial Website",
    description: "A robust corporate website built for the industrial manufacturing sector, delivering a clean B2B experience.",
    image: "/projects/bnf-piston.webp",
    technologies: ["WordPress", "B2B", "Web Design", "Industrial"],
    featured: false,
    liveUrl: "https://bnfpiston.com",
    role: "Web Developer",
    features: ["B2B Communication", "Corporate Identity", "Lead Generation"],
  }
];

export const services = [
  {
    icon: Globe2,
    title: "Business Websites",
    description: "Modern, responsive websites for businesses, startups and local brands.",
    tech: ["Next.js", "React", "Tailwind CSS"]
  },
  {
    icon: Layers3,
    title: "Full-Stack Web Applications",
    description: "Production-ready web applications with frontend, backend, databases and authentication.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Supabase"]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform applications using React Native and Expo.",
    tech: ["React Native", "Expo", "API Integration"]
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Applications",
    description: "RAG systems, document intelligence, AI assistants and automation workflows.",
    tech: ["RAG", "LLM APIs", "Vector Search"]
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Platforms",
    description: "Product catalogs, shopping workflows, backend systems and payment/API integrations.",
    tech: ["Next.js", "Supabase", "API Integration"]
  },
  {
    icon: Server,
    title: "Deployment & Infrastructure",
    description: "Vercel, VPS, domains, DNS, databases, APIs, production deployment and maintenance.",
    tech: ["Vercel", "VPS", "GitHub", "EAS"]
  }
];

export const techCategories = [
  {
    name: "Frontend",
    techs: ["Next.js", "React", "Tailwind CSS", "TypeScript"]
  },
  {
    name: "Backend",
    techs: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"]
  },
  {
    name: "Mobile",
    techs: ["React Native", "Expo"]
  },
  {
    name: "AI",
    techs: ["RAG", "LLM APIs", "Embeddings", "Vector Search", "AI Agents"]
  },
  {
    name: "Deployment",
    techs: ["Vercel", "Hostinger VPS", "GitHub", "EAS"]
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business, users and requirements."
  },
  {
    number: "02",
    title: "Plan",
    description: "Define features, architecture and implementation strategy."
  },
  {
    number: "03",
    title: "Build",
    description: "Design and develop the product in iterative stages."
  },
  {
    number: "04",
    title: "Test & Refine",
    description: "Fix issues, improve responsiveness and polish the experience."
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy the product and hand over a production-ready system."
  }
];

export const clientFit = [
  "Startups",
  "Businesses",
  "Restaurants",
  "Local Brands",
  "Creators",
  "Organizations"
];
