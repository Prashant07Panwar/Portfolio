import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";


export const HERO_CONTENT = `I’m a passionate Full Stack Developer skilled in building dynamic and efficient web applications. From crafting responsive frontends to optimizing backend performance, I enjoy solving complex challenges and turning ideas into impactful solutions. Let’s connect and collaborate!`;

export const ABOUT_TEXT = [
  `I’m a passionate Full Stack Developer. I completed my graduation in Information Technology.
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

export const EXPIERENCE = [
  {
    year: "March 2025 - April 2025",
    role: "ReactJS Developer Intern",
    company: "Indolike",
    description: [
      `Currently Working.`,
    ]
  }
//   {
//     year: "Jan, 2024 - July, 2024",
//     role: "Full Stack Intern",
//     company:
//       "Cehpoint E-Learning And Cyber Security, Kolkata, West Bengal, India",
//     description: [
//       `Boosted user engagement by 25% with an interactive website, fostering efficient hiring practices for developers and
//  employers while providing a user-friendly environment for project execution.`,
//       `Orchestrated the development of an interactive freelancer platform, integrating cutting-edge technologies like
//  React.js and Tailwind CSS. Crafted an engaging assessment page with user-centric design, enhancing the hiring
//  process and user experience.`,
//     ],
//     technologies: [
//       "Javascript",
//       "HTML",
//       "CSS",
//       "React.js",
//       "Node.js",
//       "MongoDB",
//     ],
//   },
];

export const PROJECTS = [
  {
    title: "Linktree",
    image: project1,
    link: "https://linktree-nine-livid.vercel.app/",
    code: "https://github.com/Prashant07Panwar/linktree.git",
    description: [
      "Linktree, a full-stack web application that allows users to create and manage a personalized landing page with links to all their social media profiles or important sites. This project helps users streamline their online presence with a single, shareable link.",
    ],
    technologies: ["Next.js","React", "MongoDB", "tailwind","Node.js"],
  },
  {
    title: "Bitlinks",
    image: project2,
    link: "https://bitlinks-url-shortner-app.vercel.app/",
    code: "https://github.com/Prashant07Panwar/urlshortner.git",
    description: [
      "Bitlinks, a full-stack web application that allows users to shorten long URLs for easier sharing and navigation. This project enhances link management and provides a seamless user experience.",
    ],
    technologies: ["Next.js", "React", "Tailwind", "MongoDB", "Node.js"],
  },
  {
    title:"Buy-me-a-tea",
    image: project3,
    link: "https://github.com/Prashant07Panwar/buymeatea.git",
    code: "https://github.com/Prashant07Panwar/buymeatea.git",
    description: [
      "A Patreon-like platform in which users can fund their favorite creators. NextAuth is used for authentication and Razorpay is used for secure and easy  payments.",
    ],
    technologies: ["Node.js","MongoDB","Mongoose","React","Next.js","Tailwind"],
  },
  {
    title: "Twitter clone",
    image: project4,
    link: "https://cloneetwitter2.netlify.app/",
    code: "https://github.com/Prashant07Panwar/Tailwind.git",
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
