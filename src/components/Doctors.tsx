// components/Doctors.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Star,
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  Heart,
  Brain,
  Eye,
  Bone,
  Stethoscope,
} from "lucide-react";

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  education: string;
  image: string;
  achievements: string[];
  phone: string;
  email: string;
  location: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface DoctorsProps {
  onOpenAppointmentModal: () => void;
}

const Doctors = ({ onOpenAppointmentModal }: DoctorsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const doctors: Doctor[] = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15 Years",
      rating: 4.9,
      education: "Harvard Medical School",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievements: [
        "Board Certified Cardiologist",
        "Published 50+ Research Papers",
        "Heart Surgery Specialist",
        "Cardiac Rehabilitation Expert",
      ],
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@medcare.com",
      location: "Cardiology Wing, Floor 3",
      icon: Heart,
      color: "text-red-500",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12 Years",
      rating: 4.8,
      education: "Johns Hopkins University",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievements: [
        "Brain Surgery Expert",
        "Stroke Treatment Specialist",
        "Research Director",
        "Epilepsy Care",
      ],
      phone: "+1 (555) 123-4568",
      email: "michael.chen@medcare.com",
      location: "Neurology Department, Floor 4",
      icon: Brain,
      color: "text-indigo-500",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10 Years",
      rating: 4.9,
      education: "Stanford Medical School",
      image:
        "https://images.unsplash.com/photo-1594824475317-29bb4b71e3d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievements: [
        "Child Development Expert",
        "Pediatric Emergency Care",
        "Community Health Advocate",
        "Vaccination Specialist",
      ],
      phone: "+1 (555) 123-4569",
      email: "emily.rodriguez@medcare.com",
      location: "Pediatrics Wing, Floor 2",
      icon: Award,
      color: "text-pink-500",
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "18 Years",
      rating: 4.7,
      education: "Mayo Clinic College",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievements: [
        "Joint Replacement Specialist",
        "Sports Medicine Expert",
        "Minimally Invasive Surgery",
        "Fracture Care",
      ],
      phone: "+1 (555) 123-4570",
      email: "james.wilson@medcare.com",
      location: "Orthopedics Department, Floor 5",
      icon: Bone,
      color: "text-amber-500",
    },
    {
      name: "Dr. Lisa Thompson",
      specialty: "Ophthalmologist",
      experience: "14 Years",
      rating: 4.8,
      education: "UCLA Medical Center",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievements: [
        "LASIK Surgery Expert",
        "Retinal Specialist",
        "Cataract Surgery Pioneer",
        "Glaucoma Treatment",
      ],
      phone: "+1 (555) 123-4571",
      email: "lisa.thompson@medcare.com",
      location: "Eye Care Center, Floor 1",
      icon: Eye,
      color: "text-blue-500",
    },
    {
      name: "Dr. Robert Kim",
      specialty: "Internal Medicine",
      experience: "20 Years",
      rating: 4.9,
      education: "Columbia University",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievements: [
        "Primary Care Excellence",
        "Chronic Disease Management",
        "Preventive Medicine Leader",
        "Health Screening",
      ],
      phone: "+1 (555) 123-4572",
      email: "robert.kim@medcare.com",
      location: "Internal Medicine, Floor 2",
      icon: Stethoscope,
      color: "text-emerald-500",
    },
  ];

  const stats = [
    { number: "150+", label: "Expert Doctors", icon: Award },
    { number: "25+", label: "Medical Specialties", icon: Star },
    { number: "50,000+", label: "Patients Treated", icon: Heart },
    { number: "98%", label: "Success Rate", icon: GraduationCap },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="doctors"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-200/50 dark:border-blue-700/30 shadow-lg"
          >
            <Star className="w-5 h-5 text-amber-500 fill-current" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              World-Class Medical Team
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6 font-roboto">
            Meet Our{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text">
              Medical Experts
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our team of board-certified physicians and specialists are dedicated
            to providing exceptional medical care with compassion, expertise,
            and cutting-edge technology.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {doctors.map((doctor: Doctor, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Doctor Image Header */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Specialty Badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`${doctor.color.replace(
                      "text",
                      "bg"
                    )} rounded-lg px-3 py-1 flex items-center space-x-2 shadow-lg`}
                  >
                    <doctor.icon className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">
                      {doctor.specialty}
                    </span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {doctor.rating}
                  </span>
                </div>

                {/* Experience */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {doctor.experience}
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-roboto">
                  {doctor.name}
                </h3>

                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <GraduationCap className="w-4 h-4 flex-shrink-0" />
                  <span className="line-clamp-1">{doctor.education}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{doctor.location}</span>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 font-roboto">
                    Specializations:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.achievements.slice(0, 2).map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                    {doctor.achievements.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{doctor.achievements.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={onOpenAppointmentModal}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </motion.button>

                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium transition-colors duration-300 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Profile
                    </motion.button>
                    <motion.button
                      className="bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/30 text-blue-700 dark:text-blue-300 py-2 rounded-lg font-medium transition-colors duration-300 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-r from-blue-600/20 via-blue-700/20 to-blue-800/20 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8">
            {/* Animated Orbs */}
            <motion.div
              className="absolute top-0 left-0 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/30 rounded-full blur-xl"
              animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10 bg-white/10 dark:bg-slate-900/20 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="space-y-4 group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto shadow-2xl border border-white/20 group-hover:from-white/40 group-hover:to-white/20 transition-all duration-500">
                      <stat.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg font-roboto">
                      {stat.number}
                    </div>
                    <div className="text-white/90 font-semibold text-lg drop-shadow tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-center mt-8 pt-6 border-t border-white/20"
              >
                <p className="text-white/80 text-lg mb-4">
                  Join thousands of satisfied patients
                </p>
                <motion.button
                  onClick={onOpenAppointmentModal}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 font-roboto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Appointment Today
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;
