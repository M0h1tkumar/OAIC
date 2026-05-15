import type { TouristAttraction } from '@/types';
import { MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface AttractionCardProps {
  attraction: TouristAttraction;
}

export default function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <div className="group relative bg-white border border-gray-100 overflow-hidden animate-fade-in-up">
      {/* Immersive Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={attraction.photoUrl}
          alt={attraction.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08283C]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Category Tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white text-[#08283C] text-[9px] font-bold uppercase tracking-widest shadow-sm">
            {attraction.category}
          </span>
        </div>

        {/* Architectural Accent - L Shape */}
        <div className="absolute bottom-0 left-0 w-6 h-[1.5px] bg-[#3A8EC2]"></div>
        <div className="absolute bottom-0 left-0 w-[1.5px] h-6 bg-[#3A8EC2]"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-lg font-serif font-bold text-[#08283C] leading-tight group-hover:text-[#0C527D] transition-colors">
            {attraction.name}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-gray-200 group-hover:text-[#3A8EC2] transition-colors flex-shrink-0" />
        </div>
        
        <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
          {attraction.description}
        </p>

        {/* Metadata Footer */}
        <div className="pt-3 flex items-center justify-between border-t border-gray-50">
          <div className="flex items-center text-[9px] uppercase tracking-[0.15em] font-bold text-[#0C527D]">
            <MapPin className="mr-1.5 h-3 w-3 text-[#3A8EC2]" />
            {attraction.distanceFromVenue}
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-[#3A8EC2] transition-colors"></div>
        </div>
      </div>
    </div>
  );
}
