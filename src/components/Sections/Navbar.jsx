import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b
          ${
            isDarkMode
              ? "bg-gray-950/80 border-gray-800"
              : "bg-gray-50/80 border-gray-200"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <Code2 size={24} className={isDarkMode ? "text-white" : "text-gray-800"} />
            <span
              className={`font-semibold text-lg ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Sree Venkatesh
            </span>
          </motion.div>

          {/* ===== Desktop Navigation ===== */}
          <div className="hidden md:flex items-center gap-6">
            {["home", "skills", "work", "about", "contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-wider transition-colors
                  ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {item}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-white" />
              ) : (
                <Moon size={18} className="text-black" />
              )}
            </motion.button>
          </div>

          {/* ===== Mobile Menu Icon ===== */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu
              size={24}
              className={isDarkMode ? "text-white" : "text-gray-800"}
            />
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE SIDE BAR ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed top-0 right-0 h-full w-64 z-50 md:hidden
                ${
                  isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }
                border-l border-gray-200 dark:border-gray-800
                px-6 py-6 flex flex-col`}
            >
              {/* Close */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="self-end mb-8"
              >
                <X size={22} />
              </button>

              {/* Links */}
              <div className="flex flex-col gap-6">
                {["home", "skills", "work", "about", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="uppercase text-sm tracking-wider text-left
                      hover:text-blue-500 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <div className="mt-auto pt-6 border-t border-gray-300 dark:border-gray-700 flex items-center justify-between">
                <span className="text-xs opacity-70">Theme</span>
                <button onClick={toggleTheme}>
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
