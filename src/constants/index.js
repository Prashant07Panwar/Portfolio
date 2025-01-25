import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project4.png";
import project4 from "../assets/projects/project3.png";


export const HERO_CONTENT = `I’m a passionate Full Stack Developer skilled in building dynamic and efficient web applications. From crafting responsive frontends to optimizing backend performance, I enjoy solving complex challenges and turning ideas into impactful solutions. Let’s connect and collaborate!`;

export const ABOUT_TEXT = [
  `I’m a passionate Full Stack Developer. I completed my graduation in Information Technology with an overall CGPA of 9.02.
I specialize in building dynamic and efficient web applications, excelling in both frontend and backend development. I enjoy solving complex challenges, creating responsive designs, and delivering impactful digital solutions.`
];

export const DATA = [
  { title: "About", href: "#about" },
  { title: "Technologies", href: "#technologies" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  // { title: "Testimonials", href: "#testimonials" },
  { title: "Contact", href: "#contact" },
];

export const EXPERIENCES = [
  {
    year: "June 2023 - July 2024",
    role: "Web Developer and Research",
    company: " Bharat Electronics Limited, Ghaziabad, Uttar Pradesh, India",
    description: [
      `Developed a dummy website for Bharat Electronic Limited using HTML, CSS, and JavaScript, detailing nine
 locations and showcasing company information.`,
      `Demonstrated expertise in Software Development Life Cycle for Network-Centric Systems, optimizing
 methodologies and implementing best practices. Researched Radar Systems, including NFTR testing(100% indoor
 testing range), contributing to strategic insights.`,
    ],
    technologies: ["Javascript", "HTML", "CSS", "React.js"],
  },
  {
    year: "Jan, 2024 - July, 2024",
    role: "Full Stack Intern",
    company:
      "Cehpoint E-Learning And Cyber Security, Kolkata, West Bengal, India",
    description: [
      `Boosted user engagement by 25% with an interactive website, fostering efficient hiring practices for developers and
 employers while providing a user-friendly environment for project execution.`,
      `Orchestrated the development of an interactive freelancer platform, integrating cutting-edge technologies like
 React.js and Tailwind CSS. Crafted an engaging assessment page with user-centric design, enhancing the hiring
 process and user experience.`,
    ],
    technologies: [
      "Javascript",
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "MongoDB",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Linktree",
    image: project1,
    link: "https://smm-two.vercel.app",
    code: "https://github.com/osi-102",
    description: [
      "Developed a Linktree,a full stack project that handles all the social media links of a user.",
      "It displays all the links on user's handle, thus enabling them to navigate to all of their social media profiles with just one click",
    ],
    technologies: ["React", "Next.js", "MongoDB", "tailwind","Node.js"],
  },
  {
    title: "Bitlinks",
    image: project2,
    link: "-",
    code: "https://github.com/osi-102/vsp-backend",
    description: [
      "A url shortner app that helps users shortnen their url easily",
    ],
    technologies: ["Node.js", "MongoDB", "React.js", "Next.js","Tailwind"],
  },
  {
    title: "React Password Manager",
    image: project3,
    link: "https://osi-102.github.io/sokoban-game",
    code: "https://github.com/osi-102",
    description: [
      "A react app for managing and storing your passwords for various sites",
    ],
    technologies: ["Node.js", "MongoDB", "React.js","Tailwind"],
  },
  {
    title: "Twitter clone",
    image: project4,
    link: "-",
    code: "-",
    description: [
      "Developed a Frontend UI of twitter using tailwind css.",
    ],
    technologies: ["Tailwind"],
  },
];

export const CONTACT = {
  address: "Meerut, Uttar Pradesh, India",
  phoneNo: "+91 7983905066 ",
  email: "prashantpanwar584@gmail.com",
};
