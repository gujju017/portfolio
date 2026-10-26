import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  Bookmark, 
  Share2, 
  Heart, 
  Search, 
  SlidersHorizontal, 
  Bell, 
  MapPin, 
  Star, 
  Clock, 
  Navigation, 
  Compass, 
  Home, 
  Plane, 
  User, 
  ArrowRight,
  Thermometer,
  Wind,
  Droplets,
  Send,
  Bed,
  UtensilsCrossed,
  Sparkles
} from 'lucide-react';
import { DWARKA_DESTINATIONS, TOUR_PACKAGES, DWARKA_WAYPOINTS } from '../data/dwarkaData';

export default function MobileAppExperienceModal({ isOpen, onClose, onBookTour }) {
  // Mobile screens: 'onboarding' | 'home' | 'tracker' | 'detail'
  const [currentScreen, setCurrentScreen] = useState('home');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMobileDest, setSelectedMobileDest] = useState(DWARKA_DESTINATIONS[1]); // Shivrajpur Beach
  const [activeTrailPoint, setActiveTrailPoint] = useState(4); // Shivrajpur

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fadeIn">
      {/* Top Floating Close & Screen Switcher Bar */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
        {/* Switch screen quick pills */}
        <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-2xl bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30">
          <button
            onClick={() => setCurrentScreen('onboarding')}
            className={`px-3 py-1.5 rounded-xl transition ${
              currentScreen === 'onboarding' ? 'bg-[#10B981] text-white' : 'hover:bg-white/10'
            }`}
          >
            1. Onboarding
          </button>
          <button
            onClick={() => setCurrentScreen('home')}
            className={`px-3 py-1.5 rounded-xl transition ${
              currentScreen === 'home' ? 'bg-[#10B981] text-white' : 'hover:bg-white/10'
            }`}
          >
            2. Explore Home
          </button>
          <button
            onClick={() => setCurrentScreen('tracker')}
            className={`px-3 py-1.5 rounded-xl transition ${
              currentScreen === 'tracker' ? 'bg-[#E94057] text-white' : 'hover:bg-white/10'
            }`}
          >
            3. Route Tracker (Img 1)
          </button>
          <button
            onClick={() => setCurrentScreen('detail')}
            className={`px-3 py-1.5 rounded-xl transition ${
              currentScreen === 'detail' ? 'bg-[#2B8F9E] text-white' : 'hover:bg-white/10'
            }`}
          >
            4. Detail View (Img 2)
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1F2E35] flex items-center justify-center shadow-lg transition"
          title="Close Simulator"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* iPhone Device Mockup Wrapper */}
      <div className="relative w-[380px] h-[780px] bg-[#0E1317] rounded-[52px] p-3 shadow-2xl border-[6px] border-[#2A3740] ring-1 ring-white/20 flex flex-col justify-between my-auto">
        
        {/* Phone Speaker & Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-40 w-28 h-7 bg-black rounded-full flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#0E2028] ring-1 ring-cyan-500/50"></div>
        </div>

        {/* Screen Glass Surface */}
        <div className="w-full h-full bg-[#F6FAF9] rounded-[42px] overflow-hidden flex flex-col relative select-none">
          
          {/* Top Status Bar (Time, Battery, Wifi) */}
          <div className="pt-3 px-6 pb-1 flex justify-between items-center text-xs font-semibold text-[#1F2E35] z-30">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="font-bold">5G</span>
              <div className="w-5 h-2.5 border border-current rounded-sm p-0.5">
                <div className="h-full w-full bg-current rounded-xs"></div>
              </div>
            </div>
          </div>

          {/* SCREEN 1: ONBOARDING (Exact Replica of Leftmost Screen in Image 2) */}
          {currentScreen === 'onboarding' && (
            <div className="flex-grow flex flex-col justify-between p-6 bg-gradient-to-b from-[#E6FAF7] to-[#F6FAF9] animate-fadeIn">
              <div className="flex justify-between items-center pt-3">
                <div className="flex gap-1">
                  <div className="w-6 h-1 rounded-full bg-[#10B981]"></div>
                  <div className="w-3 h-1 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-1 rounded-full bg-gray-300"></div>
                </div>
                <button 
                  onClick={() => setCurrentScreen('home')}
                  className="px-3 py-1 rounded-full border border-gray-300 text-xs font-semibold text-gray-600"
                >
                  Skip
                </button>
              </div>

              {/* Graphic Travel Illustration Replica */}
              <div className="my-auto text-center relative py-4">
                <div className="w-56 h-56 mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-6 relative">
                  <img 
                    src="/images/temple_hero.jpg" 
                    alt="Dwarka Yatra"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                    <span className="text-[10px] uppercase font-bold text-[#9EF2EB]">Sacred Land</span>
                    <h4 className="text-sm font-extrabold">Devbhumi Dwarka</h4>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#1F2E35] leading-tight px-2">
                  Explore More, Track Your Every Step
                </h3>
                <p className="text-xs text-[#566E7A] mt-3 px-4 leading-relaxed">
                  Discover sacred temples, hidden coastal gems, and pristine Blue Flag beaches with AI-powered personalized routes in Dwarka.
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setCurrentScreen('home')}
                className="w-full py-4 rounded-2xl bg-[#10B981] text-white font-extrabold text-sm shadow-lg shadow-[#10B981]/30 hover:brightness-105 active:scale-95 transition"
              >
                Continue
              </button>
            </div>
          )}

          {/* SCREEN 2: HOME EXPLORE FEED (Middle Screen in Image 2) */}
          {currentScreen === 'home' && (
            <div className="flex-grow flex flex-col overflow-y-auto scrollbar-none pb-16 animate-fadeIn">
              {/* Header Greeting */}
              <div className="px-5 pt-3 pb-2 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-500 font-medium">Welcome back 👋</span>
                  <h3 className="text-lg font-black text-[#1F2E35]">
                    Jay Dwarkadhish!
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1F2E35] relative">
                    <Bell className="w-4 h-4" />
                    <span className="w-2 h-2 rounded-full bg-[#E94057] absolute top-2 right-2"></span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#2B8F9E] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    G
                  </div>
                </div>
              </div>

              {/* Search Bar with Filter Icon */}
              <div className="px-5 py-2">
                <div className="flex items-center gap-2 bg-white rounded-2xl px-3.5 py-2.5 border border-gray-200/80 shadow-sm">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search Dwarka destinations..."
                    className="w-full text-xs text-[#1F2E35] bg-transparent focus:outline-none" 
                  />
                  <button className="p-1.5 rounded-xl bg-[#10B981] text-white">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* AI Recommendation Banner (Exact Image 2 replica) */}
              <div className="px-5 py-2">
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#D7F5F0] to-[#E9F8F6] border border-[#9EF2EB] flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#9EF2EB] text-[#1F2E35] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-[#2B8F9E]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#1F2E35]">AI Recommendation Ready</h4>
                      <p className="text-[10px] text-[#566E7A]">3 new Dwarka picks based on your dates!</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedMobileDest(DWARKA_DESTINATIONS[1]);
                      setCurrentScreen('detail');
                    }}
                    className="w-7 h-7 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Categories Pills (All, Beach, Mountain, Culture) */}
              <div className="px-5 py-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-black text-[#1F2E35]">Category</h4>
                  <span className="text-[10px] font-bold text-gray-400">See all</span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {[
                    { id: 'All', label: 'All', icon: '🌍' },
                    { id: 'Beach', label: 'Beach', icon: '🏖️' },
                    { id: 'Temples', label: 'Temples', icon: '🛕' },
                    { id: 'Bridge', label: 'Bridge', icon: '🌉' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 whitespace-nowrap transition ${
                        activeCategory === cat.id 
                          ? 'bg-[#1F2E35] text-white shadow-xs' 
                          : 'bg-white text-gray-600 border border-gray-200'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recommended Slider Cards */}
              <div className="px-5 py-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-black text-[#1F2E35]">Recommended</h4>
                  <span className="text-[10px] font-bold text-gray-400">See all</span>
                </div>
                <div 
                  onClick={() => {
                    setSelectedMobileDest(DWARKA_DESTINATIONS[1]);
                    setCurrentScreen('detail');
                  }}
                  className="cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-md relative group"
                >
                  <div className="h-36 w-full relative">
                    <img 
                      src="/images/shivrajpur_beach.jpg" 
                      alt="Shivrajpur Beach"
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 text-[10px] font-bold text-[#1F2E35] flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      4.9
                    </div>
                    <div className="absolute bottom-2 left-3 text-white">
                      <h4 className="text-sm font-extrabold drop-shadow">Shivrajpur Beach &amp; Scuba</h4>
                      <span className="text-[10px] text-gray-200 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#9EF2EB]" />
                        Dwarka Coast
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flash Deals Card (Image 2 replica) */}
              <div className="px-5 py-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-black text-[#1F2E35]">Flash Deals</h4>
                  <span className="text-[10px] font-bold text-gray-400">See all</span>
                </div>
                <div 
                  onClick={() => {
                    setSelectedMobileDest(DWARKA_DESTINATIONS[0]);
                    setCurrentScreen('detail');
                  }}
                  className="cursor-pointer p-2.5 rounded-2xl bg-white border border-gray-200/80 flex items-center gap-3 shadow-xs"
                >
                  <img 
                    src="/images/temple_hero.jpg" 
                    alt="Dwarkadhish Express"
                    className="w-14 h-14 rounded-xl object-cover" 
                  />
                  <div className="flex-grow">
                    <h5 className="text-xs font-extrabold text-[#1F2E35]">Dwarkadhish 1-Day Yatra</h5>
                    <span className="text-[10px] text-gray-400 block">1 Day Tour • VIP Entry</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-black text-[#1F2E35]">₹1,499</span>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#E94057] text-white">-25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 3: ROUTE TRACKER (Exact Replica of Image 1 Mobile Screen) */}
          {currentScreen === 'tracker' && (
            <div className="flex-grow flex flex-col justify-between relative bg-[#1F2E35] text-white p-4 overflow-hidden animate-fadeIn">
              {/* Back button & Title */}
              <div className="flex justify-between items-center z-20 mb-2">
                <button
                  onClick={() => setCurrentScreen('home')}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#9EF2EB]">
                  Dwarka Trail Tracker
                </span>
                <div className="w-8"></div>
              </div>

              {/* Interactive Route Canvas Background (Image 1 replica) */}
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-[#1C2A30] to-[#121B20] border border-white/10 mb-3">
                <img 
                  src="/images/sudarshan_setu.jpg" 
                  alt="Track"
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
                />

                {/* S-curve path SVG */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 40 220 C 60 180, 100 160, 130 140 C 180 110, 200 80, 260 50" 
                    fill="none" 
                    stroke="#E94057" 
                    strokeWidth="4" 
                    strokeDasharray="4 4" 
                  />
                </svg>

                {/* Top Floating Stats HUD (Time & Distance) */}
                <div className="absolute top-2 left-2 flex gap-2">
                  <div className="glass-dark px-2.5 py-1.5 rounded-xl border border-white/20">
                    <span className="text-[9px] uppercase text-gray-400 block">Time</span>
                    <span className="text-xs font-black text-white">
                      {DWARKA_WAYPOINTS[activeTrailPoint].driveTime}
                    </span>
                  </div>
                  <div className="glass-dark px-2.5 py-1.5 rounded-xl border border-white/20">
                    <span className="text-[9px] uppercase text-gray-400 block">Distance</span>
                    <span className="text-xs font-black text-white">
                      {DWARKA_WAYPOINTS[activeTrailPoint].distanceKm}
                    </span>
                  </div>
                </div>

                {/* Pin label (Image 1 Cooper's Peak style) */}
                <div className="absolute top-12 right-6">
                  <div className="glass-dark px-2.5 py-1 rounded-xl text-[10px] font-bold text-white border border-white/20 shadow-md">
                    {DWARKA_WAYPOINTS[activeTrailPoint].name.split(' ')[0]}
                  </div>
                </div>

                {/* Bottom Capsule: "This is Shivrajpur Beach" */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="glass-dark px-3 py-1.5 rounded-xl border border-white/20 text-[10px] font-bold text-center text-[#9EF2EB]">
                    This is {DWARKA_WAYPOINTS[activeTrailPoint].name}
                  </div>
                </div>
              </div>

              {/* Waypoints Switcher */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 mb-2 scrollbar-none">
                {DWARKA_WAYPOINTS.slice(0, 6).map((wp, idx) => (
                  <button
                    key={wp.id}
                    onClick={() => setActiveTrailPoint(idx)}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap ${
                      activeTrailPoint === idx ? 'bg-[#E94057] text-white' : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {wp.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Hotels / Dining Cards Container */}
              <div className="bg-white rounded-2xl p-3 text-[#1F2E35]">
                <div className="flex gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#E94057] text-white text-[10px] font-bold flex items-center gap-1">
                    <Bed className="w-3 h-3" /> Hotels
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600 text-[10px] font-bold flex items-center gap-1">
                    <UtensilsCrossed className="w-3 h-3" /> Dining
                  </span>
                </div>

                {/* Hotel Card (Image 1 Deep River / Arabella style) */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/images/temple_hero.jpg" 
                      alt="Hotel" 
                      className="w-10 h-10 rounded-lg object-cover" 
                    />
                    <div>
                      <div className="flex items-center gap-1 text-[10px] text-amber-500 font-bold">
                        <Star className="w-3 h-3 fill-amber-500" /> 5.0
                      </div>
                      <h6 className="text-[11px] font-bold text-[#1F2E35]">Lords Eco Inn</h6>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-black text-[#2B8F9E]">₹2,600</span>
                    <span className="text-[9px] text-gray-400 block">/night</span>
                  </div>
                </div>

                {/* Big Black CTA (Image 1 replica: "Buy tour for $110") */}
                <button
                  onClick={() => {
                    onClose();
                    onBookTour({ destination: DWARKA_WAYPOINTS[activeTrailPoint].name });
                  }}
                  className="w-full mt-2.5 py-2.5 rounded-xl bg-black hover:bg-[#2B8F9E] text-white font-extrabold text-xs shadow-md transition"
                >
                  Buy tour for ₹1,499
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 4: DESTINATION DETAIL VIEW (Rightmost Screen in Image 2) */}
          {currentScreen === 'detail' && (
            <div className="flex-grow flex flex-col justify-between overflow-y-auto scrollbar-none animate-fadeIn">
              {/* Top Banner Image with Controls */}
              <div className="relative h-56 w-full flex-shrink-0">
                <img 
                  src={selectedMobileDest.image} 
                  alt={selectedMobileDest.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                <div className="absolute top-3 left-4 right-4 flex justify-between items-center text-white">
                  <button 
                    onClick={() => setCurrentScreen('home')}
                    className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center"
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                      <Share2 className="w-3.5 h-3.5 text-white" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                      <Heart className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-lg font-black">{selectedMobileDest.title}</h3>
                  <div className="flex items-center gap-2 text-[10px] text-gray-200 mt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#9EF2EB]" />
                      Dwarka, Gujarat
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-amber-300 font-bold">
                      <Star className="w-3 h-3 fill-amber-300" />
                      4.9 (1,840)
                    </span>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-4 space-y-4">
                {/* 4 Travelers Booked Banner */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100 shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      <div className="w-6 h-6 rounded-full bg-[#2B8F9E] text-white text-[9px] font-bold flex items-center justify-center border border-white">
                        A
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#1F2E35] text-white text-[9px] font-bold flex items-center justify-center border border-white">
                        B
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-700">120+ booked</span>
                  </div>
                  <button className="px-2.5 py-1 rounded-lg bg-[#10B981] text-white text-[10px] font-bold">
                    Join
                  </button>
                </div>

                {/* 3 Weather Cards (Image 2 replica) */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-xl bg-orange-50 border border-orange-100 text-center">
                    <Thermometer className="w-3.5 h-3.5 text-orange-500 mx-auto mb-0.5" />
                    <span className="text-xs font-bold text-[#1F2E35] block">28°C</span>
                    <span className="text-[9px] text-gray-400">Temp</span>
                  </div>
                  <div className="p-2 rounded-xl bg-sky-50 border border-sky-100 text-center">
                    <Wind className="w-3.5 h-3.5 text-[#2B8F9E] mx-auto mb-0.5" />
                    <span className="text-xs font-bold text-[#1F2E35] block">18 km/h</span>
                    <span className="text-[9px] text-gray-400">Wind</span>
                  </div>
                  <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-center">
                    <Droplets className="w-3.5 h-3.5 text-purple-500 mx-auto mb-0.5" />
                    <span className="text-xs font-bold text-[#1F2E35] block">68%</span>
                    <span className="text-[9px] text-gray-400">Humidity</span>
                  </div>
                </div>

                {/* Description snippet */}
                <div>
                  <h5 className="text-xs font-extrabold text-[#1F2E35] mb-1">Description</h5>
                  <p className="text-[11px] text-gray-600 line-clamp-3 leading-relaxed">
                    {selectedMobileDest.shortDesc}
                  </p>
                </div>
              </div>

              {/* Bottom Sticky Action Bar (Image 2 replica) */}
              <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-base font-black text-[#1F2E35]">
                    ₹{selectedMobileDest.pricePerPerson}
                  </span>
                  <span className="text-[9px] text-gray-400 block">per person</span>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onBookTour({ destination: selectedMobileDest.title });
                  }}
                  className="flex-grow py-3 px-4 rounded-xl bg-[#10B981] hover:brightness-105 active:scale-95 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-1.5 transition"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Bottom App Navigation Bar (Image 2 style) */}
          {currentScreen !== 'onboarding' && (
            <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-gray-100 py-2 px-6 flex justify-between items-center text-gray-400 z-30">
              <button 
                onClick={() => setCurrentScreen('home')}
                className={`p-1.5 rounded-xl flex flex-col items-center ${
                  currentScreen === 'home' ? 'text-[#1F2E35]' : 'hover:text-[#2B8F9E]'
                }`}
              >
                <Home className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setCurrentScreen('tracker')}
                className={`p-1.5 rounded-xl flex flex-col items-center ${
                  currentScreen === 'tracker' ? 'text-[#E94057]' : 'hover:text-[#2B8F9E]'
                }`}
              >
                <Compass className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setCurrentScreen('detail')}
                className={`p-1.5 rounded-xl flex flex-col items-center ${
                  currentScreen === 'detail' ? 'text-[#10B981]' : 'hover:text-[#2B8F9E]'
                }`}
              >
                <Plane className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setCurrentScreen('onboarding')}
                className="p-1.5 rounded-xl hover:text-[#2B8F9E]"
              >
                <User className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
