import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Star, 
  Compass, 
  Palmtree, 
  Landmark, 
  Waves, 
  ArrowRight,
  Send,
  Eye
} from 'lucide-react';
import { DWARKA_DESTINATIONS } from '../data/dwarkaData';

export default function DestinationsSection({ onSelectDestination, onOpenBooking, lang }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Places', guLabel: 'બધા સ્થળો', icon: Compass },
    { id: 'temples', label: 'Temples & Darshan', guLabel: 'મંદિરો અને દર્શન', icon: Landmark },
    { id: 'beaches', label: 'Blue Flag Beach', guLabel: 'બ્લુ ફ્લેગ બીચ', icon: Palmtree },
    { id: 'island', label: 'Island & Sea Bridge', guLabel: 'ટાપુ અને બ્રિજ', icon: Waves },
    { id: 'heritage', label: 'Heritage & Sunset', guLabel: 'સનસેટ અને વારસો', icon: Sparkles }
  ];

  const filteredDestinations = selectedCategory === 'all'
    ? DWARKA_DESTINATIONS
    : DWARKA_DESTINATIONS.filter(d => d.category === selectedCategory);

  return (
    <section id="destinations" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top AI Recommendation Card (Direct Replica of Image 2 AI Card) */}
        <div className="mb-12 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#9EF2EB]/20 via-[#F6FAF9] to-[#2B8F9E]/10 border border-[#2B8F9E]/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#9EF2EB] text-[#1F2E35] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Sparkles className="w-6 h-6 text-[#2B8F9E]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-extrabold text-[#1F2E35]">
                  AI Smart Recommendation Ready
                </h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#10B981] text-white">
                  Personalized
                </span>
              </div>
              <p className="text-xs text-[#566E7A] mt-0.5">
                Based on today's weather and low-tide timings: Best time for Jagat Mandir Darshan is 06:30 AM, Shivrajpur Scuba at 11 AM, and Bhadkeshwar Sunset at 6 PM!
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectDestination(DWARKA_DESTINATIONS[1])}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#10B981] hover:brightness-105 active:scale-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md flex-shrink-0 transition"
          >
            <Send className="w-3.5 h-3.5" />
            <span>View Suggested Route</span>
          </button>
        </div>

        {/* Section Title & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#2B8F9E] uppercase tracking-wider block mb-1">
              {lang === 'gu' ? 'દ્વારકાના મુખ્ય આકર્ષણો' : 'Curated Attractions'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2E35]">
              {lang === 'gu' ? 'મનમોહક સ્થળોની મુલાકાત લો' : 'Top Destinations in Devbhumi Dwarka'}
            </h2>
          </div>

          {/* Category Horizontal Filter Pills (Image 2 Replica) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition shadow-sm ${
                    isActive
                      ? 'bg-[#1F2E35] text-white shadow-md'
                      : 'bg-[#F6FAF9] text-[#566E7A] hover:bg-gray-100 border border-gray-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#9EF2EB]' : 'text-[#2B8F9E]'}`} />
                  <span>{lang === 'gu' ? cat.guLabel : cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Destinations Cards Grid (Image 2 Card Aesthetics) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredDestinations.map((dest) => (
            <div 
              key={dest.id}
              className="group bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Thumbnail */}
              <div className="relative h-60 w-full overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Tag Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#1F2E35]/80 text-[#9EF2EB] backdrop-blur-md border border-[#9EF2EB]/30">
                    {dest.tag}
                  </span>
                </div>

                {/* Rating Badge Top Right (Image 2 style) */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1F2E35] text-xs font-extrabold shadow">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{dest.rating}</span>
                </div>

                {/* Bottom Overlay Location & Title */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs text-gray-200 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#9EF2EB]" />
                    {dest.location}
                  </span>
                  <h3 className="text-lg font-bold text-white drop-shadow truncate mt-0.5">
                    {lang === 'gu' ? dest.gujaratiTitle : dest.title}
                  </h3>
                </div>
              </div>

              {/* Card Content Details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <p className="text-xs text-[#566E7A] line-clamp-2 leading-relaxed mb-4">
                  {dest.shortDesc}
                </p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#F6FAF9] text-xs text-[#1F2E35] font-semibold mb-4 border border-gray-100">
                  <div className="text-center">
                    <span className="text-[10px] text-gray-400 block font-normal">Distance</span>
                    <span>{dest.distanceFromCenter}</span>
                  </div>
                  <div className="text-center border-l border-gray-200">
                    <span className="text-[10px] text-gray-400 block font-normal">Drive Time</span>
                    <span>{dest.travelTime}</span>
                  </div>
                </div>

                {/* Bottom Card Footer with Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-[10px] text-gray-400 block">From</span>
                    <span className="text-lg font-extrabold text-[#2B8F9E]">
                      ₹{dest.pricePerPerson}
                    </span>
                    <span className="text-[10px] text-gray-400">/person</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-[#9EF2EB]/30 text-[#1F2E35] text-xs font-bold flex items-center gap-1 transition"
                      title="View Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onOpenBooking({ destination: dest.title })}
                      className="px-4 py-2 rounded-xl bg-[#10B981] hover:brightness-105 active:scale-95 text-white text-xs font-bold flex items-center gap-1 shadow transition"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
