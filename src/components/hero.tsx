import Image from "next/image";


export default function Hero() {

  return (

    <section className="relative w-full min-h-screen flex items-center pt-40">
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
            Soy un Abogado <br />
            Experto y <br />
            <span className="text-white">Certificado</span>
          </h1>
          <p className="text-gray-400 max-w-lg leading-relaxed border-l-2 border-accent-gold pl-4">
            He ayudado a innumerables trabajadores y sus familias a enfrentarse a las mayores compañías y ganar.
          </p>
          <button className="bg-accent-gold text-black font-semibold px-8 py-4 hover:bg-white transition-colors duration-300">
            Contacto
          </button>
        </div>

        <div className="hidden lg:flex justify-end relative h-full min-h-[800px] items-end">
          {/* Man Image */}
          <div className="relative w-full h-full max-w-md">
            <Image
              src="/abogado1.webp"
              alt="Lawyer"
              fill
              className="object-cover object-top mask-image-b-fade" // Assuming we might want a fade, but css mask is better.
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )

}