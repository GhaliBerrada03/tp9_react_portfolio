export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Site E-Learning",
    period: "2025",
    tags: ["React", "Node", "OpenFoodFacts"],
    summary: "Application de Elearning.",
    repo: "https://github.com/me/elearning",
  },
];