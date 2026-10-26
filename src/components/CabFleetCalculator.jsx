import React, { useState } from 'react';
import { 
  Car, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Check, 
  Calculator, 
  MessageCircle, 
  PhoneCall, 
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { CAB_FLEET } from '../data/dwarkaData';

export default function CabFleetCalculator({ onOpenBooking, lang }) {
  const [selectedCab, setSelectedCab] = useState('innova-crysta');
  const [pickupLocation, setPickupLocation] = useState('dwarka-local');
  const [circuitType, setCircuitType] = useState('full-day-local');
  const [tripDays, setTripDays] = useState(1);

  // Pricing formula logic
  const calculateFare = () => {
    let base = 2500;
    if (selectedCab === 'swift-dzire') base = 2200;
    if (selectedCab === 'maruti-ertiga') base = 2900;
    if (selectedCab === 'innova-crysta') base = 3800;
    if (selectedCab === 'tempo-traveller') base = 5500;

    let multiplier = 1;
    if (circuitType === 'half-day') multiplier = 0.75;
    if (circuitType === 'full-day-local') multiplier = 1.0;
    if (circuitType === 'dwarka-bet-circuit') multiplier = 1.4;
    if (circuitType === 'jamnagar-dwarka') multiplier = 1.8;
    if (circuitType === 'rajkot-dwarka') multiplier = 2.4;
    if (circuitType === 'dwarka-somnath') multiplier = 2.8;

    return Math.round(base * multiplier * tripDays);
  };

  const currentCabObj = CAB_FLEET.find(c => c.id === selectedCab) || CAB_FLEET[2];
  const calculatedFare = calculateFare();

  const handleWhatsAppBooking = () => {
    const text = `Namaste Gujju Tour and Travels! I want to book an AC Cab in Dwarka:
Vehicle: ${currentCabObj.name}
Pickup: ${pickupLocation}
Package: ${circuitType}
Days: ${tripDays}
Estimated Fare: ₹${calculatedFare}
Please confirm availability.`;
    window.open(`https://wa.me/919825012345?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="cab-fleet" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#245B88]/10 border border-[#245B88]/30 text-[#245B88] text-xs font-bold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>{lang === 'gu' ? 'અધિકૃત કેબ સર્વિસ' : 'Premium AC Cab Fleet & Transparent Fares'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2E35] tracking-tight">
            {lang === 'gu' ? 'દ્વારકામાં પ્રાઇવેટ એસી કેબ બુક કરો' : 'Dwarka Local & Outstation AC Cabs'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#566E7A]">
            {lang === 'gu'
              ? 'અનુભવી સ્થાનિક ડ્રાઈવરો, સ્વચ્છ અને સેનિટાઈઝ્ડ ગાડીઓ, અને કોઈ પણ છુપા ચાર્જ વગરનું પારદર્શક મીટર ભાડું.'
              : 'Reliable doorstep pick-up from Dwarka station, hotels, Jamnagar & Rajkot airports. Certified local Gujarati chauffeurs who know every temple ritual and darshan gate.'}
          </p>
        </div>

        {/* Fleet Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CAB_FLEET.map((cab) => {
            const isSelected = selectedCab === cab.id;
            return (
              <div
                key={cab.id}
                onClick={() => setSelectedCab(cab.id)}
                className={`cursor-pointer rounded-3xl p-5 border-2 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#2B8F9E] bg-[#9EF2EB]/10 shadow-xl ring-2 ring-[#2B8F9E]/20 scale-[1.02]'
                    : 'border-gray-100 bg-[#F6FAF9] hover:border-gray-300'
                }`}
              >
                <div>
                  {/* Vehicle Tag & Per Km Rate */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#1F2E35] text-white">
                      {cab.type}
                    </span>
                    <span className="text-xs font-extrabold text-[#2B8F9E]">
                      {cab.ratePerKm}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#1F2E35] mb-2">
                    {cab.name}
                  </h3>

                  {/* Seating and Luggage Capacity */}
                  <div className="space-y-1.5 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#2B8F9E]" />
                      <span>{cab.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-[#986044]" />
                      <span>{cab.luggage}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1 pt-3 border-t border-gray-200/60 text-xs text-gray-500 mb-4">
                    {cab.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#10B981]" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day Package Base Price */}
                <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Local 8h/80km</span>
                    <span className="text-sm font-extrabold text-[#1F2E35]">
                      {cab.localDayRate}
                    </span>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-xl transition ${
                    isSelected ? 'bg-[#2B8F9E] text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {isSelected ? 'Selected' : 'Select'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Fare Calculator Widget */}
        <div className="bg-[#1F2E35] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-[#9EF2EB]/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-bold text-[#9EF2EB] uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Transparent Price Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Instant Dwarka Cab Fare Calculator
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Pickup Point */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 block flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9EF2EB]" />
                  Pickup Location
                </label>
                <select 
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-[#162126] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9EF2EB]"
                >
                  <option value="dwarka-local">Dwarka Railway Station / Hotel</option>
                  <option value="jamnagar-dwarka">Jamnagar Airport / Station (130 km)</option>
                  <option value="rajkot-dwarka">Rajkot International Airport (225 km)</option>
                  <option value="ahmedabad-dwarka">Ahmedabad Airport (440 km)</option>
                  <option value="somnath-dwarka">Somnath to Dwarka (230 km)</option>
                </select>
              </div>

              {/* Circuit Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#9EF2EB]" />
                  Tour Duration &amp; Route
                </label>
                <select 
                  value={circuitType}
                  onChange={(e) => setCircuitType(e.target.value)}
                  className="w-full bg-[#162126] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9EF2EB]"
                >
                  <option value="half-day">Half Day Local Darshan (4 hrs / 40 km)</option>
                  <option value="full-day-local">Full Day Local & Shivrajpur (8 hrs / 80 km)</option>
                  <option value="dwarka-bet-circuit">Full Circuit: Bet Dwarka + Sudarshan Setu + Nageshwar</option>
                  <option value="dwarka-somnath">Dwarka - Porbandar - Somnath Coastal Circuit</option>
                </select>
              </div>

              {/* Number of Days */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 block flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#9EF2EB]" />
                  Number of Days
                </label>
                <select 
                  value={tripDays}
                  onChange={(e) => setTripDays(Number(e.target.value))}
                  className="w-full bg-[#162126] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9EF2EB]"
                >
                  <option value={1}>1 Day (Express)</option>
                  <option value={2}>2 Days (Dwarka & Bet Dwarka)</option>
                  <option value={3}>3 Days (Dwarka + Somnath Combo)</option>
                  <option value={4}>4 Days (Complete Saurashtra)</option>
                </select>
              </div>
            </div>

            {/* Calculated Result Box */}
            <div className="p-6 rounded-2xl bg-[#162126] border border-[#9EF2EB]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs text-gray-400 block">
                  Estimated All-Inclusive Fare for <strong className="text-white">{currentCabObj.name}</strong>
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#9EF2EB]">
                    ₹{calculatedFare.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-gray-400">
                    (Includes Driver Allowance, AC, Fuel &amp; Taxes)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleWhatsAppBooking}
                  className="flex-grow sm:flex-grow-0 px-6 py-3.5 rounded-xl bg-[#10B981] hover:brightness-110 active:scale-95 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenBooking({ 
                    vehicle: currentCabObj.name, 
                    pickup: pickupLocation, 
                    price: calculatedFare 
                  })}
                  className="flex-grow sm:flex-grow-0 px-6 py-3.5 rounded-xl bg-[#2B8F9E] hover:bg-[#245B88] text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition"
                >
                  <span>Book with Details</span>
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                Zero prepayment needed to reserve local cabs
              </span>
              <span>Need immediate cab? Call helpline: +91 98250 12345</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
