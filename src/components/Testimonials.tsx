// components/Testimonials.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentPage, setCurrentPage] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Heart Surgery Patient",
      content:
        "The care I received at MedCare was exceptional. The staff was compassionate and the doctors were incredibly skilled. My recovery was faster than expected thanks to their comprehensive rehabilitation program.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Orthopedic Patient",
      content:
        "From diagnosis to recovery, the team at MedCare provided outstanding care. My knee replacement was a complete success and I'm back to my active lifestyle. The physical therapy team was amazing!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Pediatric Care",
      content:
        "As a mother, I trust MedCare completely with my children's health. The pediatric team is wonderful and caring. They made my daughter feel comfortable during her treatment and explained everything clearly.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Emergency Care",
      content:
        "When I had my emergency, the response time was incredible. The emergency department team was professional, efficient, and saved my life. I can't thank them enough for their quick action and expertise.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Maria Garcia",
      role: "Maternity Care",
      content:
        "The maternity ward at MedCare made my delivery experience beautiful and stress-free. The nurses were incredibly supportive and the facilities were top-notch. Thank you for the wonderful care!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Cancer Treatment",
      content:
        "The oncology department provided exceptional care during my cancer treatment. The doctors were not only skilled but also showed genuine compassion. The support system here is incredible.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const testimonialsPerPage = 1;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonial = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonial = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonial = testimonials[currentPage];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Patient{" "}
            <span className="text-amber-600 dark:text-amber-400">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our patients about their experiences and the quality care
            they received at MedCare.
          </p>
        </motion.div>

        {/* Pagination Testimonial Display */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto border border-amber-100 dark:border-amber-900/30"
        >
          <div className="text-center mb-8">
            <Quote className="w-16 h-16 text-amber-500/20 dark:text-amber-400/20 mx-auto mb-6" />

            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < currentTestimonial.rating
                      ? "text-amber-500 fill-current"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic font-light">
              "{currentTestimonial.content}"
            </p>

            <div className="flex items-center justify-center space-x-6">
              <motion.img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-amber-500/20"
                whileHover={{ scale: 1.1 }}
              />
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {currentTestimonial.name}
                </h4>
                <p className="text-amber-600 dark:text-amber-400 text-lg">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <motion.button
              onClick={prevTestimonial}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-amber-600 dark:bg-amber-400"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-amber-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-amber-100 dark:border-amber-900/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Trusted by Thousands
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Average Rating
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  50K+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Patients Served
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  98%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Success Rate
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Care Available
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
