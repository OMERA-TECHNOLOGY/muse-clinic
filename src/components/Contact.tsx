// components/Contact.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { toast } from "sonner";

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string;
  subtitle: string;
  color: string;
}

interface ContactProps {
  onOpenAppointmentModal: () => void;
}

const Contact = ({ onOpenAppointmentModal }: ContactProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      details: "+1 (555) 911-HELP",
      subtitle: "24/7 Emergency Services",
      color: "text-red-500/70",
    },
    {
      icon: Phone,
      title: "General Inquiries",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri: 8AM-6PM",
      color: "text-sky-500/30",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@medcare.com",
      subtitle: "We reply within 24 hours",
      color: "text-emerald-500/70",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Healthcare Ave",
      subtitle: "Medical District, City 12345",
      color: "text-amber-500/70",
    },
  ];

  const services: string[] = [
    "General Consultation",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Ophthalmology",
    "Dental Care",
    "Emergency Care",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success(
      "Message sent successfully! We'll get back to you within 24 hours."
    );

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get In{" "}
            <span className="text-sky-500/30 dark:text-sky-400/30">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to take the next step in your healthcare journey? Contact us
            today to schedule an appointment or get answers to your questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info: ContactInfo, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        info.color === "text-red-500/70"
                          ? "bg-red-500/5"
                          : info.color === "text-sky-500/30"
                          ? "bg-sky-500/3"
                          : info.color === "text-emerald-500/70"
                          ? "bg-emerald-500/5"
                          : "bg-amber-500/5"
                      }`}
                    >
                      <info.icon
                        className={`w-6 h-6 ${
                          info.color === "text-red-500/70"
                            ? "text-red-500/70"
                            : info.color === "text-sky-500/30"
                            ? "text-sky-500/30"
                            : info.color === "text-emerald-500/70"
                            ? "text-emerald-500/70"
                            : "text-amber-500/70"
                        }`}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                        {info.title}
                      </h4>
                      <p className="text-gray-900 dark:text-gray-100 font-medium text-base">
                        {info.details}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {info.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-sky-500/10 to-amber-500/10 rounded-2xl p-6 text-gray-900 dark:text-white shadow-xl border border-gray-200 dark:border-gray-600"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-sky-500/50" />
                <h3 className="text-xl font-bold">Operating Hours</h3>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center font-bold text-gray-900 dark:text-white pt-3 border-t border-gray-300 dark:border-gray-500">
                  <span>Emergency Services:</span>
                  <span>24/7 Available</span>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl p-8 h-64 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-12 h-12 text-sky-500/30 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Our Location
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                123 Healthcare Ave, Medical District
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                City, State 12345
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-700/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-emerald-500/70 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We'll contact you within 24 hours to respond to your inquiry.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name *
                    </Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="contact-name"
                        required
                        className="pl-10 bg-white dark:bg-gray-600/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address *
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        className="pl-10 bg-white dark:bg-gray-600/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="contact-phone"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="contact-phone"
                        type="tel"
                        className="pl-10 bg-white dark:bg-gray-600/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="contact-service"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Service Interested In
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2 bg-white dark:bg-gray-600/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                        {services.map((service: string, index: number) => (
                          <SelectItem
                            key={index}
                            value={service.toLowerCase()}
                            className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message *
                  </Label>
                  <div className="relative mt-2">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Textarea
                      id="contact-message"
                      required
                      className="pl-10 min-h-[150px] bg-white dark:bg-gray-600/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-sky-500/30 hover:bg-sky-500/40 text-gray-800 dark:text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl border border-sky-500/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>

                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Or{" "}
                    <button
                      type="button"
                      onClick={onOpenAppointmentModal}
                      className="text-sky-500/70 hover:text-sky-500/90 font-semibold underline"
                    >
                      book an appointment directly
                    </button>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
