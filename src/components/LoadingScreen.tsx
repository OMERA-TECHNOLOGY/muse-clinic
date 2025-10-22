// components/LoadingScreen.tsx
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center text-white">
        <motion.div
          className="relative mb-8"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-16 h-16" />
          <motion.div
            className="absolute inset-0 bg-white rounded-full opacity-20"
            animate={{ scale: [1, 2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.h1
          className="text-4xl font-bold mb-4 font-roboto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          MedCare Hospital
        </motion.h1>

        <motion.p
          className="text-xl opacity-80 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Loading Excellence in Healthcare...
        </motion.p>

        <motion.div
          className="w-32 h-1 bg-white/30 rounded-full mx-auto overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="h-full bg-white rounded-full"
            animate={{ x: [-128, 128] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
