import React, { useState } from 'react';
import { 
  Navigation, 
  Clock, 
  MapPin, 
  Bed, 
  UtensilsCrossed, 
  Sparkles, 
  Star, 
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { DWARKA_WAYPOINTS } from '../data/dwarkaData';

export default function InteractiveRouteMap({ onOpenBooking, lang }) {
  const [activePointIndex, setActivePointIndex] = useState(4); // Default to Shivrajpur Beach
  const [activeTab, setActiveTab] = useState('hotels'); // 'hotels' | 'restaurants'

  const currentPoint = DWARKA_WAYPOINTS[activePointIndex];

  return (
    <section id="route-map" className="py-20 bg-gradient-to-b from-[#F6FAF9] to-[#EBF4F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B8F9E]/10 border border-[#2B8F9E]/30 text-[#2B8F9E] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#2B8F9E]" />
            <span>{lang === 'gu' ? 'ઇન્ટરેક્ટિવ રૂટ નેવિગેટર' : 'Interactive Coastal Route & Waypoint Explorer'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2E35] tracking-tight">
            {lang === 'gu' 
              ? 'દ્વારકાથી બેટ દ્વારકા: ૩૫ કિ.મી. દરિયાઈ યાત્રા' 
              : 'Explore the Sacred 35 km Dwarka Coastal Circuit'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#566E7A] leading-relaxed">
            {lang === 'gu'
              ? 'મુખ્ય જગત મંદિરથી શરૂ કરીને ગોમતી ઘાટ, ભડકેશ્વર, શિવરાજપુર બીચ, નાગેશ્વર જ્યોતિર્લિંગ અને સુદર્શન સેતુ સુધીના દરેક સ્ટોપ પર ક્લિક કરો.'
              : 'Directly trace your trip from Dwarkadhish Mandir through coastal cliffs, the Blue Flag beach, ancient Jyotirlinga, and the new Sudarshan Setu sea bridge.'}
          </p>
        </div>

        {/* The Route Navigator Grid (UI Reference Image 1 Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map Canvas with Floating HUD */}
          <div className="lg:col-span-7 bg-[#1F2E35] rounded-3xl p-4 sm:p-6 text-white relative shadow-2xl overflow-hidden border border-[#9EF2EB]/20">
            {/* Background Map Visual */}
            <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1C2A30] to-[#121B20]">
              <img 
                src="/images/sudarshan_setu.jpg" 
                alt="Dwarka Coast Route"
                className="w-full h-full object-cover opacity-45 mix-blend-luminosity filter blur-[0.5px]"
              />

              {/* Dynamic Coastal Path S-Curve SVG Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9EF2EB" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#2B8F9E" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#E94057" stopOpacity="1" />
                  </linearGradient>
                  <pattern id="dotPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#9EF2EB" opacity="0.18" />
                  </pattern>
                </defs>

                {/* Dotted texture in sea quadrant */}
                <rect x="55%" y="45%" width="45%" height="55%" fill="url(#dotPattern)" />

                {/* The Highway S-Curve path */}
                <path 
                  d="M 60 440 C 90 400, 140 370, 180 340 C 240 300, 270 250, 320 200 C 370 150, 420 110, 490 80" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="14" 
                  strokeLinecap="round"
                />
                <path 
                  d="M 60 440 C 90 400, 140 370, 180 340 C 240 300, 270 250, 320 200 C 370 150, 420 110, 490 80" 
                  fill="none" 
                  stroke="url(#routeGradient)" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  strokeDasharray="4 6"
                />
              </svg>

              {/* Waypoints Rendered onto the Canvas */}
              {DWARKA_WAYPOINTS.map((wp, idx) => {
                const isActive = idx === activePointIndex;
                return (
                  <button
                    key={wp.id}
                    onClick={() => setActivePointIndex(idx)}
                    style={{ left: `${wp.coordX}%`, top: `${wp.coordY}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-all duration-300 focus:outline-none`}
                    title={wp.name}
                  >
                    {/* Active Ring Marker (Image 1 style) */}
                    {isActive ? (
                      <div className="relative flex items-center justify-center">
                        <span className="w-10 h-10 rounded-full bg-[#E94057]/30 animate-ping absolute"></span>
                        <div className="w-7 h-7 rounded-full bg-[#E94057] p-1 shadow-lg border-2 border-white flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                        </div>

                        {/* Floating Tooltip Label connected with pin */}
                        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-md text-[#1F2E35] text-[11px] font-extrabold px-3 py-1 rounded-xl shadow-xl border border-white flex items-center gap-1.5 animate-bounce">
                          <span>{wp.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E94057]"></span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-white/80 group-hover:bg-[#9EF2EB] group-hover:scale-125 transition-all shadow-md border-2 border-[#1F2E35]"></div>
                    )}
                  </button>
                );
              })}

              {/* Floating HUD: Time & Distance Widget (Exact replica from Image 1) */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                <div className="glass-dark px-4 py-3 rounded-2xl border border-white/20 shadow-xl backdrop-blur-md min-w-[130px]">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#9EF2EB]" />
                    Driving Time
                  </span>
                  <div className="text-xl font-extrabold text-white mt-0.5">
                    {currentPoint.driveTime}
                  </div>
                </div>

                <div className="glass-dark px-4 py-3 rounded-2xl border border-white/20 shadow-xl backdrop-blur-md min-w-[130px]">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-[#9EF2EB]" />
                    Distance
                  </span>
                  <div className="text-xl font-extrabold text-white mt-0.5">
                    {currentPoint.distanceKm}
                  </div>
                </div>
              </div>

              {/* Bottom HUD: "This is [Point Name]" Capsule (Image 1 replica) */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="glass-dark px-4 py-3 rounded-2xl border border-white/20 flex items-center justify-between shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#2B8F9E] flex items-center justify-center text-white">
                      <MapPin className="w-4 h-4 text-[#9EF2EB]" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                        Current Waypoint
                      </span>
                      <span className="text-sm font-bold text-white">
                        This is <span className="text-[#9EF2EB]">{currentPoint.name}</span>
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#E94057] text-white">
                    {currentPoint.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Waypoint Selector Thumbnails Bar */}
            <div className="mt-4 pt-3 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {DWARKA_WAYPOINTS.map((wp, idx) => (
                <button
                  key={wp.id}
                  onClick={() => setActivePointIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                    idx === activePointIndex 
                      ? 'bg-[#E94057] text-white font-bold shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-gray-300'
                  }`}
                >
                  <span>{idx + 1}. {wp.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Waypoint Detail Card & Nearby Stays/Dining (Image 1 Style) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              {/* Waypoint Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2B8F9E] uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Stop #{activePointIndex + 1} of 8</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1F2E35] mt-1">
                    {currentPoint.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#9EF2EB]/40 text-[#1F2E35]">
                  {currentPoint.distanceKm} from Center
                </span>
              </div>

              <p className="text-sm text-[#566E7A] leading-relaxed mb-6">
                {currentPoint.shortNote}
              </p>

              {/* Category Selector Tabs (Hotels vs Restaurants - exactly like Image 1) */}
              <div className="flex items-center gap-3 mb-5">
                <button
                  onClick={() => setActiveTab('hotels')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm ${
                    activeTab === 'hotels'
                      ? 'bg-[#E94057] text-white shadow-md shadow-[#E94057]/30 scale-105'
                      : 'bg-gray-100 text-[#566E7A] hover:bg-gray-200'
                  }`}
                >
                  <Bed className="w-4 h-4" />
                  <span>Verified Hotels &amp; Stays</span>
                </button>

                <button
                  onClick={() => setActiveTab('restaurants')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm ${
                    activeTab === 'restaurants'
                      ? 'bg-[#E94057] text-white shadow-md shadow-[#E94057]/30 scale-105'
                      : 'bg-gray-100 text-[#566E7A] hover:bg-gray-200'
                  }`}
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>Kathiyawadi Food</span>
                </button>
              </div>

              {/* Cards List for Selected Tab (Image 1 Style Cards) */}
              <div className="space-y-3.5">
                {activeTab === 'hotels' ? (
                  currentPoint.hotelsNearby.map((hotel, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-3.5 rounded-2xl border border-gray-100 bg-[#F6FAF9] hover:border-[#2B8F9E]/40 hover:shadow-md transition group"
                    >
                      <div className="flex items-center gap-3.5">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name}
                          className="w-14 h-14 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform" 
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="flex items-center gap-0.5 text-xs font-bold text-amber-500">
                              <Star className="w-3.5 h-3.5 fill-amber-500" />
                              {hotel.rating}
                            </span>
                            <span className="text-[11px] text-gray-400">• Verified Stay</span>
                          </div>
                          <h4 className="text-sm font-bold text-[#1F2E35] mt-0.5">
                            {hotel.name}
                          </h4>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-gray-500 block">From</span>
                        <span className="text-sm font-extrabold text-[#2B8F9E]">
                          {hotel.price}
                        </span>
                        <span className="text-[10px] text-gray-400">/night</span>
                      </div>
                    </div>
                  ))
                ) : (
                  currentPoint.restaurantsNearby.map((rest, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-2xl border border-gray-100 bg-[#F6FAF9] hover:border-[#986044]/40 hover:shadow-md transition"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-[#1F2E35]">
                          {rest.name}
                        </h4>
                        <span className="flex items-center gap-0.5 text-xs font-bold text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                          {rest.rating}
                        </span>
                      </div>
                      <p className="text-xs text-[#986044] font-medium flex items-center gap-1">
                        <UtensilsCrossed className="w-3 h-3" />
                        Must Try: {rest.specialty}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Bottom Action (Image 1 Style "Buy tour for $110") */}
            <div className="mt-8 pt-5 border-t border-gray-100">
              <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                <span>Includes AC Cab, Tolls &amp; Local Guide</span>
                <span className="font-bold text-[#10B981]">Instant Confirmation</span>
              </div>
              
              <button
                onClick={() => onOpenBooking({ destination: currentPoint.name })}
                className="w-full py-4 rounded-2xl bg-[#1F2E35] hover:bg-[#2B8F9E] text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all group"
              >
                <span>Book Cab &amp; Yatra to {currentPoint.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4 text-[#9EF2EB] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
