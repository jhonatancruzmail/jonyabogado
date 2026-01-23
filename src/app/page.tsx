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
export default function Home() {
  return (
    <main className="min-h-screen bg-primary-dark overflow-x-hidden relative">
      {/* Top Bar (Contact Info) */}
      <ContactInfo />
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <Welcome />

      {/* Practice Areas */}
      <PracticeAreas />

      {/* Footer can go here, but only if requested. Keeping it simple for now. */}
    </main>
  );
}
