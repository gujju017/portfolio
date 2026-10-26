import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Car, 
  Search, 
  ShieldCheck, 
  Star, 
  ArrowRight,
  Sun,
  Wind,
  Compass
} from 'lucide-react';

export default function Hero({ onOpenBooking, onSelectDestination, lang }) {
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedCar, setSelectedCar] = useState('sedan');
  const [yatriCount, setYatriCount] = useState('2');

  const handleQuickSearch = (e) => {
    e.preventDefault();
    onOpenBooking({
      experience: selectedExperience,
      vehicle: selectedCar,
      passengers: yatriCount
    });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Hero Image with Luxury Multi-Stop Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/temple_hero.jpg" 
          alt="Dwarkadhish Temple Golden Sunset by Gujju Tour and Travels"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Layered Gradient Overlay using Color Strip (#1F2E35, #245B88, #2B8F9E) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E35]/95 via-[#1F2E35]/80 to-[#245B88]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E35] via-transparent to-black/30" />
      </div>

      {/* Floating Weather & Marine Badge on Hero */}
      <div className="absolute top-6 right-6 z-10 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-dark text-white border border-[#9EF2EB]/30 shadow-xl">
        <div className="w-9 h-9 rounded-xl bg-[#2B8F9E]/40 flex items-center justify-center text-[#9EF2EB]">
          <Sun className="w-5 h-5 animate-[spin_20s_linear_infinite]" />
        </div>
        <div className="text-left text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">Dwarka Coast</span>
            <span className="px-1.5 py-0.2 rounded bg-[#10B981] text-[10px] font-bold">Live</span>
          </div>
          <div className="text-gray-300 flex items-center gap-2 mt-0.5">
            <span>28°C Sunny</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Wind className="w-3 h-3 text-[#9EF2EB]" />
              18 km/h Arabian Breeze
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white flex flex-col justify-center flex-grow">
        <div className="max-w-3xl">
          {/* Welcome Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B8F9E]/30 border border-[#9EF2EB]/40 text-[#9EF2EB] text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#9EF2EB]" />
            <span>
              {lang === 'gu' 
                ? 'કેમ છો! પધારો દેવભૂમિ દ્વારકાની પવિત્ર ભૂમિ પર' 
                : 'Kem Cho! Welcome to Devbhumi Dwarka'}
            </span>
            <span className="text-white/60">✦</span>
            <span className="text-white">Gujju Tour & Travels</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-white drop-shadow-md">
            {lang === 'gu' ? (
              <>
                દિવ્ય દર્શન અને <span className="text-[#9EF2EB]">દરિયાઈ સફારી</span> નું અનોખું સંગમ
              </>
            ) : (
              <>
                Divine Pilgrimage &amp; <span className="text-[#9EF2EB] drop-shadow-[0_2px_12px_rgba(158,242,235,0.4)]">Azure Ocean Safaris</span> in Dwarka
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow">
            {lang === 'gu'
              ? 'શ્રી દ્વારકાધીશ જગત મંદિર VIP દર્શન, નવો સુદર્શન સેતુ, બેટ દ્વારકા, શિવરાજપુર બ્લુ ફ્લેગ બીચ સ્કુબા અને પ્રીમિયમ AC કેબ સેવાઓ — સ્થાનિક દ્વારકાના વિશ્વાસુ માર્ગદર્શકો સાથે.'
              : 'Native Dwarka tour planners for Shri Dwarkadhish VIP Darshan, the record-breaking Sudarshan Setu sea bridge, dolphin marine safaris, and certified Shivrajpur Beach Scuba diving. Private sanitized cabs with verified local drivers.'}
          </p>

          {/* Fast Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#packages"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#2B8F9E] to-[#245B88] text-white font-bold text-sm shadow-xl hover:shadow-[#2B8F9E]/40 hover:scale-[1.02] active:scale-95 transition flex items-center gap-2 border border-[#9EF2EB]/30"
            >
              <span>{lang === 'gu' ? 'લોકપ્રિય પેકેજ જુઓ' : 'Explore Tour Packages'}</span>
              <ArrowRight className="w-4 h-4 text-[#9EF2EB]" />
            </a>

            <a
              href="#route-map"
              className="px-6 py-3.5 rounded-2xl glass-dark text-white font-bold text-sm hover:bg-white/20 transition flex items-center gap-2 border border-white/20"
            >
              <Compass className="w-4 h-4 text-[#9EF2EB]" />
              <span>{lang === 'gu' ? 'લાઇવ રૂટ પ્લાનર (૩૫ કિ.મી.)' : 'Interactive Route Planner'}</span>
            </a>
          </div>
        </div>

        {/* Glassmorphic Search / Fare Estimator Card */}
        <div className="w-full glass-dark rounded-3xl p-4 sm:p-6 border border-[#9EF2EB]/30 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Experience Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#9EF2EB] uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9EF2EB]" />
                Select Experience
              </label>
              <select 
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full bg-[#1F2E35]/80 border border-gray-600 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#9EF2EB] transition font-medium"
              >
                <option value="all">Complete Dwarka Yatra (All-in-One)</option>
                <option value="dwarkadhish">Dwarkadhish VIP Darshan & Gomti</option>
                <option value="sudarshan-bet">Sudarshan Setu & Bet Dwarka</option>
                <option value="shivrajpur-scuba">Shivrajpur Beach & Scuba Safari</option>
                <option value="somnath-combo">Dwarka + Somnath 3-Day Yatra</option>
              </select>
            </div>

            {/* Vehicle Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#9EF2EB] uppercase tracking-wider flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#9EF2EB]" />
                Cab / Vehicle Type
              </label>
              <select 
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
                className="w-full bg-[#1F2E35]/80 border border-gray-600 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#9EF2EB] transition font-medium"
              >
                <option value="sedan">Maruti Dzire AC (Up to 4 Yatris)</option>
                <option value="ertiga">Ertiga Hybrid MUV (Up to 6 Yatris)</option>
                <option value="innova">Toyota Innova Crysta (Luxury 7 Seater)</option>
                <option value="tempo">Urbania / Tempo (17-20 Seater Bus)</option>
              </select>
            </div>

            {/* Yatris Count */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#9EF2EB] uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#9EF2EB]" />
                Total Yatris / Travelers
              </label>
              <select 
                value={yatriCount}
                onChange={(e) => setYatriCount(e.target.value)}
                className="w-full bg-[#1F2E35]/80 border border-gray-600 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#9EF2EB] transition font-medium"
              >
                <option value="1">1 Person (Solo Yatri)</option>
                <option value="2">2 Persons (Couple)</option>
                <option value="4">4 Persons (Small Family)</option>
                <option value="6">6 Persons (Family & Elders)</option>
                <option value="8+">8+ Persons (Group / Mandali)</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] hover:brightness-110 active:scale-95 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition"
              >
                <Search className="w-4 h-4" />
                <span>Plan Trip &amp; Get Fare</span>
              </button>
            </div>
          </form>

          {/* Quick Badges below form */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-300 gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Govt. Registered Dwarka Operator</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
              <span>4.9 / 5 Rating (1,400+ Verified Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9EF2EB]"></span>
              <span>Zero Hidden Costs • Fuel & Toll Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
