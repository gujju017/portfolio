import React from 'react';
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  Heart,
  ArrowUp,
  Car,
  Sparkles
} from 'lucide-react';

export default function Footer({ onOpenMobileApp, lang }) {
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

            <div className="flex items-center gap-2 text-xs font-bold text-[#10B981]">
              <ShieldCheck className="w-4 h-4" />
              <span>Gujarat Tourism Approved Partner</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://wa.me/918320570717?text=Hello%20Gujju%20Tour%20and%20Travels,%20I%20want%20to%20plan%20a%20trip%20to%20Dwarka."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 font-bold transition text-xs hover:scale-105"
                title="WhatsApp Us"
              >
                <img src="/social/whatsapp.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/gujju_tour_and_travels17"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15 hover:from-[#F58529]/25 hover:via-[#DD2A7B]/25 hover:to-[#8134AF]/25 text-[#FF5B84] border border-[#DD2A7B]/30 font-bold transition text-xs hover:scale-105"
                title="Instagram"
              >
                <img src="/social/instagram.png" alt="Instagram" className="w-3.5 h-3.5 object-contain" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2: Places & Sacred Circuits */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#9EF2EB] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#9EF2EB]" />
              <span>{lang === 'gu' ? 'દર્શનીય સ્થળો અને સર્કિટ' : 'Dwarka Places & Circuits'}</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#destinations" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? '૧. નાગેશ્વર જ્યોતિર્લિંગ' : '1. Nageshwar Jyotirlinga'}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#9EF2EB]">1st Jyotirlinga</span>
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? '૨. સુદર્શન સેતુ બ્રિજ' : '2. Sudarshan Setu Sea Bridge'}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#9EF2EB]">2.32 km Bay</span>
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? '૩. બેટ દ્વારકા ટાપુ' : '3. Bet Dwarka Sacred Island'}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#9EF2EB]">Krishna Palace</span>
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? '૪. શિવરાજપુર બીચ' : '4. Shivrajpur Blue Flag Beach'}</span>
                  </span>
                  <span className="text-[10px] text-[#10B981] group-hover:text-[#9EF2EB]">Scuba &amp; Dolphin</span>
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? '૫. ભડકેશ્વર મહાદેવ' : '5. Bhadkeshwar Mahadev'}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#9EF2EB]">Sunset Rock</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E94057]" />
                    <span>{lang === 'gu' ? 'દ્વારકા - સોમનાથ યાત્રા' : 'Dwarka - Somnath Circuit'}</span>
                  </span>
                  <span className="text-[10px] text-amber-400 font-bold">Madhavpur Beach</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Cab Fleet & Rentals */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#9EF2EB] flex items-center gap-1.5">
              <Car className="w-4 h-4 text-[#9EF2EB]" />
              <span>{lang === 'gu' ? 'કેબ રેન્ટલ્સ અને વાહનો' : 'Cab Fleet & Rentals'}</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#packages" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <strong className="text-white group-hover:text-[#9EF2EB]">{lang === 'gu' ? 'SUV રેન્ટલ (૧૬ રૂ./કિ.મી.)' : 'KM-Based SUV Rental'}</strong>
                  </span>
                  <span className="text-[10px] font-extrabold bg-[#10B981]/20 text-[#10B981] px-1.5 py-0.5 rounded border border-[#10B981]/30">
                    ₹16/KM
                  </span>
                </a>
              </li>
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? 'મારુતિ ડિઝાયર AC' : 'Maruti Dzire AC (Sedan)'}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#9EF2EB]">₹12/km</span>
                </a>
              </li>
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? 'મારુતિ અર્ટીગા હાઇબ્રિડ' : 'Maruti Ertiga Hybrid (MUV)'}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#9EF2EB]">₹15/km</span>
                </a>
              </li>
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? 'ઇનોવા ક્રિસ્ટા લક્ઝરી' : 'Toyota Innova Crysta'}</span>
                  </span>
                  <span className="text-[10px] text-amber-400 group-hover:text-[#9EF2EB]">Luxury 7-Seater</span>
                </a>
              </li>
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? 'ટેમ્પો ટ્રાવેલર / અર્બાનિયા' : 'Tempo Traveller / Urbania'}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#9EF2EB]">17-20 Seater</span>
                </a>
              </li>
              <li>
                <a href="#cab-fleet" className="hover:text-[#9EF2EB] transition flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EF2EB]" />
                    <span>{lang === 'gu' ? 'જામનગર/રાજકોટ એરપોર્ટ કેબ' : 'Jamnagar &amp; Rajkot Transfers'}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#9EF2EB]">24/7 Pickup</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Native Dwarka Office & Contacts */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#9EF2EB]">
              {lang === 'gu' ? 'દ્વારકા હેડ ઓફિસ' : 'Dwarka Head Office'}
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9EF2EB] flex-shrink-0" />
                <a href="tel:+918320570717" className="hover:text-white transition">
                  +91 83205 70717
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <a
                  href="https://wa.me/918320570717?text=Hello,%20Gujju%20Tour%20and%20Travels"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp Booking Helpline
                </a>
              </div>
              <a href="mailto:gujjutourandtravels@gmail.com" className="flex items-center gap-2.5 cursor-pointer">
                <Mail className="w-4 h-4 text-[#9EF2EB] flex-shrink-0" />
                <span>gujjutourandtravels@gmail.com</span>
              </a>
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
        <a
          href="https://wa.me/918320570717?text=Jay%20Dwarkadhish!%20I%20want%20to%20inquire%20about%20Dwarka%20tours%20and%20cabs."
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition"
          title="Chat on WhatsApp"
        >
          <img src='/social/whatsapp.png' alt="WhatsApp" className="w-12 h-12" />
        </a>
      </div>
    </footer >
  );
}
