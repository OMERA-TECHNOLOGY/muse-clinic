// pages/Index.tsx
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import EmergencyBanner from "../components/EmergencyBanner";
import ScrollToTop from "../components/ScrollToTop";
import LoadingScreen from "../components/LoadingScreen";
import AppointmentModal from "../components/AppointmentModal";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className="min-h-screen">
        <Header onOpenAppointmentModal={handleOpenAppointmentModal} />
        <main>
          <Hero onOpenAppointmentModal={handleOpenAppointmentModal} />
          <About />
          <Services onOpenAppointmentModal={handleOpenAppointmentModal} />
          <Doctors onOpenAppointmentModal={handleOpenAppointmentModal} />
          <Testimonials />
          <Contact onOpenAppointmentModal={handleOpenAppointmentModal} />
        </main>
        <Footer />
        <EmergencyBanner />
        <ScrollToTop />

        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
        />
      </div>
    </>
  );
};

export default Index;
