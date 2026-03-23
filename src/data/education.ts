export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Université Cadi Ayyad",
    degree: "License",
    field: "SIR ",
    location: "Marrakech",
    start: "2025-09",
    end: "2026-07",
    courses: ["JEE", "DATA", "WEB & IHM"],  },
];
