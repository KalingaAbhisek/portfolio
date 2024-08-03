import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandX, IconBrandYoutube, IconBrandWhatsapp } from "@tabler/icons-react";
const Info = {
    name: "Kalinga Abhisek",
    stack: ["Software Engineer - 1 at TraceLink", "Full Stack Developer", "Programmer"],
    bio: "I’m a software engineer with 1 year of experience in designing and developing solutions using JavaScript and Java. Skilled in full-stack development and agile methodologies, I excel in dynamic environments and am passionate about solving complex problems and driving success. Always eager to learn and embrace new challenges."
}

const ProjectInfo = [
    {
        title: "Sahayata",
        desc: "Sahayata is an all-around collection of academic resources, semester-wise study materials, coding contest tracker, roadmap provider, job/internship opportunities finder, and much more made specifically for CSE/IT students.",
        image: "sahayata.png",
        live: true,
        technologies: ["React", "Express", "Node", "Cascading Style Sheets (CSS)", "Firebase", "Postman", "MongoDB", "REST APIs", "GitHub"],
        link: "https://sahayata-app-1.web.app/",
        github: "https://github.com/KalingaAbhisek/Sahayata"
    },
    {
        title: "URL Shortener",
        desc: "Shorten any Long URL with this webapp.",
        image: "url_shortener.png",
        live: true,
        technologies: ["React", "Firebase", "Material UI", "Cloud Firestore", "GitHub"],
        link: "https://kalin.ga",
        github: "https://github.com/KalingaAbhisek/url-shortener"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]
const socialLinks = [
    { link: "https://github.com/KalingaAbhisek", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/kalingaabhisek", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/kalinga_abhisek", icon: IconBrandInstagram }, 
    { link: "https://www.x.com/kalinga_abhisek", icon: IconBrandX },
    { link: "https://www.youtube.com/@KalingaAbhisek", icon: IconBrandYoutube },
    { link: "https://api.whatsapp.com/send/?phone=%2B918658908582&text&type=phone_number&app_absent=0", icon: IconBrandWhatsapp },
    { link: "https://www.leetcode.com/u/kalinga", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Software Engineer - 1",
        company: "TraceLink",
        date: "July 2024 - Present",
        desc: "Developed UI and integrated backend for some features such as Audit Trail and My Company Profile. Designed and developed notification feature for file export and import in B2B Integrations to enhance user experience. Developed solutions for uploading files and downloading files to and from AWS S3 bucket. Worked closely with product managers, UI/UX designers, and QA teams to deliver high-quality features and ensure seamless integration.",
        skills: ["React", "Javascript", "GraphQL", "AWS", "Jenkins", "JIRA", "Postman"]
    },
    {
        role: "Software Engineer Intern",
        company: "TraceLink",
        date: "Mar 2024 - June 2024",
        desc: "Conducted rigorous UI testing on Life Science Cloud (LSC) platform for various applications including SNX, SNM and PIE. Designed and developed user interface for Audit Trail Records in Opus, ensuring compliance with industry standards. Integrated GraphQL queries with frontend for seamless data retrieval. Maintained adherence to industry-standard coding practices throughout development process.",
        skills: ["React", "Javascript", "GraphQL", "AWS", "Jenkins", "JIRA", "Postman"]
    },
    {
        role: "Software Engineer Intern",
        company: "Autodesk",
        date: "July 2023 - Dec 2023",
        desc: "I collaborated with cross-functional team to enhance Fusion 360 and Fusion Teams. Developed new features using React and TypeScript which improved user experience. Optimized and fixed unit test cases and integration test cases with Jest which improved performance and accuracy. Optimized Fusion Teams performance by 15%, employing strategic enhancements and efficient coding practices. Participated in code reviews and contributed to the software development life cycle.",
        skills: ["React", "Typescript", "Splunk", "Jenkins", "Jest", "JIRA", "Cypress"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };