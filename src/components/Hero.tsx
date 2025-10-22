// components/Hero.tsx
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Shield,
  Clock,
  Play,
  Star,
  Award,
  Phone,
} from "lucide-react";

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

const Hero = ({ onOpenAppointmentModal }: HeroProps) => {
  const stats = [
    {
      icon: Heart,
      number: "50,000+",
      label: "Patients Treated",
      color: "text-rose-400",
    },
    {
      icon: Shield,
      number: "25+",
      label: "Years Experience",
      color: "text-emerald-400",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Care",
      color: "text-amber-400",
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      color: "text-teal-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.80), rgba(30, 41, 59, 0.9)), url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />

        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-600/15 to-amber-500/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-4 h-4 text-amber-400 fill-current" />
            <span className="text-white text-sm font-medium">
              #1 Rated Hospital in the Region
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Your Health
            <motion.span
              className="block bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              Our Priority
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Experience world-class healthcare with cutting-edge technology,
            compassionate professionals, and personalized treatment plans.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              onClick={onOpenAppointmentModal}
              className="group relative bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-12 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-3 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="group relative border-2 border-white/80 text-white hover:bg-white/10 hover:border-white px-12 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Tour</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center group cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon
                  className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Emergency Button */}
      <motion.button
        onClick={onOpenAppointmentModal}
        className="fixed right-8 bottom-8 z-50 bg-gradient-to-r from-rose-600 to-orange-600 text-white p-4 rounded-2xl shadow-2xl flex items-center space-x-3 group hover:shadow-3xl transition-all duration-300"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Phone className="w-6 h-6" />
        <span className="font-semibold">Emergency</span>
      </motion.button>
    </section>
  );
};

export default Hero;
