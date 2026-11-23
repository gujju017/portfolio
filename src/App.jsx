import { useState } from 'react';
import BookingModal from './components/BookingModal';
import CabFleetCalculator from './components/CabFleetCalculator';
import DestinationDetailModal from './components/DestinationDetailModal';
import DestinationsSection from './components/DestinationsSection';
import DwarkaGuideSection from './components/DwarkaGuideSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InteractiveRouteMap from './components/InteractiveRouteMap';
import Navbar from './components/Navbar';
import PackagesSection from './components/PackagesSection';

export default function App() {
  const [lang, setLang] = useState('en');
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
        {/* Add Dwarkadarsan details */}
        <DwarkaGuideSection
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
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
