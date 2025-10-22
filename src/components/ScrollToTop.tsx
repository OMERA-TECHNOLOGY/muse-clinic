// components/ScrollToTop.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <Button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            // whileHover={{ scale: 1.1, y: -2 }}
            // whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
