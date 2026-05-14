import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/Button';
import { importantDates as dates } from '@/data/dates';

export const metadata: Metadata = {
  title: '1st Odisha AI Conference (OAIC) 2026 - Bhubaneswar, India',
  description: 'The 2026 1st Odisha AI Conference (OAIC) is a premier platform for exchanging ideas and presenting research findings in AI. Join us in Bhubaneswar, India, December 19-20, 2026.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* News and Announcements */}
      <section className="pt-12 pb-6 bg-white">
        <div className="container-wide">
          <div className="border border-accent-cyan p-8 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">News and Announcements</h2>
            <Link href="/authors/call-for-papers" className="text-lg text-accent-cyan hover:underline font-semibold">
              OAIC 2026 Call for Papers Announced
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-wide">
          <div className="relative flex flex-col md:flex-row items-stretch">
            {/* Image and Title Block */}
            <div className="relative w-full md:w-1/2 lg:w-3/5 h-[200px] sm:h-[250px] md:h-auto min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: "url('/images/dates-image.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="absolute top-0 left-0 bg-primary-900 text-white p-6 md:p-10 h-full flex items-center shadow-xl max-w-[180px] sm:max-w-[220px] md:max-w-[280px]">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">Important Dates</h2>
              </div>
            </div>

            {/* Dates List */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center space-y-3 md:-ml-12 z-10 py-8 md:py-12 px-2 sm:px-0">
              {dates.slice(0, 4).map((item, index) => (
                <div key={index} className="flex shadow-lg transform transition-transform hover:scale-[1.02]">
                  <div className="bg-primary-900 text-white font-bold p-4 w-28 sm:w-32 flex items-center justify-center shrink-0 text-center text-sm sm:text-base leading-tight">
                    {item.date}
                  </div>
                  <div className="bg-white border border-gray-100 p-4 flex-1 flex flex-col justify-center text-sm sm:text-base">
                    <span className="font-bold text-gray-900">{item.event}</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-center md:justify-end pt-4">
                <Button as={Link} href="/authors/important-dates" className="w-full sm:w-auto bg-accent-cyan hover:bg-blue-400 text-white rounded-none border-none shadow-md py-3 px-8 font-bold text-center">
                  See All Dates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="relative p-6 sm:p-10 md:p-16 bg-gray-50/50">
            {/* Top Left Bracket */}
            <div className="absolute top-0 left-0 w-1/3 sm:w-1/2 h-1/4 sm:h-1/3 border-t-4 border-l-4 border-accent-orange/30 pointer-events-none" />
            {/* Bottom Right Bracket */}
            <div className="absolute bottom-0 right-0 w-1/3 sm:w-1/2 h-1/4 sm:h-1/3 border-b-4 border-r-4 border-accent-orange/30 pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 mb-8 text-center md:text-left">Welcome to OAIC 2026!</h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify md:text-left">
                The <strong>2026 1st Odisha AI Conference (OAIC)</strong> will serve as a premier platform for exchanging ideas, presenting research findings, and fostering collaborations that address real-world challenges through AI-driven solutions.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify md:text-left">
                OAIC focuses on both theoretical developments and practical applications of AI across diverse domains, emphasizing ethical AI, sustainable development, and the integration of AI with emerging technologies to drive societal and economic transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Destination & Travel Info */}
      <section className="section-padding bg-white pt-0 overflow-hidden">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start relative p-6 sm:p-10 md:p-12 bg-primary-900 text-white shadow-2xl">
            {/* Top Right Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/4 border-t-4 border-r-4 border-accent-cyan/20 pointer-events-none" />
            
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-2 bg-accent-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image 
                  src="/images/destination-odisha.jpg" 
                  alt="Bhubaneswar, Odisha"
                  className="w-full shadow-2xl relative"
                  width={800}
                  height={500}
                  priority
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 pt-4 lg:pt-8 order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Destination</h2>
                <p className="text-xl sm:text-2xl text-primary-200">ITER, Siksha &apos;O&apos; Anusandhan, Bhubaneswar, Odisha, India</p>
              </div>
              
              <div className="h-1 w-20 bg-accent-orange" />
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent-cyan">Travel Information</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button as={Link} href="/travel/attractions" className="w-full sm:w-auto bg-accent-cyan hover:bg-blue-400 text-white rounded-none border-none py-3 px-8 text-center font-bold shadow-md">
                    Hotel & Travel
                  </Button>
                  <Button as={Link} href="/travel/visa" className="w-full sm:w-auto bg-white text-primary-900 hover:bg-gray-100 rounded-none border-none py-3 px-8 text-center font-bold shadow-md">
                    Visa Information
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
