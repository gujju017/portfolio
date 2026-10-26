import React from 'react';
import { 
  Sparkles, 
  Flag, 
  Clock, 
  UtensilsCrossed, 
  Info, 
  Star, 
  Quote, 
  ShieldCheck, 
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { DWARKA_LOCAL_GUIDE, REVIEWS } from '../data/dwarkaData';

export default function DwarkaGuideSection({ lang }) {
  return (
    <section id="dwarka-guide" className="py-20 bg-gradient-to-b from-[#EBF4F5] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#986044]/10 border border-[#986044]/30 text-[#986044] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'gu' ? 'યાત્રાળુઓ માટે માર્ગદર્શિકા' : 'Native Pilgrim Guide & Local Secrets'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2E35] tracking-tight">
            {lang === 'gu' ? 'દ્વારકા દર્શનની મહત્વપૂર્ણ માહિતી' : 'Essential Dwarka Darshan, Rituals & Flavors'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#566E7A]">
            {lang === 'gu'
              ? '૫૨-ગજ ધ્વજારોહણ સમય, પવિત્ર ગોમતી સ્નાન, અને દ્વારકાના વિશ્વવિખ્યાત પેંડા અને કાઠિયાવાડી થાળીનું માર્ગદર્શન.'
              : 'Insider knowledge from local Dwarkavasi tour planners to make your pilgrimage seamless, sacred, and memorable.'}
          </p>
        </div>

        {/* 2-Column Guide Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: 52-Gaj Dhwajarohan (Flag Hoisting) Schedule */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#986044]/10 text-[#986044] flex items-center justify-center">
                  <Flag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1F2E35]">
                    {lang === 'gu' ? '૫૨-ગજ ધ્વજારોહણ દર્શન સમય' : '52-Gaj Dhwajarohan (Flag) Ceremony'}
                  </h3>
                  <span className="text-xs text-[#986044] font-semibold">
                    Sacred Flag Changed 5 Times Every Day
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#566E7A] leading-relaxed mb-6">
                The massive 52-yard flag flying atop the Jagat Mandir represents the 52 gates of ancient Dwarka and the Sun and Moon symbolizing Lord Krishna's eternal reign. It can be seen fluttering from 10 km in the Arabian Sea!
              </p>

              <div className="space-y-3">
                {DWARKA_LOCAL_GUIDE.dhwajarohanSchedule.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#F6FAF9] border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#2B8F9E]/20 text-[#2B8F9E] flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1F2E35]">
                          {item.ritual}
                        </h4>
                        <span className="text-[11px] text-gray-500">
                          {item.sponsor}
                        </span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-xl text-xs font-extrabold bg-[#1F2E35] text-[#9EF2EB]">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#2B8F9E] flex-shrink-0" />
              <span>Our local guide assists families to witness the flag ascending live.</span>
            </div>
          </div>

          {/* Card 2: Authentic Kathiyawadi Cuisine & Sweets */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2B8F9E]/10 text-[#2B8F9E] flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1F2E35]">
                    {lang === 'gu' ? 'દ્વારકાના પ્રખ્યાત સ્વાદ અને ભોજન' : 'Famous Dwarka Flavors & Dining'}
                  </h3>
                  <span className="text-xs text-[#2B8F9E] font-semibold">
                    Kathiyawadi Thali, Dwarka Peda &amp; Street Delights
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#566E7A] leading-relaxed mb-6">
                No visit to Dwarka is complete without savoring fresh hot Bajra no Rotlo topped with homemade white butter (makhan), spicy Sev Tameta, and authentic pure mawa Dwarka Peda.
              </p>

              <div className="space-y-3.5">
                {DWARKA_LOCAL_GUIDE.famousFoods.map((food, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#F6FAF9] border border-gray-100 hover:border-[#986044]/30 transition"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs sm:text-sm font-bold text-[#1F2E35]">
                        {food.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#986044] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {food.place}
                      </span>
                    </div>
                    <p className="text-xs text-[#566E7A]">
                      {food.tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-[#10B981] font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>We arrange pre-booked clean dining at top thali halls for our guests.</span>
            </div>
          </div>

        </div>

        {/* Customer Reviews Section */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#2B8F9E] uppercase tracking-wider block mb-1">
              Testimonials
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2E35]">
              Loved by Over 50,000+ Yatris Across India
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div 
                key={rev.id}
                className="p-6 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating & Quote */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-gray-200" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#566E7A] leading-relaxed mb-6 italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#1F2E35]">
                      {rev.name}
                    </h4>
                    <span className="text-[11px] text-gray-400">
                      {rev.city} • {rev.date}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#9EF2EB]/30 text-[#1F2E35]">
                    Verified Yatri
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
