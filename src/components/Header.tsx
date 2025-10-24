// components/Header.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onOpenAppointmentModal: () => void;
}

const Header = ({ onOpenAppointmentModal }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference and localStorage for theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "services",
        "doctors",
        "testimonials",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* Signature-style Muse logo */}
          <motion.div
            className="flex items-center space-x-2 select-none"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={`relative px-4 py-2 transition-all duration-700 ${
                isScrolled ? "bg-transparent" : "bg-transparent"
              }`}
            >
              {/* Overlapping cursive Muse text */}
              <span
                className={`text-5xl tracking-tighter font-bold italic transition-all duration-500 ${
                  isScrolled
                    ? "text-amber-700 dark:text-amber-400"
                    : "text-white"
                }`}
                style={{
                  fontFamily:
                    "'Italianno', 'Qwitcher Grypen', 'Great Vibes', cursive",
                  letterSpacing: "-0.08em", // tighter spacing to create natural overlap
                  fontWeight: 400,
                }}
              >
                Muse
              </span>

              {/* Subtle underline accent */}
              <motion.div
                className={`absolute left-3 right-3 bottom-0 h-[1.5px] rounded-full ${
                  isScrolled ? "bg-amber-600 dark:bg-amber-500" : "bg-white/70"
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Tagline */}
            <div className="flex flex-col">
              <span
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-500 ${
                  isScrolled
                    ? "text-gray-600 dark:text-gray-400"
                    : "text-amber-200"
                }`}
              >
                Muse clinic
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative px-6 py-3 font-medium transition-all duration-500 rounded-full ${
                  isScrolled
                    ? activeSection === item.name.toLowerCase()
                      ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                    : activeSection === item.name.toLowerCase()
                    ? "text-white bg-white/20 backdrop-blur-sm"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Quick Actions */}
            <motion.div className="hidden md:flex items-center space-x-3">
              <motion.button
                onClick={onOpenAppointmentModal}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-500 ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Book Now</span>
              </motion.button>

              <motion.div
                className={`flex items-center space-x-2 transition-all duration-500 ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span
                  className={`text-sm font-medium ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-white"
                  }`}
                >
                  Emergency
                </span>
              </motion.div>
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-all duration-500 ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-3 rounded-xl transition-all duration-500 ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Quick Actions */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-600 space-y-4">
                  <motion.button
                    onClick={onOpenAppointmentModal}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </motion.button>

                  <div className="flex items-center justify-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2 text-red-500">
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">Emergency</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
