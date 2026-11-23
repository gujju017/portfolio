import {
  Calendar,
  CheckCircle2,
  Clock,
  Flame,
  Lock,
  Moon,
  Sparkles,
  Sun
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { DWARKA_DARSHAN_SCHEDULE } from '../data/dwarkaData';

export default function DwarkaGuideSection({ lang }) {
  const [activeTab, setActiveTab] = useState('all'); // 'morning' | 'evening' | 'all'
  const [filterType, setFilterType] = useState('all'); // 'all' | 'aarti' | 'open' | 'closed'
  const [simulatedMinutes, setSimulatedMinutes] = useState(null); // null = use real time, or minute number (0-1439)
  const [currentTime, setCurrentTime] = useState(new Date());

  // Live timer tick every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute current minute of the day (0 - 1439)
  const currentMinutes = simulatedMinutes !== null
    ? simulatedMinutes
    : currentTime.getHours() * 60 + currentTime.getMinutes();

  // Helper to format minutes into AM/PM string
  const formatMinutesToTime = (min) => {
    const totalMinutes = ((min % 1440) + 1440) % 1440;
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    const displayMins = mins < 10 ? `0${mins}` : mins;
    return `${displayHours < 10 ? '0' : ''}${displayHours}:${displayMins} ${period}`;
  };

  // Determine Live Mandir Status based on current minute of the day
  // Morning: 06:30 AM (390m) to 01:00 PM (780m)
  // Evening: 05:00 PM (1020m) to 09:30 PM (1290m)
  const getMandirLiveStatus = (min) => {
    // Exact intervals from the official schedule:
    // 00:00 to 06:30 (0 - 390m): Night closed
    if (min < 390) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'રાત્રિ વિશ્રામ – મંદિર સવારે ૦૬:૩૦ વાગ્યે મંગળા આરતી સાથે ખુલશે',
        reasonEn: 'Night Rest – Temple reopens at 06:30 AM with Mangala Aarti',
        nextEventGu: 'મંગળા આરતી – સવારે ૦૬:૩૦ વાગ્યે',
        nextEventEn: 'Mangala Aarti at 06:30 AM',
        reopenTime: '06:30 AM',
        activeSlotId: 'night'
      };
    }
    // 06:30 - 08:00 (390 - 480m): Mangala Aarti (06:30) & Mangala Darshan -> OPEN
    if (min >= 390 && min < 480) {
      const isAarti = min >= 390 && min < 400;
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: isAarti ? 'મંગળા આરતી દર્શન ચાલુ છે' : 'મંગળા દર્શન ચાલુ છે (૦૬:૩૦ AM – ૦૮:૦૦ AM)',
        reasonEn: isAarti ? 'Mangala Aarti in progress' : 'Mangala Darshan Open (06:30 AM – 08:00 AM)',
        nextEventGu: 'અભિષેક પૂજા (દર્શન બંધ) – સવારે ૦૮:૦૦ વાગ્યે',
        nextEventEn: 'Abhishek Puja (Closed) at 08:00 AM',
        activeSlotId: isAarti ? 'm1' : 'm2'
      };
    }
    // 08:00 - 09:00 (480 - 540m): Abhishek Puja -> CLOSED
    if (min >= 480 && min < 540) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'અભિષેક પૂજા ચાલુ છે (દર્શન બંધ)',
        reasonEn: 'Abhishek Puja in progress (Darshan Closed)',
        nextEventGu: 'શૃંગાર દર્શન ખુલશે – સવારે ૦૯:૦૦ વાગ્યે',
        nextEventEn: 'Shringar Darshan opens at 09:00 AM',
        reopenTime: '09:00 AM',
        activeSlotId: 'm3'
      };
    }
    // 09:00 - 09:30 (540 - 570m): Shringar Darshan -> OPEN
    if (min >= 540 && min < 570) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'શૃંગાર દર્શન ચાલુ છે (૦૯:૦૦ AM – ૦૯:૩૦ AM)',
        reasonEn: 'Shringar Darshan Open (09:00 AM – 09:30 AM)',
        nextEventGu: 'સ્નાન ભોગ (દર્શન બંધ) – સવારે ૦૯:૩૦ વાગ્યે',
        nextEventEn: 'Snan Bhog (Closed) at 09:30 AM',
        activeSlotId: 'm4'
      };
    }
    // 09:30 - 09:45 (570 - 585m): Snan Bhog -> CLOSED
    if (min >= 570 && min < 585) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'સ્નાન ભોગ – દર્શન બંધ છે',
        reasonEn: 'Snan Bhog (Darshan Closed)',
        nextEventGu: 'શૃંગાર દર્શન પુનઃ ખુલશે – સવારે ૦૯:૪૫ વાગ્યે',
        nextEventEn: 'Shringar Darshan reopens at 09:45 AM',
        reopenTime: '09:45 AM',
        activeSlotId: 'm5'
      };
    }
    // 09:45 - 10:15 (585 - 615m): Shringar Darshan -> OPEN
    if (min >= 585 && min < 615) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'શૃંગાર દર્શન ચાલુ છે (૦૯:૪૫ AM – ૧૦:૧૫ AM)',
        reasonEn: 'Shringar Darshan Open (09:45 AM – 10:15 AM)',
        nextEventGu: 'શૃંગાર ભોગ (દર્શન બંધ) – સવારે ૧૦:૧૫ વાગ્યે',
        nextEventEn: 'Shringar Bhog (Closed) at 10:15 AM',
        activeSlotId: 'm6'
      };
    }
    // 10:15 - 10:30 (615 - 630m): Shringar Bhog -> CLOSED
    if (min >= 615 && min < 630) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'શૃંગાર ભોગ – દર્શન બંધ છે',
        reasonEn: 'Shringar Bhog (Darshan Closed)',
        nextEventGu: 'શૃંગાર આરતી – સવારે ૧૦:૩૦ વાગ્યે',
        nextEventEn: 'Shringar Aarti at 10:30 AM',
        reopenTime: '10:30 AM',
        activeSlotId: 'm7'
      };
    }
    // 10:30 - 11:05 (630 - 665m): Shringar Aarti (10:30-10:45) & Darshan Open -> OPEN
    if (min >= 630 && min < 665) {
      const isAarti = min < 645;
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: isAarti ? 'શૃંગાર આરતી દર્શન ચાલુ છે (૧૦:૩૦ AM – ૧૦:૪૫ AM)' : 'દર્શન ચાલુ છે',
        reasonEn: isAarti ? 'Shringar Aarti in progress' : 'Darshan Open',
        nextEventGu: 'ગ્વાલ ભોગ (દર્શન બંધ) – સવારે ૧૧:૦૫ વાગ્યે',
        nextEventEn: 'Gwal Bhog (Closed) at 11:05 AM',
        activeSlotId: isAarti ? 'm8' : 'm8-open'
      };
    }
    // 11:05 - 11:20 (665 - 680m): Gwal Bhog -> CLOSED
    if (min >= 665 && min < 680) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'ગ્વાલ ભોગ – દર્શન બંધ છે',
        reasonEn: 'Gwal Bhog (Darshan Closed)',
        nextEventGu: 'દર્શન પુનઃ ખુલશે – સવારે ૧૧:૨૦ વાગ્યે',
        nextEventEn: 'Darshan reopens at 11:20 AM',
        reopenTime: '11:20 AM',
        activeSlotId: 'm9'
      };
    }
    // 11:20 - 12:00 (680 - 720m): Darshan Open -> OPEN
    if (min >= 680 && min < 720) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'દર્શન ચાલુ છે (૧૧:૨૦ AM – ૧૨:૦૦ PM)',
        reasonEn: 'Darshan Open (11:20 AM – 12:00 PM)',
        nextEventGu: 'રાજભોગ (દર્શન બંધ) – બપોરે ૧૨:૦૦ વાગ્યે',
        nextEventEn: 'Rajbhog (Closed) at 12:00 PM',
        activeSlotId: 'm10'
      };
    }
    // 12:00 - 12:20 (720 - 740m): Rajbhog -> CLOSED
    if (min >= 720 && min < 740) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'રાજભોગ – દર્શન બંધ છે',
        reasonEn: 'Rajbhog (Darshan Closed)',
        nextEventGu: 'દર્શન પુનઃ ખુલશે – બપોરે ૧૨:૨૦ વાગ્યે',
        nextEventEn: 'Darshan reopens at 12:20 PM',
        reopenTime: '12:20 PM',
        activeSlotId: 'm11'
      };
    }
    // 12:20 - 13:00 (740 - 780m): Darshan Open -> OPEN
    if (min >= 740 && min < 780) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'દર્શન ચાલુ છે (૧૨:૨૦ PM – ૦૧:૦૦ PM)',
        reasonEn: 'Darshan Open (12:20 PM – 01:00 PM)',
        nextEventGu: 'અનોષર (બપોરે મંદિર બંધ) – ૦૧:૦૦ PM',
        nextEventEn: 'Anosar (Afternoon Temple Closed) at 01:00 PM',
        activeSlotId: 'm12'
      };
    }
    // 13:00 - 17:00 (780 - 1020m): Anosar (Afternoon Break) -> CLOSED
    if (min >= 780 && min < 1020) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'અનોષર – બપોરે મંદિર બંધ છે',
        reasonEn: 'Anosar (Temple closed for afternoon rest)',
        nextEventGu: 'સાંજે દર્શન ખુલશે – સાંજે ૦૫:૦૦ વાગ્યે',
        nextEventEn: 'Evening Darshan reopens at 05:00 PM',
        reopenTime: '05:00 PM',
        activeSlotId: 'm13'
      };
    }
    // 17:00 - 17:30 (1020 - 1050m): Evening Darshan Open -> OPEN
    if (min >= 1020 && min < 1050) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'સાંજે દર્શન ચાલુ છે (૦૫:૦૦ PM – ૦૫:૩૦ PM)',
        reasonEn: 'Evening Darshan Open (05:00 PM – 05:30 PM)',
        nextEventGu: 'ઉત્થાપન ભોગ (દર્શન બંધ) – ૦૫:૩૦ PM',
        nextEventEn: 'Uthapan Bhog (Closed) at 05:30 PM',
        activeSlotId: 'e1'
      };
    }
    // 17:30 - 17:45 (1050 - 1065m): Uthapan Bhog -> CLOSED
    if (min >= 1050 && min < 1065) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'ઉત્થાપન ભોગ – દર્શન બંધ છે',
        reasonEn: 'Uthapan Bhog (Darshan Closed)',
        nextEventGu: 'દર્શન પુનઃ ખુલશે – સાંજે ૦૫:૪૫ વાગ્યે',
        nextEventEn: 'Darshan reopens at 05:45 PM',
        reopenTime: '05:45 PM',
        activeSlotId: 'e2'
      };
    }
    // 17:45 - 19:15 (1065 - 1155m): Darshan Open -> OPEN (Includes 6:00 PM = 1080m!)
    if (min >= 1065 && min < 1155) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'દર્શન ચાલુ છે (૦૫:૪૫ PM – ૦૭:૧૫ PM)',
        reasonEn: 'Darshan Open (05:45 PM – 07:15 PM)',
        nextEventGu: 'સંધ્યા ભોગ – ૦૭:૧૫ PM • સંધ્યા આરતી – ૦૭:૩૦ PM',
        nextEventEn: 'Sandhya Bhog at 07:15 PM • Sandhya Aarti at 07:30 PM',
        activeSlotId: 'e3'
      };
    }
    // 19:15 - 19:30 (1155 - 1170m): Sandhya Bhog -> CLOSED
    if (min >= 1155 && min < 1170) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'સંધ્યા ભોગ – દર્શન બંધ છે',
        reasonEn: 'Sandhya Bhog (Darshan Closed)',
        nextEventGu: 'સંધ્યા આરતી દર્શન – સાંજે ૦૭:૩૦ વાગ્યે',
        nextEventEn: 'Sandhya Aarti at 07:30 PM',
        reopenTime: '07:30 PM',
        activeSlotId: 'e4'
      };
    }
    // 19:30 - 20:00 (1170 - 1200m): Sandhya Aarti (19:30 - 19:45) & Open -> OPEN
    if (min >= 1170 && min < 1200) {
      const isAarti = min < 1185;
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: isAarti ? 'સંધ્યા આરતી દર્શન ચાલુ છે (૦૭:૩૦ PM – ૦૭:૪૫ PM)' : 'દર્શન ચાલુ છે',
        reasonEn: isAarti ? 'Sandhya Aarti in progress' : 'Darshan Open',
        nextEventGu: 'શયન ભોગ (દર્શન બંધ) – રાત્રે ૦૮:૦૦ વાગ્યે',
        nextEventEn: 'Shayan Bhog (Closed) at 08:00 PM',
        activeSlotId: isAarti ? 'e5' : 'e5-open'
      };
    }
    // 20:00 - 20:10 (1200 - 1210m): Shayan Bhog -> CLOSED
    if (min >= 1200 && min < 1210) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'શયન ભોગ – દર્શન બંધ છે',
        reasonEn: 'Shayan Bhog (Darshan Closed)',
        nextEventGu: 'દર્શન પુનઃ ખુલશે – રાત્રે ૦૮:૧૦ વાગ્યે',
        nextEventEn: 'Darshan reopens at 08:10 PM',
        reopenTime: '08:10 PM',
        activeSlotId: 'e6'
      };
    }
    // 20:10 - 20:30 (1210 - 1230m): Darshan Open -> OPEN
    if (min >= 1210 && min < 1230) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'દર્શન ચાલુ છે (૦૮:૧૦ PM – ૦૮:૩૦ PM)',
        reasonEn: 'Darshan Open (08:10 PM – 08:30 PM)',
        nextEventGu: 'શયન આરતી – રાત્રે ૦૮:૩૦ વાગ્યે',
        nextEventEn: 'Shayan Aarti at 08:30 PM',
        activeSlotId: 'e7'
      };
    }
    // 20:30 - 20:35 (1230 - 1235m): Shayan Aarti -> OPEN
    if (min >= 1230 && min < 1235) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'શયન આરતી દર્શન ચાલુ છે (૦૮:૩૦ PM – ૦૮:૩૫ PM)',
        reasonEn: 'Shayan Aarti in progress (08:30 PM – 08:35 PM)',
        nextEventGu: 'દર્શન ચાલુ રહેશે – ૦૮:૩૫ PM થી',
        nextEventEn: 'Darshan continues from 08:35 PM',
        activeSlotId: 'e8'
      };
    }
    // 20:35 - 21:00 (1235 - 1260m): Darshan Open -> OPEN
    if (min >= 1235 && min < 1260) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'દર્શન ચાલુ છે (૦૮:૩૫ PM – ૦૯:૦૦ PM)',
        reasonEn: 'Darshan Open (08:35 PM – 09:00 PM)',
        nextEventGu: 'શયન (દર્શન બંધ) – રાત્રે ૦૯:૦૦ વાગ્યે',
        nextEventEn: 'Shayan (Closed) at 09:00 PM',
        activeSlotId: 'e9'
      };
    }
    // 21:00 - 21:20 (1260 - 1280m): Shayan -> CLOSED
    if (min >= 1260 && min < 1280) {
      return {
        isOpen: false,
        statusTextGu: 'દર્શન બંધ છે',
        statusTextEn: 'DARSHAN CLOSED',
        reasonGu: 'શયન – દર્શન બંધ છે',
        reasonEn: 'Shayan (Darshan Closed)',
        nextEventGu: 'અંતિમ દર્શન ખુલશે – રાત્રે ૦૯:૨૦ વાગ્યે',
        nextEventEn: 'Final Darshan opens at 09:20 PM',
        reopenTime: '09:20 PM',
        activeSlotId: 'e10'
      };
    }
    // 21:20 - 21:30 (1280 - 1290m): Final Darshan Open -> OPEN
    if (min >= 1280 && min < 1290) {
      return {
        isOpen: true,
        statusTextGu: 'દર્શન ચાલુ છે',
        statusTextEn: 'DARSHAN OPEN',
        reasonGu: 'અંતિમ દર્શન ચાલુ છે (૦૯:૨૦ PM – ૦૯:૩૦ PM)',
        reasonEn: 'Final Darshan Open (09:20 PM – 09:30 PM)',
        nextEventGu: 'દર્શન બંધ (રાત્રિ વિશ્રામ) – ૦૯:૩૦ PM',
        nextEventEn: 'Temple Closes for Night at 09:30 PM',
        activeSlotId: 'e11'
      };
    }
    // 21:30 onwards (1290 - 1440m): Night closed -> CLOSED
    return {
      isOpen: false,
      statusTextGu: 'દર્શન બંધ છે',
      statusTextEn: 'DARSHAN CLOSED',
      reasonGu: 'દર્શન બંધ (રાત્રિ વિશ્રામ) – મંદિર આવતીકાલે સવારે ૦૬:૩૦ વાગ્યે ખુલશે',
      reasonEn: 'Temple Closed for Night – Reopens tomorrow at 06:30 AM with Mangala Aarti',
      nextEventGu: 'મંગળા આરતી – સવારે ૦૬:૩૦ વાગ્યે',
      nextEventEn: 'Mangala Aarti tomorrow at 06:30 AM',
      reopenTime: '06:30 AM',
      activeSlotId: 'e12'
    };
  };

  const mandirStatus = getMandirLiveStatus(currentMinutes);

  // Combine items according to active tab
  const getDisplayItems = () => {
    let items = [];
    if (activeTab === 'morning') {
      items = DWARKA_DARSHAN_SCHEDULE.morning;
    } else if (activeTab === 'evening') {
      items = DWARKA_DARSHAN_SCHEDULE.evening;
    } else {
      items = [
        ...DWARKA_DARSHAN_SCHEDULE.morning.map(item => ({ ...item, session: 'morning' })),
        ...DWARKA_DARSHAN_SCHEDULE.evening.map(item => ({ ...item, session: 'evening' }))
      ];
    }

    if (filterType === 'aarti') {
      return items.filter(item => item.isAarti);
    }
    if (filterType === 'open') {
      return items.filter(item => item.status === 'open');
    }
    if (filterType === 'closed') {
      return items.filter(item => item.status === 'closed');
    }
    return items;
  };

  const displaySchedule = getDisplayItems();

  return (
    <section id="dwarka-guide" className="py-20 bg-gradient-to-b from-[#EBF4F5] via-[#F6FAF9] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#986044]/10 border border-[#986044]/30 text-[#986044] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'gu' ? 'જગત મંદિર લાઈવ દર્શન & માર્ગદર્શિકા' : 'Live Jagat Mandir Darshan & Native Pilgrim Guide'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2E35] tracking-tight">
            {lang === 'gu' ? 'શ્રી દ્વારકાધીશ મંદિર દર્શન અને આરતી સમયપત્રક' : 'Shree Dwarkadhish Mandir Live Status & Darshan Timings'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#566E7A] leading-relaxed">
            {lang === 'gu'
              ? 'મુખ્ય જગત મંદિરની મંગળા આરતી, શૃંગાર આરતી, સંધ્યા આરતી અને ભોગ દર્શનના તમામ અધિકૃત સમય તથા લાઈવ સ્થિતિ.'
              : 'Official and updated daily schedule of Mangala Aarti, Shringar Aarti, Sandhya Aarti, Shayan, and Darshan Open/Closed intervals.'}
          </p>
        </div>

        {/* ======================================================== */}
        {/* PRIMARY SHOWCASE CARD: LIVE MANDIR STATUS & FULL SCHEDULE */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-gray-100 mb-14 relative overflow-hidden">

          {/* Top Live Status Banner: Red if Closed, Green if Open */}
          <div
            className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${mandirStatus.isOpen
              ? 'bg-gradient-to-r from-emerald-500/10 via-emerald-50/80 to-teal-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/5'
              : 'bg-gradient-to-r from-rose-500/10 via-rose-50/80 to-red-500/10 border-rose-500/40 shadow-lg shadow-rose-500/5'
              }`}
          >
            {/* Background Decorative Rings */}
            <div
              className={`absolute -right-12 -top-12 w-44 h-44 rounded-full opacity-20 pointer-events-none blur-2xl ${mandirStatus.isOpen ? 'bg-emerald-400' : 'bg-rose-400'
                }`}
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">

              {/* Left Column: Live Status & Details */}
              <div className="flex items-start gap-4">
                {/* Glowing Beacon Indicator */}
                <div className="relative mt-1 flex-shrink-0">
                  <span
                    className={`w-5 h-5 rounded-full absolute animate-ping opacity-75 ${mandirStatus.isOpen ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                  />
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md ${mandirStatus.isOpen ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                      }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>

                <div>
                  {/* Status Headline in requested Green or Red */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`text-xl sm:text-2xl font-black tracking-tight ${mandirStatus.isOpen ? 'text-emerald-700' : 'text-rose-600'
                        }`}
                    >
                      {lang === 'gu' ? mandirStatus.statusTextGu : mandirStatus.statusTextEn}
                    </span>

                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider ${mandirStatus.isOpen
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-rose-600 text-white shadow-sm'
                        }`}
                    >
                      {mandirStatus.isOpen ? 'OPEN NOW' : 'CLOSED NOW'}
                    </span>
                  </div>

                  {/* Necessary Details: Activity, Intervals & Reopen Time */}
                  <p className="text-sm font-bold text-[#1F2E35] mt-1.5 flex items-center gap-1.5 flex-wrap">
                    <span>{lang === 'gu' ? mandirStatus.reasonGu : mandirStatus.reasonEn}</span>
                  </p>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-xs">
                    <span className="text-[#566E7A] flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#2B8F9E]" />
                      <span>{lang === 'gu' ? 'આગામી ક્રમ:' : 'Next Event:'}</span>
                      <strong className="text-[#1F2E35]">{lang === 'gu' ? mandirStatus.nextEventGu : mandirStatus.nextEventEn}</strong>
                    </span>

                    {!mandirStatus.isOpen && mandirStatus.reopenTime && (
                      <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 font-bold">
                        {lang === 'gu' ? `પુનઃ દર્શન: ${mandirStatus.reopenTime}` : `Reopens: ${mandirStatus.reopenTime}`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Navigation Bar: Morning / Evening Tabs & Category Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-8 mb-6 pb-4 border-b border-gray-100">

            {/* Session Switcher (Morning / Evening / All) */}
            <div className="flex items-center gap-2 p-1 rounded-2xl bg-gray-100/80 border border-gray-200">
              <button
                onClick={() => setActiveTab('morning')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'morning'
                  ? 'bg-[#1F2E35] text-white shadow-md'
                  : 'text-[#566E7A] hover:text-[#1F2E35]'
                  }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'gu' ? '૧. સવારનું દર્શન (Morning)' : '1. Morning Schedule'}</span>
              </button>

              <button
                onClick={() => setActiveTab('evening')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'evening'
                  ? 'bg-[#1F2E35] text-white shadow-md'
                  : 'text-[#566E7A] hover:text-[#1F2E35]'
                  }`}
              >
                <Moon className="w-3.5 h-3.5 text-[#9EF2EB]" />
                <span>{lang === 'gu' ? '૨. સાંજનું દર્શન (Evening)' : '2. Evening Schedule'}</span>
              </button>

              <button
                onClick={() => setActiveTab('all')}
                className={`hidden md:flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'all'
                  ? 'bg-[#1F2E35] text-white shadow-md'
                  : 'text-[#566E7A] hover:text-[#1F2E35]'
                  }`}
              >
                <Calendar className="w-3.5 h-3.5 text-[#2B8F9E]" />
                <span>{lang === 'gu' ? 'સંપૂર્ણ (All Day)' : 'Full Day'}</span>
              </button>
            </div>

            {/* Quick Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition ${filterType === 'all'
                  ? 'bg-[#2B8F9E] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {lang === 'gu' ? 'બધા (All)' : 'All Activities'}
              </button>

              <button
                onClick={() => setFilterType('aarti')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition ${filterType === 'aarti'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200'
                  }`}
              >
                <Flame className="w-3.5 h-3.5 fill-amber-500" />
                <span>{lang === 'gu' ? 'આરતી સમય' : 'Aarti Only'}</span>
              </button>

              <button
                onClick={() => setFilterType('open')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition ${filterType === 'open'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                  }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{lang === 'gu' ? 'દર્શન ચાલુ' : 'Darshan Open'}</span>
              </button>

              <button
                onClick={() => setFilterType('closed')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition ${filterType === 'closed'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                  }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{lang === 'gu' ? 'ભોગ / દર્શન બંધ' : 'Closed / Bhog'}</span>
              </button>
            </div>

          </div>

          {/* Schedule Table / Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {displaySchedule.map((item) => {
              const isOpen = item.status === 'open';
              const isAarti = item.isAarti;
              const isActiveSlot = mandirStatus.activeSlotId === item.id;

              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${isActiveSlot
                    ? 'border-[#2B8F9E] bg-gradient-to-br from-[#9EF2EB]/20 to-white shadow-lg ring-2 ring-[#2B8F9E]/40 scale-[1.02]'
                    : 'border-gray-100 bg-[#FBFDFC] hover:border-[#2B8F9E]/30 hover:shadow-md'
                    }`}
                >
                  <div>
                    {/* Top Row: Time & Type Badge */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1.5 font-black text-sm text-[#1F2E35]">
                        <Clock className="w-3.5 h-3.5 text-[#2B8F9E]" />
                        <span>{item.time}</span>
                      </div>

                      {/* Status Tag */}
                      {isAarti ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-white shadow-sm">
                          <Flame className="w-3 h-3 fill-white" />
                          <span>AARTI</span>
                        </span>
                      ) : isOpen ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>OPEN</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800">
                          <Lock className="w-3 h-3 text-rose-600" />
                          <span>CLOSED</span>
                        </span>
                      )}
                    </div>

                    {/* Activity / Details in Gujarati & English */}
                    <h4 className="text-sm font-extrabold text-[#1F2E35] group-hover:text-[#2B8F9E] transition-colors leading-snug">
                      {item.activityGu}
                    </h4>
                    <p className="text-xs text-[#566E7A] mt-0.5 font-medium">
                      {item.activityEn}
                    </p>
                  </div>

                  {/* Bottom Indicator if active right now */}
                  {isActiveSlot && (
                    <div className="mt-3 pt-2 border-t border-[#2B8F9E]/20 flex items-center justify-between text-[11px] font-bold text-[#2B8F9E]">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                        <span>{lang === 'gu' ? 'હાલમાં ચાલુ છે' : 'Currently Active Slot'}</span>
                      </span>
                      <span>Now</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
