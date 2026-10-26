import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Clock, 
  Car, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/dwarkaData';

export default function PackagesSection({ onOpenBooking, lang }) {
  return (
    <section id="packages" className="py-20 bg-[#F6FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#059669] text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>{lang === 'gu' ? 'સ્પેશિયલ ડિસ્કાઉન્ટ ઓફર' : 'Flash Deals & Tour Packages'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2E35] tracking-tight">
            {lang === 'gu' ? 'લોકપ્રિય દ્વારકા દર્શન પેકેજીસ' : 'Handcrafted Dwarka Pilgrimage & Coastal Packages'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#566E7A]">
            {lang === 'gu'
              ? 'અમારા દરેક પેકેજમાં પ્રાઇવેટ AC કેબ, સ્થાનિક ડ્રાઈવર, VIP દર્શન માર્ગદર્શન અને કાઠિયાવાડી ભોજન શામેલ છે.'
              : 'All packages include sanitized private AC vehicle, verified native driver, temple guidance, and transparent pricing with zero surprise charges.'}
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOUR_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:border-[#2B8F9E]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Badge & Discount Top */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#1F2E35] text-[#9EF2EB]">
                  {pkg.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#E94057] text-white">
                  {pkg.discount}
                </span>
              </div>

              {/* Title & Duration */}
              <div>
                <h3 className="text-lg font-extrabold text-[#1F2E35] leading-snug group-hover:text-[#2B8F9E] transition-colors">
                  {lang === 'gu' ? pkg.gujaratiTitle : pkg.title}
                </h3>
                
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-2 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2B8F9E]" />
                    {pkg.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    {pkg.rating} ({pkg.reviews})
                  </span>
                </div>

                {/* Vehicle Pill */}
                <div className="p-2.5 rounded-xl bg-[#F6FAF9] text-xs font-semibold text-[#1F2E35] flex items-center gap-2 mb-4 border border-gray-100">
                  <Car className="w-4 h-4 text-[#2B8F9E]" />
                  <span className="truncate">{pkg.vehicle}</span>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2 mb-6 text-xs text-[#566E7A]">
                  <span className="font-bold text-[#1F2E35] block text-[11px] uppercase tracking-wide">
                    Package Inclusions:
                  </span>
                  {pkg.inclusions.slice(0, 4).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{inc}</span>
                    </div>
                  ))}
                  {pkg.inclusions.length > 4 && (
                    <span className="text-[11px] text-[#2B8F9E] font-bold block pt-1">
                      + {pkg.inclusions.length - 4} more inclusions included
                    </span>
                  )}
                </div>
              </div>

              {/* Pricing & Booking CTA */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs text-gray-400 line-through mr-1.5">
                      ₹{pkg.originalPrice}
                    </span>
                    <span className="text-2xl font-black text-[#1F2E35]">
                      ₹{pkg.price}
                    </span>
                    <span className="text-[10px] text-gray-400 block font-normal">
                      per person (all incl.)
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/919825012345?text=Hello%20Gujju%20Tour%20and%20Travels,%20I%20am%20interested%20in%20${encodeURIComponent(pkg.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#10B981]/10 text-[#059669] hover:bg-[#10B981] hover:text-white transition"
                    title="Quick WhatsApp Inquiry"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => onOpenBooking({ package: pkg.title, price: pkg.price })}
                  className="w-full py-3 rounded-xl bg-[#2B8F9E] hover:bg-[#1F2E35] text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
                >
                  <span>Book This Yatra</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Itinerary Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1F2E35] via-[#245B88] to-[#1F2E35] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-[#9EF2EB]/20">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#9EF2EB] text-[#1F2E35] inline-block mb-2">
              Bespoke Gujarat Yatra
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Want a Custom Itinerary for your Family or Sangha?
            </h3>
            <p className="text-sm text-gray-200 mt-2">
              We design personalized circuits covering Dwarka, Somnath, Gir National Park Lion Safari, Diu Beach, and Madhavpur. Speak directly with native Dwarka travel experts.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking({ custom: true })}
            className="px-6 py-3.5 rounded-2xl bg-white text-[#1F2E35] hover:bg-[#9EF2EB] font-extrabold text-sm shadow-xl flex-shrink-0 transition flex items-center gap-2"
          >
            <span>Request Custom Plan</span>
            <ArrowRight className="w-4 h-4 text-[#2B8F9E]" />
          </button>
        </div>

      </div>
    </section>
  );
}
