import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Heart, Camera, Plane, Hotel, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';
import DestinationCard from '../components/DestinationCard';

const VoyageDeNoces: React.FC = () => {
    useEffect(() => {
        document.title = "Voyage de Noces | Lune de Miel Romantique | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Voyage de noces de rêve : Maldives, Bali, Thaïlande, Dubaï. Packages romantiques tout compris. Villas privées, plages paradisiaques. Créez des souvenirs inoubliables.');
    }, []);

    const honeymoonDestinations = [
        {
            country: 'Maldives',
            city: 'Maldives',
            image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 25000,
            duration: '8 Jours / 7 Nuits',
            visaStatus: 'visa-on-arrival' as const,
            visaDetails: '30 jours',
            link: '/destinations/maldives',
            description: 'Villas sur pilotis, eau turquoise',
            isPopular: true
        },
        {
            country: 'Indonésie',
            city: 'Bali',
            image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 18000,
            duration: '10 Jours / 9 Nuits',
            visaStatus: 'visa-on-arrival' as const,
            visaDetails: '30 jours',
            link: '/destinations/indonesie-bali',
            description: 'Villas privées avec piscine',
            isPopular: true
        },
        {
            country: 'Thaïlande',
            city: 'Phuket',
            image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 15000,
            duration: '10 Jours / 9 Nuits',
            visaStatus: 'visa-free' as const,
            visaDetails: '30 jours',
            link: '/destinations/thailande',
            description: 'Plages paradisiaques, spa',
            isPopular: false
        },
        {
            country: 'Émirats Arabes Unis',
            city: 'Dubaï',
            image: 'https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?auto=format&fit=crop&w=2000&q=80',
            startingPrice: 12000,
            duration: '7 Jours / 6 Nuits',
            visaStatus: 'visa-free' as const,
            visaDetails: '90 jours',
            link: '/voyage-dubai',
            description: 'Luxe, shopping, plages',
            isPopular: false
        },
        {
            country: 'Turquie',
            city: 'Antalya',
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 8500,
            duration: '7 Jours / 6 Nuits',
            visaStatus: 'visa-free' as const,
            visaDetails: '90 jours',
            link: '/destinations/turquie/antalya',
            description: 'Resorts all inclusive',
            isPopular: false
        },
        {
            country: 'Grèce',
            city: 'Santorini',
            image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2000&auto=format&fit=crop',
            startingPrice: 15000,
            duration: '7 Jours / 6 Nuits',
            visaStatus: 'visa-required' as const,
            visaDetails: 'Schengen',
            link: '/destinations/grece',
            description: 'Couchers de soleil romantiques',
            isPopular: false
        }
    ];

    const specialServices = [
        {
            icon: Heart,
            title: 'Décoration Romantique',
            description: 'Chambre décorée, pétales de roses, champagne'
        },
        {
            icon: Camera,
            title: 'Séance Photo',
            description: 'Photographe professionnel pour immortaliser vos moments'
        },
        {
            icon: Sparkles,
            title: 'Dîner Romantique',
            description: 'Dîner aux chandelles sur la plage ou en terrasse privée'
        },
        {
            icon: Hotel,
            title: 'Upgrade Chambre',
            description: 'Suite avec vue mer, jacuzzi, terrasse privée'
        }
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Nous planifions notre voyage de noces. Pouvez-vous nous aider à créer un séjour romantique inoubliable ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-600/70 via-purple-600/50 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop"
                    alt="Voyage de noces romantique"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Heart size={12} className="text-pink-300 fill-current" />
                        Lune de Miel de Rêve
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Voyage de <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-300">Noces</span><br />
                        <span className="text-2xl md:text-3xl font-normal">Créez des Souvenirs Inoubliables</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Maldives, Bali, Thaïlande... Offrez-vous la lune de miel de vos rêves. Packages romantiques tout compris avec services sur mesure.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Planifier Notre Lune de Miel
                        </button>
                        <Link
                            to="/contact"
                            className="bg-white text-tropicam-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                        >
                            Devis Personnalisé
                        </Link>
                    </div>
                </div>
            </section>

            {/* Destinations */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Destinations Idéales pour Votre Lune de Miel</h2>
                    <p className="text-gray-500">Les plus belles destinations romantiques au monde</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {honeymoonDestinations.map((dest, idx) => (
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

            {/* Special Services */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Services Spéciaux Lune de Miel</h2>
                        <p className="text-gray-500">Rendez votre séjour encore plus romantique</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specialServices.map((service, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <service.icon className="text-pink-500" size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-tropicam-navy mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Planifiez Votre Lune de Miel de Rêve</h2>
                    <p className="text-gray-100 mb-8 max-w-xl mx-auto">
                        Notre équipe crée des séjours romantiques sur mesure. Contactez-nous pour un devis personnalisé.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            WhatsApp : {PHONE_NUMBER}
                        </button>
                    </div>
                    <p className="mt-6 text-gray-200 text-sm flex items-center justify-center gap-2">
                        <ShieldCheck size={16} />
                        Agence Agréée N° {LICENSE_NUMBER}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default VoyageDeNoces;

