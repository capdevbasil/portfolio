export interface ProjectEntry {
  name: string;
  techStack: string[];
  duration: string;
  accomplishments: string[];
}

export const projects: ProjectEntry[] = [
  {
    name: "Motorhub",
    techStack: ["Next.js", "Node.js", "AWS", "PostgreSQL"],
    duration: "May 2025 – Present",
    accomplishments: [
      "Sole engineer responsible for architecting and shipping a full service booking management platform.",
      "Built and managed the complete stack independently: UI, REST API, AWS infrastructure, and CI/CD pipeline.",
      "Implemented secure authentication using AWS Cognito and optimized data fetching with SWR caching.",
    ],
  },
  {
    name: "Fleet Management App (Zora)",
    techStack: ["React", "Clerk", "Mantine", "SWR", "Azure DevOps"],
    duration: "Nov 2024 – May 2025",
    accomplishments: [
      "Built a fleet management web application with Clerk authentication and Mantine UI.",
      "Set up CI/CD pipelines using Azure DevOps, increasing deployment frequency by 20%.",
      "Ensured fully responsive, device-optimized UI across all screen sizes.",
    ],
  },
  {
    name: "LiveAldar",
    techStack: ["NestJS", "PostgreSQL", "Sitecore", "Salesforce", "Elasticsearch"],
    duration: "Jul 2020 – Nov 2024",
    accomplishments: [
      "Scaled REST APIs to serve 50,000+ monthly active users at 99.9% uptime.",
      "Cut global search API latency from 800ms to 45ms by integrating Elasticsearch with real-time indexing.",
      "Integrated backend services with Sitecore and Salesforce for enterprise data workflows.",
    ],
  },
  {
    name: "DARI Value",
    techStack: ["React", "Storybook"],
    duration: "Jul 2020 – Nov 2024",
    accomplishments: [
      "Developed a React-based application with a component library built using Storybook.",
    ],
  },
  {
    name: "Smilebench",
    techStack: ["React", "Auth0", "Stripe"],
    duration: "Jul 2020 – Nov 2024",
    accomplishments: [
      "Built a web application with Auth0 authentication and Stripe payment integration.",
    ],
  },
];
