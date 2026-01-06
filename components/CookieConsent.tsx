import React, { useState, useEffect } from 'react';
import { X, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAcceptAll = () => {
        setPreferences({ necessary: true, analytics: true, marketing: true });
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookiePreferences', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
        setIsVisible(false);
    };

    const handleRejectNonEssential = () => {
        setPreferences({ necessary: true, analytics: false, marketing: false });
        localStorage.setItem('cookieConsent', 'rejected');
        localStorage.setItem('cookiePreferences', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookieConsent', 'custom');
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        setIsVisible(false);
        setShowSettings(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 max-w-4xl mx-auto">
                {!showSettings ? (
                    <div className="p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                <Settings className="text-blue-600" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-tropicam-navy mb-2">Nous utilisons des cookies</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Ce site utilise des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. 
                                    Vous pouvez accepter tous les cookies, rejeter les non essentiels, ou personnaliser vos préférences.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={handleAcceptAll}
                                        className="bg-tropicam-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors"
                                    >
                                        Tout Accepter
                                    </button>
                                    <button
                                        onClick={handleRejectNonEssential}
                                        className="bg-gray-200 hover:bg-gray-300 text-tropicam-navy px-6 py-2.5 rounded-lg font-bold text-sm transition-colors"
                                    >
                                        Rejeter les Non Essentiels
                                    </button>
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="border-2 border-tropicam-navy hover:bg-gray-50 text-tropicam-navy px-6 py-2.5 rounded-lg font-bold text-sm transition-colors"
                                    >
                                        Personnaliser
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-4">
                                    En continuant, vous acceptez notre <Link to="/politique-confidentialite" className="text-tropicam-orange underline">politique de confidentialité</Link>
                                </p>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-gray-400 hover:text-gray-600 shrink-0"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-tropicam-navy">Paramètres des Cookies</h3>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4 mb-6">
                            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer">
                                <div>
                                    <div className="font-bold text-tropicam-navy">Cookies Nécessaires</div>
                                    <div className="text-sm text-gray-600">Essentiels au fonctionnement du site</div>
                                </div>
                                <div className="w-12 h-6 bg-tropicam-orange rounded-full flex items-center justify-end px-1">
                                    <Check className="text-white" size={16} />
                                </div>
                            </label>

                            <label className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                <div>
                                    <div className="font-bold text-tropicam-navy">Cookies Analytiques</div>
                                    <div className="text-sm text-gray-600">Pour analyser l'utilisation du site</div>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={preferences.analytics}
                                    onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                                    className="w-12 h-6 bg-gray-300 rounded-full appearance-none checked:bg-tropicam-orange transition-colors relative"
                                />
                            </label>

                            <label className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                <div>
                                    <div className="font-bold text-tropicam-navy">Cookies Marketing</div>
                                    <div className="text-sm text-gray-600">Pour personnaliser les publicités</div>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={preferences.marketing}
                                    onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                                    className="w-12 h-6 bg-gray-300 rounded-full appearance-none checked:bg-tropicam-orange transition-colors relative"
                                />
                            </label>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleSavePreferences}
                                className="flex-1 bg-tropicam-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                            >
                                Enregistrer les Préférences
                            </button>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="border-2 border-gray-300 hover:bg-gray-50 text-tropicam-navy px-6 py-3 rounded-lg font-bold transition-colors"
                            >
                                Annuler
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CookieConsent;

