import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import VisaBadge from './VisaBadge';

interface DestinationCardProps {
    country: string;
    city?: string;
    image: string;
    startingPrice: number;
    currency?: 'MAD';
    duration: string;
    visaStatus: 'visa-free' | 'visa-on-arrival' | 'e-visa' | 'visa-required';
    visaDetails?: string;
    isPopular?: boolean;
    isPromo?: boolean;
    promoPercentage?: number;
    departureCity?: string;
    rating?: number;
    reviewCount?: number;
    link: string;
    description?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
    country,
    city,
    image,
    startingPrice,
    currency = 'MAD',
    duration,
    visaStatus,
    visaDetails,
    isPopular = false,
    isPromo = false,
    promoPercentage,
    departureCity,
    rating = 4.8,
    reviewCount = 0,
    link,
    description
}) => {
    return (
        <Link
            to={link}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={`Voyage ${city || country} depuis Maroc`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {isPopular && (
                        <div className="bg-tropicam-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                            Populaire
                        </div>
                    )}
                    {isPromo && promoPercentage && (
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            -{promoPercentage}%
                        </div>
                    )}
                </div>

                {/* Visa Badge */}
                <div className="absolute top-4 right-4">
                    <VisaBadge status={visaStatus} country={country} details={visaDetails} />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <h3 className="text-2xl font-bold font-heading mb-1">
                        {city ? `${city}, ` : ''}{country}
                    </h3>
                    {description && (
                        <p className="text-sm text-white/90 mb-2">{description}</p>
                    )}
                    {rating > 0 && (
                        <div className="flex items-center gap-2 text-sm mb-2">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-white/30'}
                                    />
                                ))}
                            </div>
                            <span className="text-white/80">
                                {rating} {reviewCount > 0 && `(${reviewCount})`}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Info */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} className="text-tropicam-orange" />
                        <span>{duration}</span>
                    </div>
                    {departureCity && (
                        <div className="text-xs text-gray-500">
                            Départ: {departureCity}
                        </div>
                    )}
                </div>
                
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-bold text-tropicam-navy">
                            À partir de {startingPrice.toLocaleString('fr-FR')} {currency}
                        </div>
                        <div className="text-xs text-gray-500">par personne</div>
                    </div>
                    <div className="bg-tropicam-orange text-white p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DestinationCard;


