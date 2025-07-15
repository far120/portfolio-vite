// Portfolio data for projects, skills, etc.
export interface Project {
  title: string;
  description: string;
  iframe?: string; // Use iframe instead of image
  github: string;
  demo?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Group of Tasks",
    description: "the Group of Tasks is a productivity app that is whither , gpaculclator amirican ,curancy , todos , movies app , series app , Dice Roller .",
    iframe: "https://groupof-tasks.vercel.app/",
    github: "https://github.com/far120/groupof-tasks", // Replace with the actual GitHub URL if available
    demo: "https://groupof-tasks.vercel.app/",
    tags: ["React", "API", "Tailwind"  , "Weather" ,  "Productivity", "Calculator", "Currency Converter", "To-Do List", "Movies App", "Series App", "Dice Roller"],
  },
  {
   title: "Show Prouduct App",
   description: "Show Prouduct App is a simple and effective product management tool.",
   iframe: "https://show-product.vercel.app/",
   github: "https://github.com/far120/show-product",
   demo: "https://show-product.vercel.app/",
   tags: ["React", "Api", "Product Management"],
 },
  {
    title: "Crud Prouduct App",
    description: "A CRUD application for managing products with a user-friendly interface.",
    iframe: "https://product-builder-project-eta.vercel.app/",
    github: "https://github.com/far120/product-builder-project",
    demo: "https://product-builder-project-eta.vercel.app/",
    tags: ["React", "CRUD", "Product Management"],
  },
  {
    title: "Task Manager with Role-Based Authentication",
    description: "A productivity app for managing tasks with secure role-based authentication.",
    iframe: "https://far-maneger.vercel.app/",
    github: "https://github.com/far120/far-maneger",
    demo: "https://far-maneger.vercel.app/",
    tags: ["React", "Node.js", "Authentication", "Productivity"],
  },
  {
    title: "E-commerce Platform Using MERN Stack",
    description: "A full-featured e-commerce platform with product management, cart, and checkout, built using the MERN stack.",
    iframe: "https://full-stack-prouduct.vercel.app/",
    github: "https://github.com/far120/full-stack-prouduct",
    demo: "https://full-stack-prouduct.vercel.app/",
    tags: ["React", "Node.js", "MongoDB", "Express", "E-commerce"],
  },
  {
    title: "A Dynamic Film Discovery Platform",
    description: "A movie app for discovering and searching films, with a modern UI and real-time data.",
    iframe: "https://elfar-movie-app.vercel.app/",
    github: "https://github.com/far120/elfar-movie-app",
    demo: "https://elfar-movie-app.vercel.app/",
    tags: ["React", "API", "Movies", "UI"],
  },
  {
    title: "User Registration Form",
    description: "A user registration form with validation and modern design.",
    iframe: "https://user-registration-form-one.vercel.app/",
    github: "https://github.com/far120/user-registration-form-one",
    demo: "https://user-registration-form-one.vercel.app/",
    tags: ["React", "Form", "Validation"],
  },
  {
    title: "TaskMaster",
    description: "A simple and effective task management tool.",
    iframe: "https://task-murex-eight.vercel.app/",
    github: "https://github.com/far120/task-murex-eight",
    demo: "https://task-murex-eight.vercel.app/",
    tags: ["React", "Productivity", "Tasks"],
  },
];

export interface Skill {
  name: string;
  icon: string; // Icon name from react-icons
}
export const aboutMe = `I'm passionate about MERN stack development and continuously expanding my knowledge. Currently pursuing studies in grade 3. Proficient in creating full-stack web applications using MongoDB, Express.js, React, and Node.js. Expertise in front-end and back-end development. Solid foundation in JavaScript and responsive design. Committed to staying up-to-date with latest technological advancements. Actively enhances problem-solving skills and technical proficiency through new projects. Thrives in collaborative environments. Eager to contribute to innovative development teams.\n\nI am currently working remotely, focusing on my personal projects and freelance work. I am open to opportunities to collaborate with other developers and teams. My goal is to contribute to the development of cutting-edge technologies and help clients achieve their goals.`;

