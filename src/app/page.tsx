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

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-dark overflow-x-hidden relative">
      {/* Top Bar (Contact Info) */}
      <div className="hidden md:flex justify-between items-center px-6 lg:px-20 py-2 border-b border-gray-800 text-xs text-gray-400">
        <div className="flex gap-6">
          <span className="hover:text-accent-gold cursor-pointer transition-colors">Home</span>
          <span className="hover:text-accent-gold cursor-pointer transition-colors">About Us</span>
          <span className="hover:text-accent-gold cursor-pointer transition-colors">Pages</span>
          <span className="hover:text-accent-gold cursor-pointer transition-colors">Contact Us</span>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent-gold" />
            <span>Call Us On: 911-987654321</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-accent-gold" />
            <span>Email Us On: yourmail@mail.com</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 lg:px-20 py-6 absolute w-full z-50 top-8 md:top-8 bg-transparent">
        <div className="flex items-center gap-2">
          <Scale className="w-8 h-8 text-accent-gold" />
          <span className="text-2xl font-serif text-white font-bold tracking-wide">Attorneyster</span>
        </div>
        <div className="hidden md:block">
          <button className="px-6 py-3 border border-gray-600 text-white hover:bg-accent-gold hover:text-black hover:border-accent-gold transition-all duration-300 uppercase text-xs tracking-wider">
            Book A Consultation
          </button>
        </div>
        <div className="block md:hidden text-white">
          <Menu className="w-8 h-8" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center pt-20">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
            alt="Law Library Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="w-12 h-0.5 bg-accent-gold mb-4"></div>
            <h1 className="text-5xl lg:text-7xl font-serif text-white leading-tight">
              We're Group Of <br />
              <span className="text-white">Certified</span> Law <br />
              Professionals
            </h1>
            <p className="text-gray-400 max-w-lg leading-relaxed border-l-2 border-accent-gold pl-4">
              we have helped countless maritime workers and their families go up against the largest offshore companies and win.
            </p>
            <button className="bg-accent-gold text-black font-semibold px-8 py-4 hover:bg-white transition-colors duration-300">
              Get In Touch
            </button>
          </div>

          <div className="hidden lg:flex justify-end relative h-full min-h-[600px] items-end">
            {/* Man Image */}
            <div className="relative w-full h-full max-w-md">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                alt="Lawyer"
                fill
                className="object-cover object-top mask-image-b-fade" // Assuming we might want a fade, but css mask is better.
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 lg:py-32 bg-secondary-dark relative">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Collage */}
          <div className="relative h-[500px] w-full">
            <div className="absolute top-0 left-0 w-3/5 h-3/5 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
                alt="Library"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 right-10 w-3/5 h-3/5 overflow-hidden border-4 border-secondary-dark shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589578527966-fd7105698a39?q=80&w=800&auto=format&fit=crop"
                alt="Gavel"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Vertical text or decoration could go here */}
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif text-white">
              Welcome To Attorney Law - <br />
              Lawyer & Law Firm Company
            </h2>
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-12 bg-accent-gold"></span>
              <Scale className="text-accent-gold w-6 h-6" />
              <span className="h-[1px] w-12 bg-accent-gold"></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Although we are located in Brooklyn, our maritime lawyers are proud to help the injured throughout the nation, including workers who were working in foreign waters at the time of the incident go up against the largest offshore companies and win.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 relative">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="Peter Parker" fill className="object-cover" />
              </div>
              <div>
                <p className="text-accent-gold font-serif text-xl">Peter Parker</p>
              </div>
            </div>

            <div className="flex gap-6 mt-8">
              <div className="bg-gray-800 p-6 flex items-center gap-4 w-48">
                <Briefcase className="w-10 h-10 text-gray-500" />
                <div>
                  <span className="text-2xl font-bold text-white block">95%</span>
                  <span className="text-sm text-gray-400">Case Success</span>
                </div>
              </div>
              <div className="bg-accent-gold p-6 flex items-center gap-4 w-48">
                <div className="bg-black text-white px-2 py-1 font-bold text-lg">35+</div>
                <div>
                  <span className="text-sm text-black font-semibold">Years <br /> Experience</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 lg:py-32 bg-primary-dark">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-serif text-white">
                Explore The Perfect <br />
                Our Practice Areas
              </h2>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-12 bg-accent-gold"></span>
                <Scale className="text-accent-gold w-6 h-6" />
                <span className="h-[1px] w-12 bg-accent-gold"></span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
              We are a group of civil litigation/trial attorneys who focus on providing a justice based on the issues relating to insurance defense, insurance coverage, bad faith, insurance fraud and criminal litigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PracticeCard
              icon={<Briefcase className="w-10 h-10 text-accent-gold" />}
              title="Business Law"
              desc="Be aware of new developments, as laws and rules often change based on the situation."
            />
            <PracticeCard
              icon={<Building2 className="w-10 h-10 text-accent-gold" />}
              title="Construction Law"
              desc="Never judge, just listen and advise. Even if your client has made a bad decision in the case."
            />
            <PracticeCard
              icon={<Car className="w-10 h-10 text-accent-gold" />}
              title="Car Accident"
              desc="Being untruthful will get you nowhere and give you a reputation of the dishonesty in law."
            />
            <PracticeCard
              icon={<UserX className="w-10 h-10 text-accent-gold" />}
              title="Wrongful Death"
              desc="Keep yourself up-to-date on your area of law. Be aware of new justice, as laws and rules."
            />
            <PracticeCard
              icon={<Gavel className="w-10 h-10 text-accent-gold" />}
              title="Criminal Law"
              desc="Our attorneys are fully committed to providing you with the support and attention that you deserve."
            />
            <PracticeCard
              icon={<Users className="w-10 h-10 text-accent-gold" />}
              title="Family Law"
              desc="You may find yourself unable to work or complete work-related responsibilities safely."
            />
          </div>
        </div>
      </section>

      {/* Footer can go here, but only if requested. Keeping it simple for now. */}
    </main>
  );
}

function PracticeCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-secondary-dark p-8 border border-transparent hover:border-accent-gold/30 transition-all duration-300 group">
      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-white mb-4 group-hover:text-accent-gold transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed">
        {desc}
      </p>
      <button className="flex items-center gap-2 text-white text-xs uppercase tracking-wider group-hover:text-accent-gold transition-colors">
        View More <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  )
}
