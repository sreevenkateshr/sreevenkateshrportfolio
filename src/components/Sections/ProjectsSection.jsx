import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
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
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const projects = [
        {
            id: 1,
            title: "Studio.in",
            subtitle: "Photography Studio Website",
            description: "Professional photography studio website with portfolio gallery, booking system, and client management features.",
            tags: ["React", "Tailwind", "Framer Motion", "Node.js"],
            category: "Full Stack",
            featured: true,
            liveUrl: "#",
            githubUrl: "#",
            image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
        },
        {
            id: 2,
            title: "SnappyTimes Photography",
            subtitle: "Event Photography Platform",
            description: "Modern photography website featuring dynamic galleries, online booking, and real-time availability checking.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            category: "Full Stack",
            featured: true,
            liveUrl: "#",
            githubUrl: "#",
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
        },
        {
            id: 3,
            title: "Paperboat Photography",
            subtitle: "Creative Portfolio Website",
            description: "Elegant portfolio website for wedding and event photography with customizable packages and inquiry forms.",
            tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
            category: "Full Stack",
            featured: false,
            liveUrl: "#",
            githubUrl: "#",
            image: "https://images.unsplash.com/photo-1606016159991-7ea8a0ba5b79?w=800&h=600&fit=crop",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="projects"
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

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className={`text-xs sm:text-sm uppercase tracking-[0.2em] ${
                            isDarkMode ? "text-gray-500" : "text-gray-600"
                        } mb-4`}
                    >
                        Featured Work
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-light mb-4 md:mb-6"
                    >
                        Recent <span className="text-blue-500 font-normal">Projects</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className={`text-base md:text-lg ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                        } max-w-3xl mx-auto font-light px-4`}
                    >
                        A collection of projects that showcase my expertise in building modern web
                        applications and solving complex problems.
                    </motion.p>
                </motion.div>

                {/* Projects Grid - 3 columns */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className={`group relative rounded-2xl overflow-hidden ${
                                isDarkMode
                                    ? "bg-gray-900 border border-gray-800"
                                    : "bg-white border border-gray-200"
                            } shadow-lg hover:shadow-2xl transition-all duration-300`}
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">
                                        Featured
                                    </span>
                                </div>
                            )}

                            {/* Category Badge */}
                            <div className="absolute top-4 right-4 z-10">
                                <span
                                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                                        isDarkMode
                                            ? "bg-gray-800/80 text-blue-400 border border-gray-700"
                                            : "bg-white/80 text-blue-600 border border-gray-200"
                                    } backdrop-blur-sm`}
                                >
                                    {project.category}
                                </span>
                            </div>

                            {/* Project Image */}
                            <div className="relative h-48 sm:h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className={`absolute inset-0 ${
                                        isDarkMode
                                            ? "bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
                                            : "bg-gradient-to-t from-white via-white/50 to-transparent"
                                    }`}
                                />
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-blue-500 font-medium mb-3">
                                    {project.subtitle}
                                </p>
                                <p
                                    className={`text-sm mb-4 leading-relaxed ${
                                        isDarkMode ? "text-gray-400" : "text-gray-600"
                                    }`}
                                >
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 text-xs rounded-full ${
                                                isDarkMode
                                                    ? "bg-gray-800 text-gray-400"
                                                    : "bg-gray-100 text-gray-600"
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <motion.a
                                        href={project.liveUrl}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors flex-1 justify-center"
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </motion.a>
                                    <motion.a
                                        href={project.githubUrl}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center gap-2 px-4 py-2 border ${
                                            isDarkMode
                                                ? "border-gray-700 hover:bg-gray-800 text-gray-300"
                                                : "border-gray-300 hover:bg-gray-100 text-gray-700"
                                        } text-sm rounded-lg transition-colors`}
                                    >
                                        <Github size={16} />
                                        Code
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-3 border-2 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                            isDarkMode
                                ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-900"
                                : "border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;