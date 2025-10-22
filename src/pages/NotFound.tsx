// pages/NotFound.tsx
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="text-center max-w-md mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated 404 */}
        <motion.div
          className="text-9xl font-bold text-blue-600 mb-4 font-roboto"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          404
        </motion.div>

        <motion.h1
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-roboto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={() => navigate(-1)}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Home Page</span>
          </Button>
        </motion.div>

        {/* Floating medical elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-200 rounded-full opacity-50"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-red-200 rounded-full opacity-50"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-4 h-4 bg-green-200 rounded-full opacity-50"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </div>
  );
};

export default NotFound;
