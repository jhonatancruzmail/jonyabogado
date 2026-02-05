import {
  Phone,
  Mail,
  Scale,
  BookOpen,
  HardHat,
  Car,
  UserX,
  Gavel,
  Users,
  ArrowRight,
  Briefcase,
  Building2,
  Menu,
  X
} from "lucide-react";
import Image from "next/image";
import Nav from "@/components/nav";
import ContactInfo from "@/components/contactInfo";
import Hero from "@/components/hero";
import Welcome from "@/components/welcome";
import PracticeAreas from "@/components/practiceAreas"
import Values from "@/components/values";
import Location from "@/components/location";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsappButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-dark relative">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <Welcome />

      {/* Practice Areas */}
      <PracticeAreas />

      {/* Mission, Vision & Values */}
      <Values />

      {/* Location Section */}
      <Location />

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <WhatsAppButton />
    </main>
  );
}
