import { motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    const { isDarkMode } = useTheme();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const socialLinks = [
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    ];

    const footerLinks = [
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Work", id: "work" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <footer
            className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 ${
                isDarkMode ? "bg-gray-950 text-white border-t border-gray-800" : "bg-white text-gray-900 border-t border-gray-200"
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
                    {/* Left Side - Name & Social */}
                    <div className="text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                        >
                            Sree Venkatesh
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={`text-base md:text-lg mb-6 ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            Full Stack Developer
                        </motion.p>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-4 justify-center lg:justify-start"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                        isDarkMode
                                            ? "border-gray-700 hover:border-blue-500 hover:bg-gray-800 text-gray-400 hover:text-blue-500"
                                            : "border-gray-300 hover:border-blue-500 hover:bg-gray-50 text-gray-600 hover:text-blue-500"
                                    }`}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side - Contact */}
                    <div className="text-center lg:text-right">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-semibold mb-4"
                        >
                            Let's Talk!
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={`text-sm md:text-base mb-6 ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            I am always open to discuss your project, Start saying Hi!
                        </motion.p>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-3"
                        >
                            <motion.a
                                href="mailto:Sreevenkateshr@gmail.com"
                                whileHover={{ x: isDarkMode ? 5 : -5 }}
                                className={`flex items-center gap-3 justify-center lg:justify-end text-sm md:text-base ${
                                    isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                                } transition-colors`}
                            >
                                <Mail size={20} />
                                <span>Sreevenkateshr@gmail.com</span>
                            </motion.a>

                            <motion.a
                                href="tel:+916374926377"
                                whileHover={{ x: isDarkMode ? 5 : -5 }}
                                className={`flex items-center gap-3 justify-center lg:justify-end text-sm md:text-base ${
                                    isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                                } transition-colors`}
                            >
                                <Phone size={20} />
                                <span>+91 6374926377</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`h-px my-8 ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />

                {/* Bottom Section - Links & Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Footer Links */}
                    <motion.nav
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-4 md:gap-6 justify-center"
                    >
                        {footerLinks.map((link, index) => (
                            <motion.button
                                key={index}
                                onClick={() => scrollToSection(link.id)}
                                whileHover={{ y: -2 }}
                                className={`text-sm md:text-base transition-colors ${
                                    isDarkMode
                                        ? "text-gray-400 hover:text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                    </motion.nav>

                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}
                    >
                        © 2025 All rights reserved
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;