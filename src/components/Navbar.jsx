import React, { useState } from 'react';
import { 
  Compass, 
  Phone, 
  MessageCircle, 
  Smartphone, 
  MapPin, 
  Menu, 
  X,
  Sparkles,
  Calendar
} from 'lucide-react';

export default function Navbar({ 
  onOpenMobileApp, 
  onOpenBooking, 
  lang, 
  setLang 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-[#2B8F9E]/20 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-[#1F2E35] text-white py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
            <span className="font-medium text-[#9EF2EB]">
              {lang === 'gu' ? 'જય દ્વારકાધીશ! દ્વારકામાં સ્વાગત છે' : 'Jay Dwarkadhish! Welcome to Devbhumi Dwarka'}
            </span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="hidden md:inline text-gray-300">
              {lang === 'gu' ? 'સ્થાનિક દ્રારકા આધારિત અધિકૃત કેબ અને પ્રવાસ સેવાઓ' : 'Official Native Dwarka Travel & AC Cab Partner'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={() => setLang(lang === 'en' ? 'gu' : 'en')}
              className="px-2 py-0.5 rounded bg-[#2B8F9E]/30 hover:bg-[#2B8F9E] text-[#9EF2EB] hover:text-white font-semibold transition"
            >
              {lang === 'en' ? 'ગુજરાતી' : 'English'}
            </button>
            <a 
              href="tel:+919825000000" 
              className="hidden sm:flex items-center gap-1.5 text-gray-200 hover:text-[#9EF2EB] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#9EF2EB]" />
              <span>+91 98250 12345</span>
            </a>
            <a 
              href="https://wa.me/919825012345?text=Hello%20Gujju%20Tour%20and%20Travels,%20I%20want%20to%20plan%20a%20trip%20to%20Dwarka."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[#10B981] font-semibold hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1F2E35] to-[#2B8F9E] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#1F2E35] rounded-[14px] flex items-center justify-center text-white">
                <Compass className="w-6 h-6 text-[#9EF2EB] animate-[spin_12s_linear_infinite]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-[#1F2E35]">
                  GUJJU
                </span>
                <span className="text-xl font-bold text-[#2B8F9E]">
                  TOUR & TRAVELS
                </span>
              </div>
              <p className="text-xs font-semibold text-[#986044] tracking-wide flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#2B8F9E]" />
                Natively in Dwarka, Gujarat
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#destinations" className="text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E] transition">
              {lang === 'gu' ? 'દર્શનીય સ્થળો' : 'Destinations'}
            </a>
            <a href="#route-map" className="text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E] transition flex items-center gap-1">
              <span>{lang === 'gu' ? 'લાઇવ રૂટ મેપ' : 'Live Route Map'}</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[#E94057] text-white rounded-full">
                Interactive
              </span>
            </a>
            <a href="#packages" className="text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E] transition">
              {lang === 'gu' ? 'ટૂર પેકેજીસ' : 'Tour Packages'}
            </a>
            <a href="#cab-fleet" className="text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E] transition">
              {lang === 'gu' ? 'કેબ અને ભાડું' : 'Cab Fleet & Fare'}
            </a>
            <a href="#dwarka-guide" className="text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E] transition">
              {lang === 'gu' ? 'દ્વારકા ગાઇડ' : 'Darshan Guide'}
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Mobile App Mode Launcher */}
            <button
              onClick={onOpenMobileApp}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#2B8F9E]/30 text-[#1F2E35] text-xs font-bold hover:bg-[#9EF2EB]/20 hover:border-[#2B8F9E] shadow-sm transition group"
              title="View UI replica from reference designs"
            >
              <Smartphone className="w-4 h-4 text-[#2B8F9E] group-hover:scale-110 transition-transform" />
              <span>{lang === 'gu' ? 'મોબાઇલ એપ જુઓ' : 'Mobile App View'}</span>
              <span className="w-2 h-2 rounded-full bg-[#E94057]"></span>
            </button>

            {/* Book Now Button */}
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2B8F9E] to-[#245B88] text-white text-sm font-bold shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition"
            >
              <Calendar className="w-4 h-4 text-[#9EF2EB]" />
              <span>{lang === 'gu' ? 'યાત્રા બુક કરો' : 'Book Your Yatra'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenMobileApp}
              className="p-2 rounded-lg bg-white border border-[#2B8F9E]/30 text-[#2B8F9E]"
              title="Mobile App View"
            >
              <Smartphone className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1F2E35] hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#2B8F9E]/20 space-y-3 bg-white/95 rounded-2xl px-4 my-2 shadow-lg">
            <a 
              href="#destinations" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E]"
            >
              Destinations
            </a>
            <a 
              href="#route-map" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E]"
            >
              Live Route Map (Interactive)
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E]"
            >
              Tour Packages
            </a>
            <a 
              href="#cab-fleet" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E]"
            >
              Cab Fleet & Fare Calculator
            </a>
            <a 
              href="#dwarka-guide" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1F2E35] hover:text-[#2B8F9E]"
            >
              Dwarka Darshan Guide
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMobileApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#2B8F9E] text-[#1F2E35] text-sm font-bold bg-[#9EF2EB]/20"
              >
                <Smartphone className="w-4 h-4 text-[#2B8F9E]" />
                Explore in Mobile App Preview Mode
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-xl bg-[#2B8F9E] text-white text-sm font-bold shadow"
              >
                Book Your Yatra Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
