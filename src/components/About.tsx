// components/About.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Heart, Stethoscope, Shield, Clock } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        ease: [0.22, 0.84, 0.21, 0.98],
      },
    },
  };

  const features: Feature[] = [
    {
      icon: Award,
      title: "Award-Winning Care",
      description:
        "Recognized nationally for excellence in patient care and medical innovation with 25+ awards.",
      color: "bg-amber-500",
    },
    {
      icon: Users,
      title: "Expert Medical Team",
      description:
        "150+ board-certified physicians and specialists dedicated to your health and well-being.",
      color: "bg-blue-500",
    },
    {
      icon: Heart,
      title: "Patient-Centered Approach",
      description:
        "Compassionate care treating every patient with dignity, respect, and personalized attention.",
      color: "bg-red-500",
    },
    {
      icon: Stethoscope,
      title: "Advanced Technology",
      description:
        "State-of-the-art medical equipment and cutting-edge treatment methods for accurate diagnoses.",
      color: "bg-emerald-500",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Rigorous safety protocols and hygiene standards ensuring your complete protection.",
      color: "bg-indigo-500",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock emergency services and continuous patient monitoring systems.",
      color: "bg-cyan-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-roboto"
          >
            About{" "}
            <span className="text-blue-600 dark:text-blue-400">MedCare</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            For over 25 years, MedCare Hospital has been at the forefront of
            medical excellence, providing comprehensive healthcare services with
            an unwavering commitment to innovation, compassion, and community
            wellness.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-roboto">
                Our Mission & Vision
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We are dedicated to providing exceptional healthcare services
                that significantly improve the quality of life for our patients
                and their families. Our mission is to deliver personalized,
                compassionate care using the latest medical technologies and
                evidence-based practices.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Every day, we strive to exceed expectations by fostering a
                healing environment where patients feel valued, respected, and
                cared for by our dedicated team of healthcare professionals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white font-roboto">
                    Patient Care
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Your health comes first
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white font-roboto">
                    Quality
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Highest standards
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern hospital interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Animated Stats Overlay */}
              <motion.div
                className="absolute bottom-6 left-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="text-2xl font-semibold mb-2 font-roboto">
                  Modern Facilities
                </h4>
                <p className="text-gray-200 max-w-md">
                  State-of-the-art medical equipment and comfortable patient
                  rooms designed for optimal recovery
                </p>
              </motion.div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1 font-roboto">
                  98%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Patient Satisfaction
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1 font-roboto">
                  25+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature: Feature, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Animated Background */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 ${feature.color} opacity-10 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-roboto">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
