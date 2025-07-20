import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiLogoVisualStudio } from "react-icons/bi";
import styles from "../About/About.module.css";

export const navLinks = [
  { name: "Home", route: "#home" },
  { name: "About", route: "#about" },
  { name: "Skills", route: "#skills" },
  { name: "Experience", route: "#experience" },
  { name: "Projects", route: "#projects" },
  { name: "Education", route: "#education" },
  { name: "Contact", route: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/SuprabhaPanigrahi",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/suprabha-panigrahi-6a0b2a1b3/",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/situ3289",
    icon: <FaInstagram />,
  },
  {
    name: "Telegram",
    url: "https://telegram.com/SuprabhaPanigrahi",
    icon: <FaTelegram />,
  },
];

export const aboutText = `
  I’m an aspiring full-stack web developer with a solid foundation in HTML, CSS, JavaScript, TypeScript, and Python, along with proficiency in C, Java, and MySQL. My journey has led me to modern technologies like React, Next.js, Node.js, Express.js, and MongoDB, where I’m continually honing my skills.

  Fueled by curiosity and a passion for innovation, I love building dynamic, user-friendly, and meaningful web applications that solve real-world problems. I thrive in environments that encourage learning and growth, and I’m always exploring new tools, frameworks, and creative solutions.

  With a focus on both functionality and aesthetics, I enjoy crafting seamless user interfaces and building robust backend systems. Beyond coding, I engage with the developer community through learning, sharing, and contributing to open-source.
`;
<div className={styles.text}>
  {aboutText.split("\n\n").map((paragraph, index) => (
    <p key={index}>{paragraph.trim()}</p>
  ))}
</div>;

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    ],
    color: "#6366f1",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "C", icon: <span className="text-white">C</span> },
    ],
    color: "#ec4899",
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    ],
    color: "#10b981",
  },
  {
    title: "AI/ML",
    skills: [
      {
        name: "AI & ML",
        icon: <GiArtificialIntelligence className="text-[#FF6F00]" />,
      },
    ],
    color: "#f59e0b",
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
      {
        name: "VSCode",
        icon: <BiLogoVisualStudio className="text-[#007ACC]" />,
      }, // Fixed icon name
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
    color: "#3b82f6",
  },
  {
    title: "Design",
    skills: [{ name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> }],
    color: "#8b5cf6",
  },
];

export const experiences = [
  {
    role: "Software Development Engineer",
    company: "Akrabhi Softlabs Pvt Ltd.",
    period: "April 2021 - June 2021",
    responsibilities: [
      "Developed responsive and maintainable frontend components using React, TypeScript, and Next.js for a healthcare web platform.",
      "Applied strong HTML, CSS, and JavaScript skills to deliver scalable UI solutions.",
      "Collaborated with design team to implement UI/UX improvements.",
      "Optimized application performance reducing load time by 30%.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Next.js",
      "Redux",
      "Figma",
      "Git & GitHub",
    ],
  },
  {
    role: "Machine Learning & Deep Learning Intern",
    company: "NIST University",
    period: "June 2024 - June 2024",
    responsibilities: [
      "Designed ML models improving data analysis efficiency by 20%.",
      "Developed a sentiment analysis system using NLP, enhancing customer feedback insights by 25%.",
    ],
    skills: [
      "Python",
      "AI",
      "Machine Learning",
      "Deep Learning",
      "Tensorflow",
      "Scikit Learn",
      "Numpy",
      "Pandas",
    ],
  },
];

