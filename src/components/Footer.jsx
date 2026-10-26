import React from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  ArrowUp
} from 'lucide-react';

export default function Footer({ onOpenBooking, onOpenMobileApp, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2E35] text-white pt-16 pb-12 border-t-4 border-[#2B8F9E] relative overflow-hidden">
      {/* Background Subtle Wave Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footerDots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="#9EF2EB" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerDots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2B8F9E] flex items-center justify-center text-white shadow-lg">
                <Compass className="w-6 h-6 text-[#9EF2EB]" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  GUJJU TOUR &amp; TRAVELS
                </span>
                <span className="text-xs text-[#9EF2EB] font-bold">
                  Devbhumi Dwarka, Gujarat
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              {lang === 'gu'
                ? 'દ્વારકા આધારિત વિશ્વસનીય ટૂર ઓપરેટર. શ્રી દ્વારકાધીશ જગત મંદિર દર્શન, શિવરાજપુર બીચ સ્કુબા, સુદર્શન સેતુ અને સોમનાથ યાત્રા માટે પ્રીમિયમ AC કેબ સેવાઓ.'
                : 'Native Dwarka pilgrimage & travel specialists. Guiding yatris to Shri Dwarkadhish VIP darshan, Sudarshan Setu, Bet Dwarka, and Shivrajpur Blue Flag Beach with clean private cabs and local Gujarati hospitality.'}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#10B981]">
              <ShieldCheck className="w-4 h-4" />
              <span>Gujarat Tourism Approved Partner</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#9EF2EB]">
              Popular Circuits
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#destinations" className="hover:text-[#9EF2EB] transition">
                  Dwarkadhish Temple &amp; 52-Gaj Dhwaja
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#9EF2EB] transition">
                  Shivrajpur Blue Flag Beach Scuba
                </a>
              </li>
              <li>
                <a href="#route-map" className="hover:text-[#9EF2EB] transition">
                  Sudarshan Setu &amp; Bet Dwarka Island
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#9EF2EB] transition">
                  Nageshwar Jyotirlinga Jalabhishek
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#9EF2EB] transition">
                  Dwarka + Somnath Saurashtra Yatra
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Cab Fleet & Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#9EF2EB]">
              Fleet &amp; Rentals
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition">
                  Maruti Dzire AC (4-Seater)
                </a>
              </li>
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition">
                  Maruti Ertiga Smart Hybrid (6-Seater)
                </a>
              </li>
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition">
                  Toyota Innova Crysta Luxury (7-Seater)
                </a>
              </li>
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition">
                  Force Urbania / Tempo Traveller (17-20 Seater)
                </a>
              </li>
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition">
                  Jamnagar &amp; Rajkot Airport Transfers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Native Dwarka Office & Contacts */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#9EF2EB]">
              Dwarka Head Office
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9EF2EB] flex-shrink-0 mt-0.5" />
                <span>
                  Near Bhadkeshwar Mandir Road, Teen Batti Chowk, Dwarka, Gujarat 361335
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9EF2EB] flex-shrink-0" />
                <a href="tel:+919825012345" className="hover:text-white transition">
                  +91 98250 12345 / 02892 234567
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <a 
                  href="https://wa.me/919825012345?text=Hello%20Gujju%20Tour%20and%20Travels"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp Booking Helpline
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9EF2EB] flex-shrink-0" />
                <span>info@gujjutourdwarka.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenMobileApp}
                className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#9EF2EB] text-xs font-bold border border-white/20 transition flex items-center justify-center gap-1.5"
              >
                <span>📱 Launch Interactive Mobile App View</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Gujju Tour and Travels. Native in Devbhumi Dwarka, Gujarat. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-300">
              Made with <Heart className="w-3.5 h-3.5 text-[#E94057] fill-[#E94057]" /> for Dwarkadhish Pilgrims
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating Sticky Quick Action: WhatsApp & Phone on Mobile */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5">
        <button
          onClick={onOpenMobileApp}
          className="w-12 h-12 rounded-full bg-[#1F2E35] border-2 border-[#9EF2EB] text-[#9EF2EB] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition"
          title="Open Mobile App Experience"
        >
          📱
        </button>

        <a
          href="https://wa.me/919825012345?text=Jay%20Dwarkadhish!%20I%20want%20to%20inquire%20about%20Dwarka%20tours%20and%20cabs."
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
