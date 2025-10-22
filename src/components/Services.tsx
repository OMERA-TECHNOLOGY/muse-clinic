// components/Services.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Activity,
  Stethoscope,
} from "lucide-react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
}

interface ServicesProps {
  onOpenAppointmentModal: () => void;
}

const Services = ({ onOpenAppointmentModal }: ServicesProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      icon: Heart,
      title: "Cardiology",
      description:
        "Comprehensive heart care with advanced diagnostic and treatment technologies.",
      features: [
        "Heart Surgery",
        "Cardiac Rehabilitation",
        "Echocardiography",
        "Pacemaker Implantation",
      ],
      color: "bg-rose-500/30",
    },
    {
      icon: Brain,
      title: "Neurology",
      description:
        "Expert care for brain and nervous system disorders with cutting-edge treatments.",
      features: [
        "Brain Surgery",
        "Epilepsy Treatment",
        "Stroke Care",
        "Neurological Rehabilitation",
      ],
      color: "bg-amber-500/30",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description:
        "Advanced bone and joint care with minimally invasive surgical techniques.",
      features: [
        "Joint Replacement",
        "Sports Medicine",
        "Spinal Surgery",
        "Fracture Care",
      ],
      color: "bg-orange-500/30",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description:
        "Complete eye care services from routine checkups to complex surgeries.",
      features: [
        "Cataract Surgery",
        "LASIK",
        "Retina Care",
        "Glaucoma Treatment",
      ],
      color: "bg-sky-500/30",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description:
        "Specialized medical care for infants, children, and adolescents.",
      features: [
        "Well-child Visits",
        "Vaccinations",
        "Developmental Screening",
        "Emergency Care",
      ],
      color: "bg-emerald-500/30",
    },
  ];

  // Duplicate services for seamless scrolling
  const duplicatedServices = [...services, ...services, ...services];

  //   const containerVariants = {
  //     hidden: { opacity: 0 },
  //     visible: {
  //       opacity: 1,
  //       transition: {
  //         staggerChildren: 0.2,
  //       },
  //     },
  //   };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="text-sky-600/60 dark:text-sky-400/60">
              Medical Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by expert medical
            professionals using state-of-the-art technology and compassionate
            care.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative overflow-hidden mb-16">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1920], // Adjust based on total width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedServices.map((service: Service, index: number) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80" // Fixed width for each card
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 h-full">
                  {/* Background Gradient Effect - Slightly Visible */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}
                  />

                  {/* Icon */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map(
                        (feature: string, featureIndex: number) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                          >
                            <div
                              className={`w-2 h-2 ${service.color} opacity-60 rounded-full`}
                            />
                            <span className="text-sm">{feature}</span>
                          </li>
                        )
                      )}
                    </ul>

                    <motion.button
                      onClick={onOpenAppointmentModal}
                      className={`w-full py-3 ${service.color} text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <Activity className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient fade effects on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />
        </div>

        {/* Emergency Services Banner - Slightly More Visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-rose-500/40 to-orange-500/40 rounded-2xl p-8 text-white text-center shadow-2xl backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">24/7 Emergency Services</h3>
            <p className="text-xl text-rose-100/90 mb-6">
              Immediate medical attention when you need it most. Our emergency
              department is always ready to provide critical care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={onOpenAppointmentModal}
                className="bg-white/90 text-rose-600 px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Emergency Contact
              </motion.button>
              <motion.button
                className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Location
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
