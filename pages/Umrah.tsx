import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Bus, Clock, MessageCircle, ShieldCheck, Calendar, Moon } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';

const Umrah: React.FC = () => {
    useEffect(() => {
        document.title = "Omra depuis Maroc | Packages Omra Toute l'Année | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Omra toute l\'année depuis le Maroc. Packages 7, 10, 14 et 21 jours. Hôtels proches du Haram, visa inclus, encadrement religieux. Prix à partir de 15,000 MAD.');
    }, []);

    const packages = [
        {
            name: 'Omra Express',
            duration: '7 Jours / 6 Nuits',
            price: 15000,
            includes: [
                'Vol aller-retour Royal Air Maroc',
                'Hôtel 3★ à Makkah (proche Haram)',
                'Hôtel 3★ à Madinah',
                'Visa Omra inclus',
                'Transferts aéroport',
                'Encadrement religieux',
                'Petit-déjeuner'
            ],
            spotsLeft: 20
        },
        {
            name: 'Omra Confort',
            duration: '10 Jours / 9 Nuits',
            price: 22000,
            includes: [
                'Vol aller-retour Royal Air Maroc',
                'Hôtel 4★ à Makkah (face Haram)',
                'Hôtel 4★ à Madinah',
                'Visa Omra inclus',
                'Transferts VIP',
                'Encadrement religieux bilingue',
                'Petit-déjeuner et dîner',
                'Transport entre Makkah et Madinah'
            ],
            spotsLeft: 15,
            popular: true
        },
        {
            name: 'Omra Premium',
            duration: '14 Jours / 13 Nuits',
            price: 32000,
            includes: [
                'Vol aller-retour Royal Air Maroc',
                'Hôtel 5★ à Makkah (face Haram, vue Kaaba)',
                'Hôtel 5★ à Madinah (face Masjid Nabawi)',
                'Visa Omra inclus',
                'Transferts VIP avec assistance',
                'Encadrement religieux premium',
                'Pension complète',
                'Transport privé',
                'Visite de sites historiques'
            ],
            spotsLeft: 10
        },
        {
            name: 'Omra VIP',
            duration: '21 Jours / 20 Nuits',
            price: 45000,
            includes: [
                'Vol aller-retour Royal Air Maroc Business',
                'Hôtel 5★ luxe à Makkah (suite face Haram)',
                'Hôtel 5★ luxe à Madinah (suite face Masjid)',
                'Visa Omra inclus',
                'Transferts VIP personnalisés',
                'Encadrement religieux VIP',
                'Pension complète buffet',
                'Transport privé avec chauffeur',
                'Visites guidées complètes',
                'Services spa et bien-être',
                'Assistance 24/7'
            ],
            spotsLeft: 5
        }
    ];

    const specialOffers = [
        {
            title: 'Omra Ramadan 2025',
            description: 'Expérience spirituelle unique pendant le mois sacré',
            price: 'À partir de 28,000 MAD',
            link: '/omra-ramadan',
            highlight: true
        },
        {
            title: 'Omra + Visite Jeddah',
            description: 'Combiné Omra et découverte de Jeddah',
            price: 'À partir de 25,000 MAD',
            link: '/packages?cat=Omra'
        },
        {
            title: 'Omra en Groupe',
            description: 'Tarifs préférentiels pour groupes de 10+ personnes',
            price: 'Sur devis',
            link: '/contact'
        }
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je suis intéressé(e) par un package Omra depuis le Maroc. Pouvez-vous me donner plus d\'informations ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/80 via-tropicam-navy/60 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2000&auto=format&fit=crop"
                    alt="Omra depuis Maroc"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Moon size={12} className="text-tropicam-orange fill-current" />
                        Omra Toute l'Année
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Omra depuis le <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Maroc</span><br />
                        <span className="text-2xl md:text-3xl font-normal">Packages Complets Toute l'Année</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Accomplissez votre Omra en toute sérénité. Hôtels proches du Haram, visa inclus, encadrement religieux. Départs chaque semaine.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Réserver une Omra
                        </button>
                        <Link
                            to="/contact"
                            className="bg-white text-tropicam-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                        >
                            Demander un Devis
                        </Link>
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Packages Omra</h2>
                    <p className="text-gray-500">Choisissez la durée et le confort qui vous conviennent</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all relative ${pkg.popular ? 'border-2 border-tropicam-orange md:scale-105' : ''}`}>
                            {pkg.popular && (
                                <div className="absolute top-4 right-4 bg-tropicam-orange text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                                    Le Plus Populaire
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-tropicam-navy mb-2">{pkg.name}</h3>
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                    <Clock size={16} />
                                    <span>{pkg.duration}</span>
                                </div>
                                <div className="mb-6">
                                    <div className="text-3xl font-bold text-tropicam-navy mb-1">
                                        {pkg.price.toLocaleString('fr-FR')} MAD
                                    </div>
                                    <div className="text-sm text-gray-500">par personne</div>
                                </div>
                                <ul className="space-y-2 mb-6 text-sm">
                                    {pkg.includes.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700">
                                            <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {pkg.spotsLeft && (
                                    <div className="mb-4 text-blue-600 text-sm font-bold">
                                        ✓ {pkg.spotsLeft} places disponibles
                                    </div>
                                )}
                                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                    <div className="text-xs text-gray-600 mb-1">Paiement flexible</div>
                                    <div className="text-sm font-bold text-tropicam-navy">
                                        Payez en 4 fois : {Math.ceil(pkg.price / 4).toLocaleString('fr-FR')} MAD/mois
                                    </div>
                                </div>
                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full bg-tropicam-orange hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                                >
                                    Réserver Maintenant
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Offers */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Offres Spéciales</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {specialOffers.map((offer, idx) => (
                            <Link
                                key={idx}
                                to={offer.link}
                                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${offer.highlight ? 'border-2 border-tropicam-orange' : ''}`}
                            >
                                {offer.highlight && (
                                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                                        Spécial
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-tropicam-navy mb-2">{offer.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                                <div className="text-lg font-bold text-tropicam-orange">{offer.price}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Pourquoi Choisir Tropicam Voyage pour l'Omra ?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Calendar className="text-tropicam-orange" size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-tropicam-navy mb-2">Départs Toutes les Semaines</h3>
                        <p className="text-gray-500 text-sm">Flexibilité totale pour choisir vos dates</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Hotel className="text-tropicam-orange" size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-tropicam-navy mb-2">Hôtels Proches du Haram</h3>
                        <p className="text-gray-500 text-sm">Accès facile aux sites saints</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck className="text-tropicam-orange" size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-tropicam-navy mb-2">Visa Inclus</h3>
                        <p className="text-gray-500 text-sm">On s'occupe de toutes les formalités</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Users className="text-tropicam-orange" size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-tropicam-navy mb-2">Encadrement Religieux</h3>
                        <p className="text-gray-500 text-sm">Guides expérimentés francophones</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt pour Accomplir votre Omra ?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Contactez-nous maintenant pour réserver votre Omra. Départs chaque semaine depuis toutes les villes marocaines.
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

export default Umrah;


