import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <Code2 size={24} className={isDarkMode ? "text-white" : "text-gray-800"} />
          <span className={isDarkMode ? "text-white" : "text-gray-800"}>Sree Venkatesh</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm uppercase tracking-wider ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
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
            className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {isDarkMode ? <Sun size={18} className="text-white" /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu btn */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} className={isDarkMode ? "text-white" : "text-gray-800"} />
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className={`fixed top-0 left-0 h-full w-80 z-50 p-6 flex flex-col gap-6 shadow-2xl ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <button onClick={() => setIsMenuOpen(false)} className="self-end p-2">
              <X size={28} className={isDarkMode ? "text-white" : "text-gray-800"} />
            </button>

            <div className="flex flex-col items-start gap-6 mt-4">
              {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-lg uppercase tracking-wider font-medium ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item}
                </button>
              ))}

              <button
                onClick={toggleTheme}
                className={`flex items-center gap-3 p-3 rounded-md border transition ${
                  isDarkMode
                    ? "border-gray-700 hover:bg-gray-800"
                    : "border-gray-300 hover:bg-gray-200"
                }`}
              >
                {isDarkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
                <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
