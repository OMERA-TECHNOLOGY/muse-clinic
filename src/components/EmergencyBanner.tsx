// components/EmergencyBanner.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Clock, X } from "lucide-react";
import { useState } from "react";

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6 shadow-2xl backdrop-blur-sm border border-red-400/20 max-w-sm"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-red-200 hover:text-white transition-colors duration-300"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1 font-roboto">
              Emergency Help
            </h3>
            <p className="text-red-100 text-sm mb-2">24/7 Available</p>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>Immediate Response</span>
            </div>
          </div>
        </div>

        <motion.button
          className="w-full mt-4 bg-white text-red-600 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Phone className="w-4 h-4" />
          <span>Call 911</span>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default EmergencyBanner;
