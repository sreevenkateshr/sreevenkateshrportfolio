import {
    motion, 
    useScroll, 
    useTransform,
} from "framer-motion";
import {
    Mail,
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../Context/ThemeContext";
import PROFILE_PIC from "../../assets/images/dp.jpg";

const HeroSection = () => {
    const { isDarkMode } = useTheme();

    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, -100]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
            },
        },
    };

    return (
        <div
            className={`min-h-screen transition-all duration-500 ${
                isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
            }`}
        >
            <motion.section
                id="home"
                style={{ y: heroY }}
                className="relative overflow-hidden min-h-screen flex items-center"
            >
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className={`absolute top-20 right-20 w-64 h-64 rounded blur-3xl opacity-10 ${
                            isDarkMode ? "bg-blue-500" : "bg-blue-400"
                        }`}
                    />

                    <motion.div
                        animate={{
                            scale: [1.1, 1, 1.1],
                            rotate: [360, 180, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className={`absolute bottom-20 left-20 w-28 h-48 rounded-full blur-3xl opacity-10 ${
                            isDarkMode ? "bg-purple-500" : "bg-purple-400"
                        }`}
                    />
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto"
                    >
                        {/* Left Side - Content */}
                        <div className="order-2 lg:order-1 text-center lg:text-left">
                            {/* Label */}
                            <motion.div
                                variants={textVariants}
                                className={`text-xs sm:text-sm uppercase tracking-widest ${
                                    isDarkMode ? "text-gray-500" : "text-gray-600"
                                } mb-4 lg:mb-6`}
                            >
                                Full Stack Developer
                            </motion.div>

                            {/* Heading */}
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight"
                            >
                                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                                    Building Digital
                                </span>
                                <br />
                                <span className={`bg-gradient-to-r ${
                                    isDarkMode 
                                        ? "from-blue-400 to-purple-500" 
                                        : "from-blue-600 to-purple-600"
                                } bg-clip-text text-transparent`}>
                                    That Matter
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={itemVariants}
                                className={`text-sm sm:text-base lg:text-lg ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                } mb-6 lg:mb-8 max-w-xl lg:max-w-none font-light leading-relaxed mx-auto lg:mx-0`}
                            >
                                I craft Beautiful, Functional web applications with modern technology and thoughtful user experience
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 lg:mb-10"
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("work")}
                                    className={`${
                                        isDarkMode
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : "bg-blue-500 hover:bg-blue-600"
                                    } text-white px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}
                                >
                                    View Work
                                </motion.button>
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("contact")}
                                    className={`border ${
                                        isDarkMode
                                            ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800"
                                            : "border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-100"
                                    } px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                                >
                                    Get in Touch
                                </motion.button>
                            </motion.div>

                            {/* Social Media */}
                            <motion.div
                                variants={itemVariants}
                                className="flex gap-3 sm:gap-4 justify-center lg:justify-start mb-6 lg:mb-8"
                            >
                                {[
                                    { icon: FiGithub, href: "#", label: "GitHub" },
                                    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
                                    { icon: Mail, href: "#", label: "Email" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className={`p-2 sm:p-3 rounded-full transition-colors ${
                                            isDarkMode
                                                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                                        }`}
                                    >
                                        <social.icon size={18} className="sm:w-5 sm:h-5" />
                                    </motion.a>
                                ))}
                            </motion.div>

                            {/* Tech Stack */}
                            <motion.div
                                variants={itemVariants}
                                className="text-xs sm:text-sm flex flex-wrap gap-1 sm:gap-2 justify-center lg:justify-start items-center"
                            >
                                {["React", "Tailwind", "Node.js", "MongoDB"].map((tech, index) => (
                                    <span key={tech} className="flex items-center gap-1 sm:gap-2">
                                        <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>
                                            {tech}
                                        </span>
                                        {index < 3 && (
                                            <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>
                                                •
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right Side - Profile Image */}
                        <motion.div 
                            variants={imageVariants} 
                            className="order-1 lg:order-2 flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-sm lg:max-w-md">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`w-full aspect-square rounded-2xl lg:rounded-3xl overflow-hidden border-4 ${
                                        isDarkMode ? "border-gray-800" : "border-gray-300"
                                    } shadow-2xl`}
                                >
                                    <img
                                        src={PROFILE_PIC}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                {/* Decorative ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className={`absolute -inset-2 lg:-inset-3 rounded-2xl lg:rounded-3xl border-2 border-dashed ${
                                        isDarkMode ? "border-blue-500/30" : "border-blue-400/30"
                                    }`}
                                />

                                {/* Decorative gradient blob */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-3xl ${
                                        isDarkMode ? "bg-blue-600/20" : "bg-blue-400/20"
                                    }`}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default HeroSection;