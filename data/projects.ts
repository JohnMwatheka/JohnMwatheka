// data/projects.ts

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  liveUrl?: string;
  image: string;
  highlights: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "resq247",
    name: "ResQ247",
    shortDescription: "Healthcare platform",
    description:
      "A comprehensive healthcare platform designed to streamline emergency response, patient management, and real-time coordination between medical teams and facilities.",
    year: "2024",
    role: "Full-stack Engineer",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Node.js"],
    liveUrl: "https://medical.resq247.life/",
    image: "/resq247.png",
    highlights: [
      "Real-time emergency request handling",
      "Role-based dashboards for responders and admins",
      "Secure patient data management",
      "Location-aware dispatch system",
    ],
    featured: true,
  },
  {
    slug: "sopa-trails",
    name: "Sopa Trails Africa",
    shortDescription: "Travel platform",
    description:
      "A modern travel platform focused on African destinations, enabling users to discover curated experiences, book trips, and explore authentic local journeys.",
    year: "2024",
    role: "Full-stack Engineer",
    stack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS"],
    liveUrl: "https://www.sopatrailsafrica.com/",
    image: "/sopa.png",
    highlights: [
      "Curated destination and experience listings",
      "Seamless booking and itinerary management",
      "Responsive, mobile-first exploration experience",
      "Admin tools for content and inventory control",
    ],
    featured: true,
  },
  {
    slug: "yamismart",
    name: "Yamismart",
    shortDescription: "Rides & food delivery",
    description:
      "A multi-service platform offering rides and food delivery across Kinshasa and Lubumbashi, connecting riders, drivers, and merchants in a unified experience.",
    year: "2024",
    role: "Full-stack Engineer",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://www.yamismart.com/",
    image: "/yamismart.png",
    highlights: [
      "Dual-service architecture (rides + food delivery)",
      "Real-time order and ride tracking",
      "Driver and merchant management systems",
      "Optimized for high-volume urban operations",
    ],
    featured: true,
  },
  {
    slug: "pacesetter",
    name: "Pacesetter Events",
    shortDescription: "Event ticketing",
    description:
      "An event ticketing platform that simplifies discovery, booking, and management of events.",
    year: "2023",
    role: "Full-stack Engineer",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://events.pacesetter.co.ke/",
    image: "/projects/pacesetter.jpg",
    highlights: [],
    featured: false,
  },
  {
    slug: "kai-clean-tech",
    name: "Kai Clean Tech",
    shortDescription: "Clean technology",
    description: "Clean technology solutions platform.",
    year: "2024",
    role: "Full-stack Engineer",
    stack: [],
    liveUrl: "https://www.kaicleantech.com/",
    image: "",
    highlights: [],
    featured: false,
  },
  {
    slug: "smrt-constructions",
    name: "SMRT Constructions",
    shortDescription: "Construction",
    description: "Construction company digital presence.",
    year: "2024",
    role: "Full-stack Engineer",
    stack: [],
    liveUrl: "https://www.smrt-constructions.com/",
    image: "",
    highlights: [],
    featured: false,
  },
  {
    slug: "5devs",
    name: "5Devs",
    shortDescription: "Software agency",
    description: "Software development agency website.",
    year: "2024",
    role: "Full-stack Engineer",
    stack: [],
    liveUrl: "https://www.5devs.co.ke/",
    image: "",
    highlights: [],
    featured: false,
  },
  {
    slug: "heliora",
    name: "Heliora Limited",
    shortDescription: "Business platform",
    description: "Corporate website for Heliora Limited.",
    year: "2024",
    role: "Full-stack Engineer",
    stack: [],
    liveUrl: "https://www.helioralimited.com/",
    image: "",
    highlights: [],
    featured: false,
  },
  {
    slug: "jamara-homecare",
    name: "Jamara Homecare",
    shortDescription: "Homecare services",
    description: "Homecare services platform.",
    year: "2024",
    role: "Full-stack Engineer",
    stack: [],
    liveUrl: "https://www.jamarahomecare.com/",
    image: "",
    highlights: [],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getOtherProjects(): Project[] {
  return projects.filter((project) => !project.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}