export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { name: "Core Stack", skills: ["TypeScript", "React", "Next.js", "Node.js (NestJS / Express)", "PostgreSQL", "AWS"] },
  { name: "Frontend & Mobile", skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "Redux", "Angular", "Vue.js", "React Native", "Flutter", "Dart"] },
  { name: "Backend & Data", skills: ["GraphQL", "RESTful APIs", "MongoDB", "Elasticsearch", "Redis", "Python", "Java"] },
  { name: "Cloud & DevOps", skills: ["AWS (Cognito, EC2, S3)", "Azure", "Docker", "Kubernetes", "CI/CD (Azure DevOps, Acquia)", "Git / GitHub / GitLab / Bitbucket"] },
  { name: "Tools", skills: ["Figma", "Storybook", "Postman", "Jest", "Mocha", "Jira", "Lokalise", "ArcGIS", "VS Code", "Cursor"] },
];
