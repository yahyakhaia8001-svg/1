import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Users, Plane, Hotel, UtensilsCrossed, Baby, MessageCircle, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';
import DestinationCard from '../components/DestinationCard';

const VacancesFamille: React.FC = () => {
    useEffect(() => {
        document.title = "Vacances en Famille | Voyages Tout Compris pour Familles | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Vacances en famille depuis le Maroc. Destinations adaptées aux enfants : Turquie, Égypte, Espagne, Dubaï. Hôtels familiaux, activités pour enfants, tout compris.');
    }, []);

    const familyDestinations = [
        {
            country: 'Turquie',
            city: 'Antalya',
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 5500,
            duration: '7 Jours / 6 Nuits',
            visaStatus: 'visa-free' as const,
            visaDetails: '90 jours',
            link: '/destinations/turquie/antalya',
            description: 'Clubs familiaux, plages sécurisées',
            isPopular: true
        },
        {
            country: 'Égypte',
            city: 'Sharm El Sheikh',
            image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 4500,
            duration: '7 Jours / 6 Nuits',
            visaStatus: 'visa-on-arrival' as const,
            visaDetails: '25 USD',
            link: '/destinations/egypte',
            description: 'Resorts all inclusive, activités enfants',
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
            description: 'Parcs d\'attractions, plages',
            isPopular: false
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
            description: 'Parcs à thème, aquariums',
            isPopular: true
        }
    ];

    const familyFeatures = [
        {
            icon: Baby,
            title: 'Enfants Gratuits',
            description: 'Enfants de moins de 2 ans voyagent gratuitement (sur les genoux)'
        },
        {
            icon: UtensilsCrossed,
            title: 'Menus Enfants',
            description: 'Restaurants avec menus adaptés aux enfants dans tous nos hôtels'
        },
        {
            icon: Users,
            title: 'Clubs Enfants',
            description: 'Clubs et activités encadrées pour enfants de 4 à 12 ans'
        },
        {
            icon: Hotel,
            title: 'Chambres Familiales',
            description: 'Chambres communicantes ou suites familiales disponibles'
        }
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Nous cherchons des vacances en famille. Pouvez-vous nous proposer des destinations adaptées aux enfants ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/70 via-orange-500/50 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
                    alt="Vacances en famille"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Users size={12} className="text-tropicam-orange fill-current" />
                        Vacances pour Toute la Famille
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Vacances en <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Famille</span><br />
                        <span className="text-2xl md:text-3xl font-normal">Des Souvenirs pour Toute la Vie</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Destinations adaptées aux enfants, hôtels familiaux, activités pour tous les âges. Créez des souvenirs inoubliables en famille.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Trouver une Destination
                        </button>
                        <Link
                            to="/contact"
                            className="bg-white text-tropicam-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                        >
                            Devis Gratuit
                        </Link>
                    </div>
                </div>
            </section>

            {/* Destinations */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Destinations Idéales pour Familles</h2>
                    <p className="text-gray-500">Des destinations adaptées aux enfants avec activités pour tous</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {familyDestinations.map((dest, idx) => (
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

            {/* Family Features */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Services Spéciaux Familles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {familyFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="text-blue-600" size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-tropicam-navy mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Planifiez Vos Vacances en Famille</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Notre équipe vous aide à trouver la destination parfaite pour toute la famille. Contactez-nous pour un devis personnalisé.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            WhatsApp : {PHONE_NUMBER}
                        </button>
                    </div>
                    <p className="mt-6 text-gray-400 text-sm flex items-center justify-center gap-2">
                        <ShieldCheck size={16} />
                        Agence Agréée N° {LICENSE_NUMBER}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default VacancesFamille;