export const projectTypes = ["all", "web", "app", "design", "fullstack"];

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with React showcasing projects, skills, and professional experience with smooth animations and responsive design.",
    tags: ["React", "Framer Motion", "CSS Modules"],
    type: "web",
    imageUrl: "/images/Portfolio_React.png",
    projectUrl: "https://suprabha-portfolio.vercel.app/",
    codeUrl: "https://github.com/SuprabhaPanigrahi/Portfolio-Project-using-React",
  },
  {
    title: "E-Commerce Application",
    description:
      "A feature-rich e-commerce web application with product listings, cart, filters, and seamless user experience using React, Redux, and Styled Components.",
    tags: ["React", "Redux", "TypeScript", "Styled Components", "React Router"],
    type: "web",
    imageUrl: "/images/E-Commerce_React.png",
    projectUrl: "https://e-commerce-application-using-react-three.vercel.app/",
    codeUrl:
      "https://github.com/SuprabhaPanigrahi/E-Commerce-Application-using-REACT",
  },
  {
    title: "Portfolio Website",
    description:
      "A clean and responsive personal portfolio built using just HTML, CSS, and vanilla JavaScript to demonstrate fundamentals of frontend development.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "web",
    imageUrl: "/images/Portfolio_JS.png",
    projectUrl: "https://portfolio-project-using-html-css-js.vercel.app/",
    codeUrl:
      "https://github.com/SuprabhaPanigrahi/Portfolio-Project-using-HTML-CSS-JS",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather application that fetches and displays weather data using an external API, with clean UI and responsive design.",
    tags: ["React", "REST API", "CSS"],
    type: "web",
    imageUrl: "/images/Weather_React.png",
    projectUrl: "https://weather-app-using-react-beige.vercel.app/",
    codeUrl: "https://github.com/SuprabhaPanigrahi/Weather-App-using-REACT",
  },
  {
    title: "Todo App",
    description:
      "A simple and functional to-do list app with add/delete functionalities and a clean React-based interface.",
    tags: ["React", "Hooks", "CSS"],
    type: "web",
    imageUrl: "/images/Todo_React.png",
    projectUrl: "https://todo-app-using-react-indol.vercel.app/",
    codeUrl: "https://github.com/SuprabhaPanigrahi/Todo-App-using-React",
  },
  {
    title: "VSCode Clone",
    description:
      "A static UI clone of Visual Studio Code built using Next.js to mimic the structure, icons, and theme of the popular code editor.",
    tags: ["Next.js", "React", "CSS", "Icons"],
    type: "web",
    imageUrl: "/images/VSCode_Nextjs.png",
    projectUrl: "https://vs-code-clone-using-nextjs.vercel.app/",
    codeUrl: "https://github.com/SuprabhaPanigrahi/VSCode-Clone-using-NEXTJS",
  },
  {
    title: "Todo App",
    description:
      "A to-do app built with Next.js using client-side rendering, providing task management functionality in a clean interface.",
    tags: ["Next.js", "React", "CSS"],
    type: "web",
    imageUrl: "/images/Todo_Nextjs.png",
    projectUrl: "https://todo-app-using-nextjs-six.vercel.app/",
    codeUrl: "https://github.com/SuprabhaPanigrahi/Todo-App-using-NEXTJS",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game built with Next.js, featuring turn-based logic, winning condition checks, and a sleek interface.",
    tags: ["Next.js", "React", "JavaScript", "CSS"],
    type: "web",
    imageUrl: "/images/Tic_Nextjs.png",
    projectUrl: "https://tic-tac-toe-using-nextjs.vercel.app/",
    codeUrl: "https://github.com/SuprabhaPanigrahi/Tic-Tac-Toe-using-NEXTJS",
  },
  {
    title: "CSS Micro Projects",
    description:
      "A collection of mini UI/UX components and animations built purely using CSS, demonstrating creativity and frontend polish.",
    tags: ["CSS", "HTML", "Animations"],
    type: "design",
    imageUrl: "/images/CSS.png",
    projectUrl: "https://css-projects-fawn.vercel.app/",
    codeUrl: "https://github.com/SuprabhaPanigrahi/CSS_Projects",
  },
  {
    title: "Weather Prediction using ML",
    description:
      "A machine learning-based app that predicts future weather conditions using regression models and real datasets.",
    tags: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Flask",
      "API",
    ],
    type: "fullstack",
    imageUrl: "/images/Weather_ML.jpg",
    projectUrl: "https://weather-prediction-using-ai-and-ml.vercel.app/",
    codeUrl:
      "https://github.com/SuprabhaPanigrahi/Weather-Prediction-using-AI-and-ML",
  },
];

// Add education data
export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "NIST University",
    year: "2023 - 2025",
    description: "Specialized in Web Development and Machine Learning.",
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Physics",
    institution: "Kalam Degree Science College",
    year: "2019 - 2022",
    description: "Graduated with Honors in Physics.",
  },
  {
    degree: "O-Level / PGDCA Computer Course",
    institution:
      "National Institute of Electronics and Information Technology (NIELIT)",
    year: "2021 - 2024",
    description:
      "Learned IT fundamentals, web designing (HTML, CSS, JavaScript, Angular), IoT, and Python programming.",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Kalam Institute of Technology",
    year: "2017 - 2019",
    description:
      "Science stream with subjects: Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Mother Sarojini Girls' High School",
    year: "2017",
    description: "Completed matriculation with distinction.",
  },
];
