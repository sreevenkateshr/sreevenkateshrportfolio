import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";
import { Code2, Briefcase, GraduationCap, Rocket } from "lucide-react";

const AboutSection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const timelineVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const journey = [
        {
            year: "2021",
            title: "Started Coding Journey",
            subtitle: "Self-taught",
            description: "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with creating digital experiences.",
            icon: Code2,
            color: "blue",
        },
        {
            year: "2019 - 2021",
            title: "Diploma in Computer Science",
            subtitle: "DCSE",
            description: "Completed Diploma in Computer Science Engineering, building strong foundations in programming, algorithms, and software development.",
            icon: GraduationCap,
            color: "green",
        },
        {
            year: "2024",
            title: "B.E Computer Science",
            subtitle: "CSE",
            description: "Currently pursuing Bachelor of Engineering in Computer Science, deepening knowledge in advanced concepts and modern technologies.",
            icon: GraduationCap,
            color: "purple",
        },
        {
            year: "Oct 2024 - Mar 2025",
            title: "First Internship",
            subtitle: "Ordinal - 6 Months",
            description: "Joined as a frontend intern, working with React and learning modern development practices. Contributed to multiple client projects.",
            icon: Briefcase,
            color: "orange",
        },
        {
            year: "Mar 2025 - Sept 2025",
            title: "Full Stack Developer",
            subtitle: "Freelance",
            description: "Worked as a Full Stack Developer, building complete web applications with modern tech stack including React, Node.js, and MongoDB.",
            icon: Rocket,
            color: "cyan",
        },
        // {
        //     year: "Present",
        //     title: "Full Stack Developer & Digital Marketer",
        //     subtitle: "Matrix Aviation",
        //     description: "Currently working at Matrix Aviation as Full Stack Developer and Digital Marketing specialist, creating innovative solutions for the aviation industry.",
        //     icon: Rocket,
        //     color: "pink",
        // },
    ];

    const getIconColor = (color) => {
        const colors = {
            blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
            green: "text-green-500 bg-green-500/10 border-green-500/20",
            purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
            orange: "text-orange-500 bg-orange-500/10 border-orange-500/20",
            cyan: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
            pink: "text-pink-500 bg-pink-500/10 border-pink-500/20",
        };
        return colors[color] || colors.blue;
    };

    return (
        <section
            ref={sectionRef}
            id="about"
            className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
                isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
            } relative overflow-hidden`}
        >
            {/* Background elements */}
            <motion.div style={{ y }} className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
                        isDarkMode ? "bg-blue-500" : "bg-blue-400"
                    }`}
                />
                <div
                    className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
                        isDarkMode ? "bg-purple-500" : "bg-purple-400"
                    }`}
                />
            </motion.div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-12 md:mb-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className={`text-xs sm:text-sm uppercase tracking-[0.2em] ${
                            isDarkMode ? "text-gray-500" : "text-gray-600"
                        } mb-4`}
                    >
                        Get to Know Me
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-light mb-4 md:mb-6"
                    >
                        About <span className="text-blue-500 font-normal">Me</span>
                    </motion.h2>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Left Side - Mission */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        className={`p-6 md:p-8 rounded-2xl border ${
                            isDarkMode
                                ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                                : "bg-white/80 border-gray-200 backdrop-blur-sm"
                        }`}
                    >
                        <h3 className="text-2xl font-medium mb-6">My Mission</h3>
                        <div className={`space-y-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                            <p>
                                I believe technology should be a bridge that connects people and solves real-world problems. 
                                My passion lies in crafting digital experiences that are not just functional, but delightful 
                                and accessible to everyone.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new frameworks, contributing to open source, 
                                or mentoring aspiring developers. I love the constant evolution of web technologies and the 
                                endless possibilities they bring to create meaningful digital experiences.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side - What I Love Building */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        className={`p-6 md:p-8 rounded-2xl border ${
                            isDarkMode
                                ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                                : "bg-white/80 border-gray-200 backdrop-blur-sm"
                        }`}
                    >
                        <h3 className="text-2xl font-medium mb-6">What I Love Building</h3>
                        <div className="space-y-4">
                            {[
                                { title: "User Experiences", desc: "Crafting intuitive interfaces that users love" },
                                { title: "Web Applications", desc: "Building scalable and performant solutions" },
                                { title: "Responsive Designs", desc: "Creating seamless experiences across all devices" },
                                { title: "Digital Marketing", desc: "Driving growth through strategic online presence" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium mb-1">{item.title}</h4>
                                        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Developer Journey Timeline */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="mt-16 md:mt-20"
                >
                    <motion.h3
                        variants={itemVariants}
                        className="text-2xl md:text-3xl font-medium text-center mb-12"
                    >
                        My Developer Journey
                    </motion.h3>

                    <div className="relative">
                        {/* Timeline line */}
                        <div
                            className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${
                                isDarkMode ? "bg-gray-800" : "bg-gray-300"
                            } hidden sm:block`}
                        />

                        {/* Timeline items */}
                        <div className="space-y-8 md:space-y-12">
                            {journey.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={timelineVariants}
                                    className={`relative flex items-center ${
                                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 hidden sm:block">
                                        <div
                                            className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
                                                isDarkMode ? "border-gray-950" : "border-gray-50"
                                            } ${getIconColor(item.color)}`}
                                        >
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Content card */}
                                    <div
                                        className={`w-full md:w-[calc(50%-3rem)] ${
                                            index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                                        }`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -4 }}
                                            className={`p-6 rounded-xl border ${
                                                isDarkMode
                                                    ? "bg-gray-900/70 border-gray-800 hover:border-gray-700"
                                                    : "bg-white/90 border-gray-200 hover:border-gray-300"
                                            } transition-all duration-300 shadow-lg`}
                                        >
                                            {/* Mobile icon */}
                                            <div className="flex items-center mb-4 sm:hidden">
                                                <div
                                                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${getIconColor(
                                                        item.color
                                                    )}`}
                                                >
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <span
                                                    className={`text-sm font-medium ${
                                                        isDarkMode ? "text-gray-400" : "text-gray-600"
                                                    }`}
                                                >
                                                    {item.year}
                                                </span>
                                            </div>

                                            {/* Desktop year */}
                                            <div
                                                className={`text-sm font-medium mb-2 hidden sm:block ${
                                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                                }`}
                                            >
                                                {item.year}
                                            </div>

                                            <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                                            <p className="text-blue-500 text-sm font-medium mb-3">{item.subtitle}</p>
                                            <p
                                                className={`text-sm leading-relaxed ${
                                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                                }`}
                                            >
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;