export const workExperience = [
  {
    title: "MERN Stack - React Frontend Web Developer",
    duration: "April 2024 – October 2024",
    location: "Giza, Egypt",
    details: [
      "Developed and maintained responsive web applications using React.js, optimizing user interfaces with best practices for performance and scalability.",
      "Implemented front-end architecture with HTML5, CSS3, and JavaScript, delivering responsive designs compatible with modern browsers and devices.",
      "Integrated backend services with RESTful APIs developed in Node.js and Express, ensuring seamless communication between client and server-side logic.",
      "Utilized version control systems like Git and GitHub for collaborative development, managing code changes effectively in multi-developer environments."
    ]
  }
];

export const certifications = [
  {
    name: "HUAWEI TRAINING COURSE OF ARTIFICIAL INTELLIGENCE",
    link: "https://drive.google.com/file/d/18UEMYdy5Y7cfCfz8GYdCGy49pyxyf7X1/view?usp=sharing"
  },
  {
    name: "HUAWEI TALENT ONLINE",
    link: "https://drive.google.com/file/d/1wYayVb4NfltGgzoM6l4CNerbXZ2UQ2nF/view?usp=sharing"
  },
  {
    name: "NEW HORIZONS",
    link: "https://drive.google.com/file/d/1W4PYk6iLNOxyyQvMDgQyK50JNIzBTpfJ/view?usp=sharing"
  },
  {
    name: "Introduction to Front-End Development",
    link: "https://coursera.org/share/6795dd924b6803fc0026e3dd04b28538"
  },
  {
    name: "Introduction to Back-End Development",
    link: "https://coursera.org/share/6701eba45b7d71f0c147767121da7ccd"
  }
];

export const skills: Skill[] = [
  { name: "React", icon: "FaReact" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "Framer Motion", icon: "SiFramer" },
  // Add more skills here
];


export const skillsList = [
  "ReactJS", "Tailwind" ,"HTML5", "CSS3", "JavaScript", "NodeJS", "MongoDB", "Python", "Redux", "Bootstrap", "ExpressJS", "Git", "REST API", "C++", "Java"
];

export const projectDetails = projects.map(project => ({
  title: project.title,
  description: project.description,
  iframe: project.iframe, // Use iframe property for embedding
  github: project.github,
  demo: project.demo,
  tags: project.tags
}));

export const courses = [
  {
    title: "HUAWEI TRAINING COURSE OF ARTIFICIAL INTELLIGENCE",
    description: "A comprehensive course on artificial intelligence concepts and applications.",
    link: "https://drive.google.com/file/d/18UEMYdy5Y7cfCfz8GYdCGy49pyxyf7X1/view?usp=sharing"
  },
  {
    title: "HUAWEI TALENT ONLINE",
    description: "An online platform offering various courses and resources for skill development.",
    link: "https://drive.google.com/file/d/1wYayVb4NfltGgzoM6l4CNerbXZ2UQ2nF/view?usp=sharing"
  },
  {
    title: "NEW HORIZONS",
    description: "A global leader in IT training and certification.",
    link: "https://drive.google.com/file/d/1W4PYk6iLNOxyyQvMDgQyK50JNIzBTpfJ/view?usp=sharing"
  },
  {
    title: "Introduction to Front-End Development",
    description: "A beginner-friendly course on front-end development using HTML, CSS, and JavaScript.",
    link: "https://coursera.org/share/6795dd924b6803fc0026e3dd04b28538"
  },
  {
    title: "Introduction to Back-End Development",
    description: "A comprehensive course on back-end development using Node.js and Express.",
    link: "https://coursera.org/share/6701eba45b7d71f0c147767121da7ccd"
  },
  {
    title: "Front-End Development with MERN Specialization by DPEI",
    description: "A specialization program focusing on front-end development using the MERN stack.",
    link: "https://www.coursera.org/learn/front-end-development"
  },
  {
    title: "Front-End Development with MERN Specialization by NTI",
    description: "A specialization program focusing on front-end development using the MERN stack.",
    link: "https://www.coursera.org/learn/front-end-development"
  }
];

export const services = [
  {
    title: "E-commerce Development",
    description: "Building responsive and modern e-commerce applications using the latest technologies.",
    icon: "FaCode",
    price: "5",
  },
  {
    title: "Portfolio Development",
    description: "Creating dynamic and interactive web applications tailored to client needs.",
    icon: "FaBriefcase",
    price: "5",
  },
];

// Utility function to get a project by title
export function getProjectByTitle(title: string) {
  return projects.find(project => project.title === title);
}

// Utility function to get all project demo links
export function getAllProjectDemos() {
  return projects.map(project => project.demo).filter(Boolean);
}

