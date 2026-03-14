export type Project = {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "TandemSync",
    description:
      "A real-time ride coordination platform enabling users to create, join, and share rides",
    github: "https://github.com/ironnicko/tandem-sync",
    demo: "https://ts.nikhilivannan.live",
    stack: [
      "Next.js",
      "Hostinger",
      "React",
      "PWA",
      "Tailwind CSS",
      "Docker and Docker Compose",
      "Github Actions",
      "Traefik",
      "Go",
      "DragonflyDB",
      "MongoDB",
      "WebSockets",
    ],
    featured: true,
  },
  {
    title: "Outfits.ai",
    description:
      "App designed to handle wardrobe management. Easily catalog, organize, and style your clothing collection with advanced digital tools.",
    github: "https://github.com/ironnicko/outfits.ai",
    demo: "https://www.youtube.com/watch?v=ML2DYIvcke8",
    stack: [
      "FastAPI",
      "Python",
      "RAG Pipeline",
      "React Native",
      "Go",
      "PostgresQL and pgVector",
      "AWS",
      "Docker",
      "Docker Compose",
      "Terraform",
      "Anisible",
    ],
    featured: true,
  },
  {
    title: "plantDEX",
    description:
      "Mobile application designed to empower farmers and agricultural enthusiasts \
      by leveraging a CNN model to assist in the quick and accurate identification of plant diseases, \
      making crop management more efficient and effective.",
    github: "https://github.com/ironnicko/plantDEX",
    stack: [
      "Python",
      "FastAPI",
      "React Native",
      "Firebase",
      "Expo",
      "Google Cloud Run",
    ],
  },
  {
    title: "semlimiter",
    description:
      "rate limiter for stateless services but using semantic search over rules.",
    github: "https://github.com/ironnicko/semlimiter",
    stack: ["Go", "Python", "gRPC", "K6 Tests", "Embedding Model"],
  },
];
