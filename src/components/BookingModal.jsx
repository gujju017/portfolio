import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Car, 
  MapPin, 
  Phone, 
  User, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Send
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData, lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    date: new Date().toISOString().split('T')[0],
    package: initialData?.package || initialData?.destination || 'Complete Dwarka & Bet Dwarka Yatra',
    vehicle: initialData?.vehicle || 'Toyota Innova Crysta (Luxury 7 Seater)',
    passengers: initialData?.passengers || '4',
    specialRequest: 'Need VIP Darshan guidance for elderly family members'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = 'GTT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(newId);
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Jay Dwarkadhish!
New Yatra Booking Inquiry:
👤 Name: ${formData.name || 'Traveler'}
📞 Phone: ${formData.phone || 'Provided on chat'}
📍 City: ${formData.city || 'Gujarat/India'}
📅 Date: ${formData.date}
🛕 Package: ${formData.package}
🚗 Vehicle: ${formData.vehicle}
👥 Yatris: ${formData.passengers}
✨ Special Note: ${formData.specialRequest}

Please share confirmation and cab details.`;
    window.open(`https://wa.me/919825012345?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col my-auto">
        
        {/* Header */}
        <div className="bg-[#1F2E35] p-6 text-white flex justify-between items-start border-b border-[#9EF2EB]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#9EF2EB] uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Native Dwarka Travel Desk</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              {lang === 'gu' ? 'દ્વારકા યાત્રા બુકિંગ' : 'Book Your Dwarka Yatra'}
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Gujju Tour and Travels • Instant Confirmation with Zero Advance Booking
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {isSubmitted ? (
            /* Confirmation Voucher Screen */
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-black text-[#1F2E35]">
                Yatra Request Received!
              </h4>
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#9EF2EB]/30 text-[#1F2E35] text-xs font-black">
                Booking Reference: #{bookingId}
              </div>

              <p className="text-xs text-[#566E7A] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>! Our native Dwarka tour manager is reviewing your dates ({formData.date}) for <strong>{formData.package}</strong>. We will send the driver assignment slip within 15 minutes.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#10B981] hover:brightness-105 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp Now</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1F2E35] font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1F2E35] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#2B8F9E]" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rameshbhai Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-[#1F2E35] focus:outline-none focus:border-[#2B8F9E]"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1F2E35] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2B8F9E]" />
                    WhatsApp / Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-[#1F2E35] focus:outline-none focus:border-[#2B8F9E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* City of Origin */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1F2E35] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2B8F9E]" />
                    Your City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Ahmedabad / Mumbai"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-[#1F2E35] focus:outline-none focus:border-[#2B8F9E]"
                  />
                </div>

                {/* Date */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1F2E35] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#2B8F9E]" />
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    required
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-[#1F2E35] focus:outline-none focus:border-[#2B8F9E]"
                  />
                </div>

                {/* Number of Yatris */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1F2E35] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#2B8F9E]" />
                    Yatris Count
                  </label>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-[#1F2E35] focus:outline-none focus:border-[#2B8F9E]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="6">6 Persons</option>
                    <option value="8+">8+ Persons (Group)</option>
                  </select>
                </div>
              </div>

              {/* Package or Destination */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1F2E35] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#2B8F9E]" />
                  Selected Package / Itinerary
                </label>
                <input
                  type="text"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-[#1F2E35] focus:outline-none focus:border-[#2B8F9E]"
                />
              </div>

              {/* Vehicle Preference */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1F2E35] flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#2B8F9E]" />
                  Preferred AC Vehicle
                </label>
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-[#1F2E35] focus:outline-none focus:border-[#2B8F9E]"
                >
                  <option value="Maruti Dzire AC (4 Seater)">Maruti Dzire AC (Up to 4 Yatris)</option>
                  <option value="Maruti Ertiga Hybrid (6 Seater)">Maruti Ertiga Hybrid (Up to 6 Yatris)</option>
                  <option value="Toyota Innova Crysta (Luxury 7 Seater)">Toyota Innova Crysta (Luxury 7 Seater)</option>
                  <option value="Force Urbania / Tempo (17-20 Seater)">Force Urbania / Tempo (17-20 Seater Bus)</option>
                </select>
              </div>

              {/* Special Request */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1F2E35]">
                  Special Requirements (Wheelchair, VIP Darshan, Food Preferences)
                </label>
                <textarea
                  rows="2"
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-xs text-[#1F2E35] focus:outline-none focus:border-[#2B8F9E]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-grow py-3 px-4 rounded-xl bg-[#2B8F9E] hover:bg-[#1F2E35] text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Booking Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-5 rounded-xl bg-[#10B981] hover:brightness-105 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp</span>
                </button>
              </div>

              <div className="pt-1 text-center text-[11px] text-gray-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>100% Privacy • No payment needed upfront • Pay driver directly in Dwarka</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
