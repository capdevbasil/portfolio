export interface ExperienceEntry {
  jobTitle: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    jobTitle: "Senior Fullstack Developer (Remote)",
    company: "Summitcode Experts",
    duration: "May 2025 – Present",
    location: "Sharjah, UAE",
    responsibilities: [
      "Sole engineer responsible for architecting and shipping a full service booking management platform (Motorhub) using Next.js, Node.js, AWS, and PostgreSQL — delivered 100% on time.",
      "Built and managed the complete stack independently: UI, REST API, AWS infrastructure, and CI/CD pipeline.",
      "Implemented secure authentication using AWS Cognito and optimized data fetching with SWR caching.",
      "Improved sprint predictability through Scrum practices, reducing carry-over by 20% and raising team velocity.",
      "Led code reviews that reduced production bugs by 10%.",
    ],
  },
  {
    jobTitle: "Senior React Developer",
    company: "Zora Technologies",
    duration: "Nov 2024 – May 2025",
    location: "Trivandrum, Kerala",
    responsibilities: [
      "Built a fleet management web application using React, Mantine UI, and Clerk authentication, with SWR for API caching.",
      "Mentored junior developers through structured knowledge-sharing, improving team productivity by 30%.",
      "Set up CI/CD pipelines using Azure DevOps, increasing deployment frequency by 20%.",
      "Ensured fully responsive, device-optimized UI across all screen sizes.",
    ],
  },
  {
    jobTitle: "Junior Engineer → Senior Engineer",
    company: "dbiz.ai",
    duration: "Jul 2020 – Nov 2024",
    location: "Kochi, Kerala",
    responsibilities: [
      "Scaled REST APIs built with NestJS and PostgreSQL to serve 50,000+ monthly active users at 99.9% uptime.",
      "Cut global search API latency from 800ms to 45ms by integrating Elasticsearch with real-time search-as-you-type indexing.",
      "Integrated backend services with Sitecore and Salesforce for enterprise data workflows (LiveAldar project).",
      "Built cross-platform mobile and web apps using React Native, Flutter, and Next.js with consistent UI/UX.",
      "Implemented geospatial map features with ArcGIS and multi-language support via Lokalise.",
      "Delivered across multiple client projects including DARI Value (React/Storybook), Fleetpartners (Drupal/CI/CD), and Smilebench (React/Auth0/Stripe).",
    ],
  },
];
