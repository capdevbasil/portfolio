export interface WritingEntry {
  title: string;
  description: string;
  category: string;
  date?: string;
  link?: string;
}

export const writingEntries: WritingEntry[] = [
  {
    title: "Reflections on Code and Craft",
    description: "An essay exploring the parallels between software engineering and traditional craftsmanship.",
    category: "essay",
    date: "2025",
  },
  {
    title: "Midnight Compiler",
    description: "A poem about the quiet hours spent debugging and the beauty found in logic.",
    category: "poetry",
    date: "2025",
  },
  {
    title: "The Last Deploy",
    description: "A short story about a developer's final project and the lessons learned along the way.",
    category: "short story",
    date: "2024",
  },
];
