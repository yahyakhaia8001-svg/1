import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

interface DepartureCitySelectorProps {
    onSelect?: (city: string) => void;
    defaultCity?: string;
}

const DEPARTURE_CITIES = [
    { name: 'Casablanca', code: 'CMN', popular: true },
    { name: 'Rabat', code: 'RBA', popular: true },
    { name: 'Marrakech', code: 'RAK', popular: true },
    { name: 'Fès', code: 'FEZ' },
    { name: 'Tanger', code: 'TNG' },
    { name: 'Agadir', code: 'AGA' },
    { name: 'Oujda', code: 'OUD' },
    { name: 'Nador', code: 'NDR' },
];

const DepartureCitySelector: React.FC<DepartureCitySelectorProps> = ({ onSelect, defaultCity = 'Casablanca' }) => {
    const [selectedCity, setSelectedCity] = useState(defaultCity);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (city: string) => {
        setSelectedCity(city);
        setIsOpen(false);
        if (onSelect) {
            onSelect(city);
        }
    };

    const selectedCityData = DEPARTURE_CITIES.find(c => c.name === selectedCity);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between hover:border-tropicam-orange transition-colors focus:outline-none focus:ring-2 focus:ring-tropicam-orange/20"
            >
                <div className="flex items-center gap-3">
                    <MapPin className="text-tropicam-orange" size={20} />
                    <div className="text-left">
                        <div className="text-xs text-gray-500 font-bold uppercase">Ville de départ</div>
                        <div className="font-bold text-tropicam-navy">{selectedCity}</div>
                    </div>
                </div>
                <ChevronDown className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} size={20} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    ></div>
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-20 max-h-80 overflow-y-auto">
                        <div className="p-2">
                            <div className="text-xs font-bold text-gray-500 uppercase px-3 py-2">Villes populaires</div>
                            {DEPARTURE_CITIES.filter(c => c.popular).map((city) => (
                                <button
                                    key={city.code}
                                    onClick={() => handleSelect(city.name)}
                                    className={`w-full text-left px-4 py-3 rounded-lg hover:bg-tropicam-orange/10 transition-colors ${
                                        selectedCity === city.name ? 'bg-tropicam-orange/20 font-bold' : ''
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-tropicam-navy">{city.name}</span>
                                        {selectedCity === city.name && (
                                            <span className="text-tropicam-orange">✓</span>
                                        )}
                                    </div>
                                </button>
                            ))}
                            <div className="border-t border-gray-200 my-2"></div>
                            <div className="text-xs font-bold text-gray-500 uppercase px-3 py-2">Autres villes</div>
                            {DEPARTURE_CITIES.filter(c => !c.popular).map((city) => (
                                <button
                                    key={city.code}
                                    onClick={() => handleSelect(city.name)}
                                    className={`w-full text-left px-4 py-3 rounded-lg hover:bg-tropicam-orange/10 transition-colors ${
                                        selectedCity === city.name ? 'bg-tropicam-orange/20 font-bold' : ''
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-tropicam-navy">{city.name}</span>
                                        {selectedCity === city.name && (
                                            <span className="text-tropicam-orange">✓</span>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DepartureCitySelector;


