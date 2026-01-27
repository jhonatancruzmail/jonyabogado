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
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsappButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-dark overflow-x-hidden relative">
      {/* Header (Nav + Contact Info) */}
      <div className="absolute w-full z-50 top-0">
        <Nav />
        <ContactInfo />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <Welcome />

      {/* Practice Areas */}
      <PracticeAreas />

      {/* Mission, Vision & Values */}
      <Values />

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <WhatsAppButton />
    </main>
  );
}
