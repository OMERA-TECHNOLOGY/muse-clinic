// components/AppointmentModal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
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
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Appointment request submitted! We'll contact you within 24 hours."
    );
    onClose();
  };

  const services = [
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-2xl font-roboto">
            <span>Schedule an Appointment</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  required
                  className="pl-10"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  required
                  className="pl-10"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <div className="relative mt-2">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  className="pl-10"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="service" className="text-sm font-medium">
                Service Needed
              </Label>
              <Select>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service: string, index: number) => (
                    <SelectItem key={index} value={service.toLowerCase()}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="text-sm font-medium">
                Preferred Date
              </Label>
              <div className="relative mt-2">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input id="date" type="date" className="pl-10" />
              </div>
            </div>

            <div>
              <Label htmlFor="time" className="text-sm font-medium">
                Preferred Time
              </Label>
              <div className="relative mt-2">
                <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input id="time" type="time" className="pl-10" />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">
              Message
            </Label>
            <div className="relative mt-2">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Textarea
                id="message"
                className="pl-10 min-h-[100px]"
                placeholder="Tell us about your symptoms or concerns..."
              />
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
            >
              Send Appointment Request
            </Button>
          </motion.div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
