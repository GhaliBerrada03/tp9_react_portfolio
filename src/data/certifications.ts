export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    issueDate: "2024-06",
    skills: ["React", "Hooks", "Redux", "Next.js"],
    tags: ["Frontend", "JavaScript"],
    status: "active",
  },
  {
    title: "Java EE - Développement d'Applications Web",
    issuer: "Udemy",
    issueDate: "2024-01",
    skills: ["JEE", "Servlets", "JSP", "Hibernate"],
    tags: ["Backend", "Java"],
    status: "active",
  },
];