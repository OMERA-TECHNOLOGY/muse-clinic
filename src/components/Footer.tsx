// components/Footer.tsx
import { motion } from "framer-motion";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Star,
  Shield,
  Clock,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      "Emergency Care",
      "Cardiology",
      "Neurology",
      "Pediatrics",
      "Orthopedics",
      "Ophthalmology",
      "Dental Care",
      "Internal Medicine",
    ],
    quickLinks: [
      "About Us",
      "Our Doctors",
      "Appointments",
      "Patient Portal",
      "Insurance",
      "Careers",
      "News & Events",
      "Testimonials",
    ],
    resources: [
      "Health Tips",
      "Medical Records",
      "Patient Rights",
      "Privacy Policy",
      "Terms of Service",
      "Contact Us",
      "FAQ",
      "Support",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  ];

  const features = [
    { icon: Star, text: "Award Winning Care" },
    { icon: Shield, text: "Certified Professionals" },
    { icon: Clock, text: "24/7 Emergency Services" },
    { icon: Heart, text: "Patient Centered Approach" },
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
    hidden: { y: 20, opacity: 0 },
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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Banner */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center space-x-3 p-4 bg-white/5 rounded-2xl backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-gray-200">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <span className="text-2xl font-bold font-roboto">MedCare</span>
                <p className="text-blue-400 text-sm">
                  Hospital & Research Center
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Providing excellence in healthcare for over 25 years. Your health
              and well-being are our top priorities. Trusted by thousands of
              patients.
            </p>

            <div className="space-y-3">
              <motion.a
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </motion.a>
              <motion.a
                href="mailto:info@medcare.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@medcare.com</span>
              </motion.a>
              <motion.div
                className="flex items-center space-x-3 text-gray-300 group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Healthcare Ave, Medical District</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white font-roboto">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service: string, index: number) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{service}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white font-roboto">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link: string, index: number) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white font-roboto">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map(
                  (resource: string, index: number) => (
                    <li key={index}>
                      <motion.a
                        href="#"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span>{resource}</span>
                      </motion.a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
              <h4 className="font-semibold mb-3 text-white font-roboto">
                Health Newsletter
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Get health tips and updates delivered to your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-xl transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2 font-roboto">
                24/7 Emergency Services
              </h3>
              <p className="text-red-100">
                Life-threatening emergencies require immediate attention. Don't
                wait - our emergency team is always ready.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call 911 Now</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Emergency Info
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MedCare Hospital. All rights reserved. | Licensed
              Healthcare Provider
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
