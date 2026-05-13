import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative text-white flex flex-col items-center">
      {/* Background Image Container */}
      <div
        className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary-900/20" />
      </div>

      {/* Overlapping Content Block */}
      <div className="relative -mt-32 md:-mt-48 z-10 w-full max-w-4xl bg-primary-900 p-8 md:p-16 shadow-2xl">
        <div className="text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
            IEEE GLOBECOM 2026d
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Macau S.A.R., China
            <br className="hidden md:block" />
            <span className="md:hidden">, </span>
            7 - 11 December 2026
          </p>
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button as={Link} href="/authors/submission-guidelines" className="bg-accent-cyan hover:bg-blue-400 text-white border-none rounded-none py-3 px-6 shadow-sm">
              Submit a Paper
            </Button>
            <Button as={Link} href="/authors/call-for-papers" className="bg-white text-primary-900 hover:bg-gray-100 border-none rounded-none py-3 px-6 shadow-sm">
              Call for Papers
            </Button>
            <Button as={Link} href="/patrons-exhibitors" className="bg-white text-primary-900 hover:bg-gray-100 border-none rounded-none py-3 px-6 shadow-sm">
              Become a Patron/Exhibitor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
