import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Services from './pages/Services';
import TurkeyLP from './pages/TurkeyLP';
import DubaiLP from './pages/DubaiLP';
import OmraLP from './pages/OmraLP';
import TurkeyIstanbul from './pages/destinations/TurkeyIstanbul';
import TurkeyAntalya from './pages/destinations/TurkeyAntalya';
import TurkeyCappadoce from './pages/destinations/TurkeyCappadoce';
import Hajj from './pages/Hajj';
import Umrah from './pages/Umrah';
import OmraRamadan from './pages/OmraRamadan';
import Egypt from './pages/destinations/Egypt';
import Visa from './pages/Visa';
import AssuranceVoyage from './pages/AssuranceVoyage';
import VoyageDeNoces from './pages/VoyageDeNoces';
import VacancesFamille from './pages/VacancesFamille';
import VoyagesPasCher from './pages/VoyagesPasCher';
import ConditionsGenerales from './pages/ConditionsGenerales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import WhatsAppButton from './components/WhatsAppButton';
import StickyCTA from './components/StickyCTA';
import DealBanner from './components/DealBanner';
import SocialProofNotification from './components/SocialProofNotification';
import ExitPopup from './components/ExitPopup';
import CookieConsent from './components/CookieConsent';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    // Also show popup after 45 seconds if user hasn't left
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShownPopup]);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="font-sans text-gray-800 antialiased selection:bg-tropicam-orange selection:text-white overflow-x-hidden">
        {/* Deal Banner at very top */}
        <DealBanner />

        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            {/* SEO Landing Pages - Outbound Travel (Moroccans traveling abroad) */}
            <Route path="/voyage-turquie" element={<TurkeyLP />} />
            <Route path="/voyage-dubai" element={<DubaiLP />} />
            <Route path="/omra-2025" element={<OmraLP />} />
            {/* Religious Travel - CRITICAL for Morocco */}
            <Route path="/hajj" element={<Hajj />} />
            <Route path="/omra" element={<Umrah />} />
            <Route path="/omra-ramadan" element={<OmraRamadan />} />
            {/* Service Pages */}
            <Route path="/visa" element={<Visa />} />
            <Route path="/assurance-voyage" element={<AssuranceVoyage />} />
            {/* Package Type Pages */}
            <Route path="/voyage-de-noces" element={<VoyageDeNoces />} />
            <Route path="/vacances-en-famille" element={<VacancesFamille />} />
            <Route path="/voyages-pas-cher" element={<VoyagesPasCher />} />
            {/* Legal Pages */}
            <Route path="/conditions-generales" element={<ConditionsGenerales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            {/* Destination Sub-pages */}
            <Route path="/destinations/turquie/istanbul" element={<TurkeyIstanbul />} />
            <Route path="/destinations/turquie/antalya" element={<TurkeyAntalya />} />
            <Route path="/destinations/turquie/cappadoce" element={<TurkeyCappadoce />} />
            <Route path="/destinations/egypte" element={<Egypt />} />
          </Routes>
        </main>
        <Footer />

        {/* Premium Interactive Elements */}
        <WhatsAppButton />
        <StickyCTA />
        <SocialProofNotification />
        <ExitPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />
        <CookieConsent />
      </div>
    </HashRouter>
  );
};

export default App;