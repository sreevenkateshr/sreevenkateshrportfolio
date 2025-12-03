import { Code2, Server, Smartphone, Database } from "lucide-react";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "React", level: 95, color: "bg-blue-500" },
            { name: "TypeScript", level: 90, color: "bg-blue-400" },
            { name: "Next.js", level: 88, color: "bg-gray-800" },
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
            { name: "Framer Motion", level: 85, color: "bg-pink-500" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Node.js", level: 90, color: "bg-green-500" },
            { name: "Express", level: 88, color: "bg-gray-700" },
            { name: "Python", level: 85, color: "bg-yellow-500" },
            { name: "GraphQL", level: 80, color: "bg-pink-600" },
            { name: "REST APIs", level: 92, color: "bg-orange-500" },
        ],
    },
    {
        title: "Mobile",
        icon: Smartphone,
        description: "Deploying and scaling applications",
        skills: [
            { name: "Docker", level: 82, color: "bg-blue-600" },
            { name: "AWS", level: 78, color: "bg-orange-600" },
            { name: "Vercel", level: 90, color: "bg-gray-900" },
            { name: "Git", level: 95, color: "bg-orange-700" },
            { name: "CI/CD", level: 75, color: "bg-purple-600" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing data storage",
        skills: [
            { name: "MongoDB", level: 88, color: "bg-green-600" },
            { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
            { name: "Redis", level: 80, color: "bg-red-600" },
            { name: "Firebase", level: 82, color: "bg-yellow-600" },
            { name: "Prisma", level: 78, color: "bg-indigo-600" },
        ],
    },
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Figma",
    "Adobe XD",
    "Notion",
    "Slack",
];

export const STATS = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
];

// export const PROJECTS = [
//     {
//         id: 1,
//         title: "E-Commerce Platform",
//         description: "A full-stack e-commerce solution with advanced filtering, payment integration",
//         image: PROJECT_IMG_1,
//         tags: ["React", "Tailwind", "Framer Motion"],
//         liveUrl: "#",
//         githubUrl: "#",
//         featured: false,
//     },
//     // Add more projects as needed
// ];