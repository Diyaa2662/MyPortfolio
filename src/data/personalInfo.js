import dentalHubImg from "../assets/images/dental-hub.jpg";
import taskflowImg from "../assets/images/taskflow.jpg";
import techtalkImg from "../assets/images/techtalk.jpg";

export const personalInfo = {
  name: "Diyaa Altaweel",
  title: "Frontend Developer & UI/UX Specialist",
  shortBio:
    "Software Engineering graduate passionate about crafting beautiful, responsive web and mobile experiences. I blend technical expertise with design thinking to create products that users love.",
  location: "Syria",
  email: "diyaaaltaweel@gmail.com",
  phone: "+963 983852548",
  github: "https://github.com/Diyaa2662/",
  facebook: "https://www.facebook.com/share/1Dd3F77kig/",
  instagram: "https://www.instagram.com/diyaa._.mt",
  whatsapp: "https://wa.me/963983852548",
  cvLink: "#",
};

export const skills = {
  technical: [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "React Native", level: 85, color: "#61DAFB" },
    { name: "Tailwind CSS", level: 90, color: "#06B6D4" },
    { name: "JavaScript", level: 88, color: "#F7DF1E" },
    { name: "UI/UX Design", level: 85, color: "#FF61F6" },
  ],
  languages: ["C++", "C#", "Java", "JavaScript", "Python"],
  tools: ["VS Code", "Postman", "Figma", "GitHub", "Vercel"],
};

export const experience = {
  current: {
    company: "Degital Globe",
    position: "Frontend Developer",
    period: "2024 - Present",
    achievements: [
      "Developed responsive e-commerce platform serving 1000+ daily users",
      "Improved application performance by 40% through code optimization",
      "Collaborated with design team to implement pixel-perfect UI components",
    ],
  },
  freelance: {
    years: 2,
    description: "Delivered 15+ successful projects for international clients",
  },
};

export const projects = [
  {
    id: 1,
    name: "Dental Hub",
    description:
      "E-commerce platform for dental supplies with advanced filtering and cart system",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://dental-hub-v-1-0.vercel.app/",
    github: null,
    image: dentalHubImg,
    featured: true,
  },
  {
    id: 2,
    name: "TaskFlow",
    description:
      "Comprehensive task management system with drag-and-drop and team collaboration features",
    technologies: ["React", "Tailwind CSS", "Redux", "Vercel"],
    link: "https://task-management-system-flame-gamma.vercel.app/",
    github: null,
    image: taskflowImg,
    featured: true,
  },
  {
    id: 3,
    name: "TechTalk",
    description:
      "Social platform for tech enthusiasts to share knowledge and discuss latest trends",
    technologies: ["React Native", "Firebase", "Tailwind CSS"],
    link: "https://tech-talk-chi.vercel.app/",
    github: null,
    image: techtalkImg,
    featured: true,
  },
];

export const education = {
  degree: "Bachelor of Software Engineering and Information Systems",
  institution: "University of Homs",
  year: 2026,
};
