import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationsSection from './components/DestinationsSection';
import InteractiveRouteMap from './components/InteractiveRouteMap';
import PackagesSection from './components/PackagesSection';
import CabFleetCalculator from './components/CabFleetCalculator';
import DwarkaGuideSection from './components/DwarkaGuideSection';
import DestinationDetailModal from './components/DestinationDetailModal';
import MobileAppExperienceModal from './components/MobileAppExperienceModal';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isMobileAppOpen, setIsMobileAppOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Trigger booking modal with optional pre-filled data
  const handleOpenBooking = (data = null) => {
    setBookingInitialData(data);
    setIsBookingOpen(true);
  };

  // Open destination details modal
  const handleSelectDestination = (dest) => {
    setSelectedDestination(dest);
  };

  // Book from detail view
  const handleBookFromDetail = (dest) => {
    setSelectedDestination(null);
    handleOpenBooking({
      destination: dest.title,
      price: dest.pricePerPerson
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6FAF9] text-[#1F2E35]">
      {/* Navigation Header */}
      <Navbar 
        onOpenMobileApp={() => setIsMobileAppOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={handleOpenBooking}
          onSelectDestination={handleSelectDestination}
          lang={lang}
        />

        {/* Top Destinations Grid with AI Banner (Image 2 Inspired) */}
        <DestinationsSection 
          onSelectDestination={handleSelectDestination}
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* Interactive Route Map Navigator (Image 1 Inspired) */}
        <InteractiveRouteMap 
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* Handcrafted Packages & Flash Deals */}
        <PackagesSection 
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* Cab Fleet & Live Fare Calculator */}
        <CabFleetCalculator 
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* Local Dwarka Pilgrim Secrets & Food Guide */}
        <DwarkaGuideSection 
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
        onOpenMobileApp={() => setIsMobileAppOpen(true)}
        lang={lang}
      />

      {/* Modal 1: Destination Detail View (UI Reference Image 2 Style) */}
      {selectedDestination && (
        <DestinationDetailModal 
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onBookNow={handleBookFromDetail}
          lang={lang}
        />
      )}

      {/* Modal 2: Interactive Mobile App Preview Device (Replicating Both UI Images) */}
      <MobileAppExperienceModal 
        isOpen={isMobileAppOpen}
        onClose={() => setIsMobileAppOpen(false)}
        onBookTour={(data) => handleOpenBooking(data)}
      />

      {/* Modal 3: Booking Inquiry & Instant Voucher Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingInitialData}
        lang={lang}
      />
    </div>
  );
}
