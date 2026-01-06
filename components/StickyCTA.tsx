import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../constants';

const StickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
            isMinimized ? 'translate-y-0' : 'translate-y-0'
        }`}>
            <div className={`bg-white rounded-2xl shadow-2xl border-2 border-tropicam-orange overflow-hidden transition-all duration-300 ${
                isMinimized ? 'w-16 h-16' : 'w-auto'
            }`}>
                {!isMinimized ? (
                    <>
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-tropicam-orange to-orange-600 rounded-xl flex items-center justify-center">
                                    <MessageCircle className="text-white" size={24} />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-tropicam-navy text-sm mb-1">Besoin d'aide ?</p>
                                <p className="text-xs text-gray-600">Réponse en 5 minutes</p>
                            </div>
                            <button
                                onClick={() => setIsMinimized(true)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Minimiser"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="px-4 pb-4 flex gap-2">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </a>
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="flex-1 bg-tropicam-navy hover:bg-tropicam-navy/90 text-white px-4 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                            >
                                <Phone size={18} />
                                Appeler
                            </a>
                        </div>
                    </>
                ) : (
                    <button
                        onClick={() => setIsMinimized(false)}
                        className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-tropicam-orange to-orange-600 text-white hover:from-orange-600 hover:to-tropicam-orange transition-all rounded-full"
                        aria-label="Ouvrir"
                    >
                        <MessageCircle size={24} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default StickyCTA;


