import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from './DestinationCard';

const FeaturedDestinations: React.FC = () => {
    const destinations = [
        {
            country: 'Turquie',
            city: 'Istanbul',
            image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 6500,
            duration: '5 Jours / 4 Nuits',
            visaStatus: 'visa-free' as const,
            visaDetails: '90 jours',
            link: '/destinations/turquie/istanbul',
            description: 'Culture, shopping, histoire',
            isPopular: true
        },
        {
            country: 'Émirats Arabes Unis',
            city: 'Dubaï',
            image: 'https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?auto=format&fit=crop&w=2000&q=80',
            startingPrice: 7000,
            duration: '7 Jours / 6 Nuits',
            visaStatus: 'visa-free' as const,
            visaDetails: '90 jours',
            link: '/voyage-dubai',
            description: 'Luxe, shopping, plages',
            isPopular: true
        },
        {
            country: 'Égypte',
            city: 'Le Caire',
            image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 4500,
            duration: '7 Jours / 6 Nuits',
            visaStatus: 'visa-on-arrival' as const,
            visaDetails: '25 USD',
            link: '/destinations/egypte',
            description: 'Pyramides, histoire',
            isPopular: false
        },
        {
            country: 'Arabie Saoudite',
            city: 'Omra',
            image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 15000,
            duration: '10 Jours / 9 Nuits',
            visaStatus: 'visa-required' as const,
            visaDetails: 'Visa inclus',
            link: '/omra',
            description: 'Voyage spirituel',
            isPopular: true
        },
        {
            country: 'Espagne',
            city: 'Barcelone',
            image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 4000,
            duration: '5 Jours / 4 Nuits',
            visaStatus: 'visa-required' as const,
            visaDetails: 'Schengen',
            link: '/destinations/espagne/barcelone',
            description: 'Culture, plages',
            isPopular: false
        },
        {
            country: 'Maldives',
            city: 'Maldives',
            image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 25000,
            duration: '8 Jours / 7 Nuits',
            visaStatus: 'visa-on-arrival' as const,
            visaDetails: '30 jours',
            link: '/destinations/maldives',
            description: 'Lune de miel',
            isPopular: false
        }
    ];

    return (
        <section className="py-16 container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                    <span className="text-tropicam-orange font-bold uppercase tracking-widest text-xs mb-2 block">Destinations Phares</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy leading-tight">
                        Voyagez depuis le Maroc vers le Monde Entier
                    </h2>
                </div>
                <Link
                    to="/packages"
                    className="group flex items-center gap-2 text-tropicam-navy font-bold hover:text-tropicam-orange transition-colors text-sm md:text-base"
                >
                    Voir toutes les destinations
                    <span className="bg-gray-100 p-2 rounded-full group-hover:bg-tropicam-orange group-hover:text-white transition-colors">
                        →
                    </span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((dest, idx) => (
                    <DestinationCard
                        key={idx}
                        country={dest.country}
                        city={dest.city}
                        image={dest.image}
                        startingPrice={dest.startingPrice}
                        duration={dest.duration}
                        visaStatus={dest.visaStatus}
                        visaDetails={dest.visaDetails}
                        link={dest.link}
                        description={dest.description}
                        isPopular={dest.isPopular}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturedDestinations;

