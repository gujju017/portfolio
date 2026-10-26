import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Star, 
  Thermometer, 
  Wind, 
  Droplets, 
  Clock, 
  CheckCircle2, 
  Share2, 
  Heart, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function DestinationDetailModal({ destination, onClose, onBookNow, lang }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'reviews' | 'photos'
  const [isLiked, setIsLiked] = useState(false);

  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Modal Dialog Card (UI Reference Image 2 Style) */}
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[92vh]">
        
        {/* Top Hero Image Banner */}
        <div className="relative h-64 sm:h-72 w-full flex-shrink-0">
          <img 
            src={destination.image} 
            alt={destination.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Floating Action Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1F2E35] flex items-center justify-center backdrop-blur-md shadow-md transition"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: destination.title,
                      text: `Check out ${destination.title} with Gujju Tour and Travels Dwarka!`,
                      url: window.location.href
                    });
                  } else {
                    alert('Link copied to clipboard!');
                  }
                }}
                className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1F2E35] flex items-center justify-center backdrop-blur-md shadow-md transition"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center backdrop-blur-md shadow-md transition ${
                  isLiked ? 'text-[#E94057]' : 'text-[#1F2E35]'
                }`}
                title="Save to favorites"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#E94057]' : ''}`} />
              </button>
            </div>
          </div>

          {/* Title Overlay in Banner */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#10B981] text-white inline-block mb-2">
              {destination.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white drop-shadow-md">
              {destination.title}
            </h2>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#9EF2EB]" />
                {destination.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-300 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                {destination.rating} ({destination.reviewsCount} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          
          {/* Travelers Booked Banner (Image 2 replica) */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F6FAF9] border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#2B8F9E] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full bg-[#986044] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  SP
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1F2E35] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  RK
                </div>
              </div>
              <span className="text-xs font-bold text-[#1F2E35]">
                180+ yatris booked this spot this week
              </span>
            </div>

            <button
              onClick={() => onBookNow(destination)}
              className="px-3.5 py-1.5 rounded-xl bg-[#10B981] text-white text-xs font-bold shadow-sm hover:brightness-105 active:scale-95 transition"
            >
              Join Group
            </button>
          </div>

          {/* Section Tabs (Image 2 style: Overview, Reviews, Photos) */}
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'overview'
                  ? 'bg-[#10B981] text-white shadow-sm'
                  : 'text-[#566E7A] hover:bg-gray-100'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'reviews'
                  ? 'bg-[#10B981] text-white shadow-sm'
                  : 'text-[#566E7A] hover:bg-gray-100'
              }`}
            >
              Reviews ({destination.reviewsCount})
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'photos'
                  ? 'bg-[#10B981] text-white shadow-sm'
                  : 'text-[#566E7A] hover:bg-gray-100'
              }`}
            >
              Darshan &amp; Timings
            </button>
          </div>

          {/* Tab 1: Overview with Weather Cards (Image 2 replica) */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Weather Stats Widgets (Exact 3-card layout from Image 2) */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-100 text-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-1.5">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <span className="text-base font-extrabold text-[#1F2E35] block">
                    {destination.weather.temp}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500">
                    Temp
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 text-center">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-[#2B8F9E] flex items-center justify-center mx-auto mb-1.5">
                    <Wind className="w-4 h-4" />
                  </div>
                  <span className="text-base font-extrabold text-[#1F2E35] block">
                    {destination.weather.wind}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500">
                    Sea Wind
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 text-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-1.5">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <span className="text-base font-extrabold text-[#1F2E35] block">
                    {destination.weather.humidity}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500">
                    Humidity
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-extrabold text-[#1F2E35] mb-2">
                  Description
                </h4>
                <p className="text-sm text-[#566E7A] leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Highlights Pill Badges (Image 2 style) */}
              <div>
                <h4 className="text-sm font-extrabold text-[#1F2E35] mb-3">
                  Highlights &amp; Experiences
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destination.highlights.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F6FAF9] border border-gray-100 text-xs text-[#1F2E35] font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-[#F6FAF9] border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-[#1F2E35]">Rameshbhai Dave (Vadodara)</span>
                  <span className="text-xs text-amber-500 flex items-center">
                    <Star className="w-3.5 h-3.5 fill-amber-500" /> 5.0
                  </span>
                </div>
                <p className="text-xs text-[#566E7A] leading-relaxed">
                  "Gujju Tour and Travels provided personal escort to the Swarga Dwar. The knowledge of the local driver was remarkable. Highly blessed experience."
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6FAF9] border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-[#1F2E35]">Anjali &amp; Kunal Trivedi (Surat)</span>
                  <span className="text-xs text-amber-500 flex items-center">
                    <Star className="w-3.5 h-3.5 fill-amber-500" /> 5.0
                  </span>
                </div>
                <p className="text-xs text-[#566E7A] leading-relaxed">
                  "The sunset view here was unforgettable. AC cab was waiting on time and driver took us to the authentic Dwarka peda shop."
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Timings & Aarti */}
          {activeTab === 'photos' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-[#2B8F9E]/10 border border-[#2B8F9E]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2B8F9E] uppercase mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Sanctum Opening Hours</span>
                </div>
                <p className="text-sm font-semibold text-[#1F2E35]">
                  {destination.timings}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-[#1F2E35] mb-2">
                  Daily Aarti &amp; Ritual Schedule
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {destination.aartiSchedule.map((aarti, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-[#F6FAF9] border border-gray-100 text-xs font-bold text-[#1F2E35]"
                    >
                      {aarti}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Action Bar (Image 2 replica) */}
        <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex items-center justify-between gap-4 flex-shrink-0">
          <div>
            <span className="text-xs text-gray-500 block">Starting from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-[#1F2E35]">
                ₹{destination.pricePerPerson}
              </span>
              <span className="text-xs text-gray-400">/ person</span>
            </div>
          </div>

          <button
            onClick={() => onBookNow(destination)}
            className="flex-grow max-w-xs py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-extrabold text-sm shadow-lg shadow-[#10B981]/25 hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
