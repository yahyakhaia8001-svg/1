import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Bus, Clock, MessageCircle, ShieldCheck, Tag, TrendingDown } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';
import DestinationCard from '../components/DestinationCard';

const VoyagesPasCher: React.FC = () => {
    useEffect(() => {
        document.title = "Voyages Pas Cher depuis Maroc | Offres Économiques & Promotions | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Voyages pas cher depuis le Maroc. Offres économiques vers Turquie, Égypte, Espagne, Tunisie. À partir de 3,500 MAD. Dernière minute, promotions, bons plans.');
    }, []);

    const budgetDestinations = [
        {
            country: 'Espagne',
            city: 'Barcelone',
            image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 3500,
            originalPrice: 4500,
            duration: '4 Jours / 3 Nuits',
            visaStatus: 'visa-required' as const,
            visaDetails: 'Schengen',
            link: '/destinations/espagne/barcelone',
            description: 'Week-end économique',
            isPromo: true,
            promoPercentage: 22
        },
        {
            country: 'Tunisie',
            city: 'Tunis',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 2800,
            duration: '5 Jours / 4 Nuits',
            visaStatus: 'visa-free' as const,
            visaDetails: '90 jours',
            link: '/destinations/tunisie',
            description: 'Proche et abordable',
            isPopular: true
        },
        {
            country: 'Turquie',
            city: 'Istanbul',
            image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 4500,
            originalPrice: 5500,
            duration: '5 Jours / 4 Nuits',
            visaStatus: 'visa-free' as const,
            visaDetails: '90 jours',
            link: '/destinations/turquie/istanbul',
            description: 'Sans visa, culture riche',
            isPromo: true,
            promoPercentage: 18
        },
        {
            country: 'Égypte',
            city: 'Le Caire',
            image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 4000,
            duration: '6 Jours / 5 Nuits',
            visaStatus: 'visa-on-arrival' as const,
            visaDetails: '25 USD',
            link: '/destinations/egypte',
            description: 'Histoire et culture',
            isPopular: false
        }
    ];

    const tips = [
        'Réservez en avance pour bénéficier des meilleurs tarifs',
        'Voyagez hors saison (hiver pour plages, été pour villes)',
        'Choisissez les formules sans petit-déjeuner pour économiser',
        'Partez en groupe (réductions pour 4+ personnes)',
        'Profitez des offres dernière minute',
        'Paiement en plusieurs fois sans frais'
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je cherche un voyage pas cher. Pouvez-vous me proposer des offres économiques ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 to-tropicam-navy">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Tag size={12} className="text-green-300" />
                        Meilleurs Prix Garantis
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Voyages <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-orange-300">Pas Cher</span><br />
                        <span className="text-2xl md:text-3xl font-normal">depuis le Maroc</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Voyagez sans vous ruiner ! Offres économiques, promotions, dernière minute. À partir de 2,800 MAD. Qualité garantie.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Voir les Offres
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
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Destinations Économiques</h2>
                    <p className="text-gray-500">Voyagez moins cher sans compromettre la qualité</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {budgetDestinations.map((dest, idx) => (
                        <div key={idx} className="relative">
                            <DestinationCard
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
                                isPromo={dest.isPromo}
                                promoPercentage={dest.promoPercentage}
                            />
                            {dest.originalPrice && (
                                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                                    -{dest.promoPercentage}%
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Tips */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Conseils pour Voyager Moins Cher</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tips.map((tip, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-3">
                                    <TrendingDown className="text-green-500 shrink-0" size={20} />
                                    <p className="text-gray-700 font-medium">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trouvez Votre Voyage Pas Cher</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Contactez-nous pour découvrir nos meilleures offres et promotions. Nous trouvons toujours une solution adaptée à votre budget.
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

export default VoyagesPasCher;

