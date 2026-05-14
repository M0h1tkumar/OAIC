import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative text-white flex flex-col items-center">
      {/* Background Image Container */}
      <div
        className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary-900/20" />
      </div>

      {/* Overlapping Content Block */}
      <div className="relative -mt-16 sm:-mt-24 md:-mt-48 z-10 w-full max-w-4xl bg-primary-900 p-8 sm:p-12 md:p-16 shadow-2xl mx-auto lg:ml-0 lg:mr-auto">
        <div className="text-left space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
            OAIC 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Bhubaneswar, Odisha, India
            <br className="hidden sm:block" />
            <span className="sm:hidden"> — </span>
            19 - 20 December 2026
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button as={Link} href="/authors/submission-guidelines" className="w-full sm:w-auto bg-accent-cyan hover:bg-blue-400 text-white border-none rounded-none py-3 px-8 shadow-sm text-center font-bold">
              Submit a Paper
            </Button>
            <Button as={Link} href="/authors/call-for-papers" className="w-full sm:w-auto bg-white text-primary-900 hover:bg-gray-100 border-none rounded-none py-3 px-8 shadow-sm text-center font-bold">
              Call for Papers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
