import {
  Calendar,
  Compass,
  MapPin,
  Menu,
  Phone,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function Navbar({
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
              {lang === 'gu' ? 'જય દ્વારકાધીશ !' : 'Jay Dwarkadhish !'}
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
              <span>+91 83205 70717</span>
            </a>
            <a
              href="https://wa.me/918320570717?text=Hello%20Gujju%20Tour%20and%20Travels,%20I%20want%20to%20plan%20a%20trip%20to%20Dwarka."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] hover:text-[#2ee873] border border-[#25D366]/30 font-bold transition-all duration-200 hover:scale-105 shadow-sm"
              title="Chat with us on WhatsApp"
            >
              <img src='/social/whatsapp.png' alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/gujju_tour_and_travels17"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15 hover:from-[#F58529]/25 hover:via-[#DD2A7B]/25 hover:to-[#8134AF]/25 text-[#FF5B84] hover:text-[#ff749a] border border-[#DD2A7B]/30 font-bold transition-all duration-200 hover:scale-105 shadow-sm"
              title="Follow us on Instagram"
            >
              <img src='/social/instagram.png' alt="Instagram" className="w-3.5 h-3.5 object-contain" />
              <span>Instagram</span>
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
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-xl bg-[#2B8F9E] text-white text-sm font-bold shadow hover:bg-[#1F2E35] transition"
              >
                Book Your Yatra Now
              </button>

              {/* Mobile Social Links */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                <a
                  href="https://www.instagram.com/gujju_tour_and_travels17"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15 text-[#FF5B84] border border-[#DD2A7B]/30 text-xs font-bold hover:brightness-110 transition active:scale-95"
                >
                  <img src='/social/instagram.png' alt="Instagram" className="w-4 h-4 object-contain" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
