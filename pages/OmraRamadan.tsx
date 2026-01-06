import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Bus, Clock, MessageCircle, ShieldCheck, Calendar, Moon, Heart, AlertCircle } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';

const OmraRamadan: React.FC = () => {
    useEffect(() => {
        document.title = "Omra Ramadan 2025 depuis Maroc | Packages Omra Ramadan | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Omra Ramadan 2025 depuis le Maroc. Expérience spirituelle unique pendant le mois sacré. Hôtels proches du Haram, visa inclus. Prix à partir de 28,000 MAD. Réservez tôt !');
    }, []);

    const packages = [
        {
            name: 'Omra Ramadan Standard',
            duration: '10 Jours / 9 Nuits',
            price: 28000,
            includes: [
                'Vol aller-retour Royal Air Maroc',
                'Hôtel 4★ à Makkah (proche Haram)',
                'Hôtel 4★ à Madinah',
                'Visa Omra inclus',
                'Transferts aéroport',
                'Encadrement religieux',
                'Petit-déjeuner et Iftar',
                'Transport entre Makkah et Madinah'
            ],
            spotsLeft: 12
        },
        {
            name: 'Omra Ramadan Confort',
            duration: '14 Jours / 13 Nuits',
            price: 38000,
            includes: [
                'Vol aller-retour Royal Air Maroc',
                'Hôtel 5★ à Makkah (face Haram)',
                'Hôtel 5★ à Madinah (face Masjid Nabawi)',
                'Visa Omra inclus',
                'Transferts VIP',
                'Encadrement religieux bilingue',
                'Petit-déjeuner, Iftar et Suhur',
                'Transport privé',
                'Assistance 24/7'
            ],
            spotsLeft: 8,
            popular: true
        },
        {
            name: 'Omra Ramadan Premium',
            duration: '18 Jours / 17 Nuits',
            price: 52000,
            includes: [
                'Vol aller-retour Royal Air Maroc Business',
                'Hôtel 5★ luxe à Makkah (suite face Haram, vue Kaaba)',
                'Hôtel 5★ luxe à Madinah (suite face Masjid)',
                'Visa Omra inclus',
                'Transferts VIP personnalisés',
                'Encadrement religieux premium',
                'Pension complète (buffet Iftar)',
                'Transport privé avec chauffeur',
                'Assistance personnelle 24/7',
                'Services spa et bien-être',
                'Accès prioritaire aux sites saints'
            ],
            spotsLeft: 5
        }
    ];

    const whyRamadan = [
        {
            icon: Heart,
            title: 'Expérience Spirituelle Unique',
            description: 'L\'Omra pendant Ramadan équivaut à un Hajj en compagnie du Prophète (paix et salut sur lui)'
        },
        {
            icon: Moon,
            title: 'Ambiance Inoubliable',
            description: 'L\'atmosphère spirituelle à Makkah et Madinah pendant Ramadan est exceptionnelle'
        },
        {
            icon: Users,
            title: 'Fraternité et Solidarité',
            description: 'Partagez l\'Iftar avec des milliers de pèlerins du monde entier'
        },
        {
            icon: Star,
            title: 'Récompenses Multipliées',
            description: 'Chaque acte d\'adoration pendant Ramadan a une valeur immense'
        }
    ];

    const importantNotes = [
        'Réservez tôt : Les places sont limitées et se remplissent rapidement',
        'Prix plus élevés : Les tarifs augmentent à l\'approche de Ramadan',
        'Préparation physique : Jeûne + marche = préparez-vous en amont',
        'Hôtels proches essentiels : Permet de retourner se reposer entre les prières',
        'Documents : Passeport valide 6+ mois, certificat de vaccination'
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je suis intéressé(e) par l\'Omra Ramadan 2025. Pouvez-vous me donner plus d\'informations sur les packages et disponibilités ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/80 via-tropicam-navy/60 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2000&auto=format&fit=crop"
                    alt="Omra Ramadan 2025"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Moon size={12} className="text-tropicam-orange fill-current" />
                        Omra Pendant le Mois Sacré
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Omra <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Ramadan 2025</span><br />
                        <span className="text-2xl md:text-3xl font-normal">depuis le Maroc</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Expérience spirituelle unique pendant le mois sacré. L'Omra pendant Ramadan équivaut à un Hajj. Réservez tôt, places limitées.
                    </p>

                    <div className="bg-red-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold text-base mb-6 inline-block animate-pulse-slow">
                        ⚠️ Places Limitées - Réservez Maintenant
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Réserver Omra Ramadan
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

            {/* Why Ramadan Omra */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Pourquoi l'Omra Pendant Ramadan ?</h2>
                        <p className="text-gray-500">Une expérience spirituelle exceptionnelle</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyRamadan.map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-2xl text-center">
                                <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="text-tropicam-orange" size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-tropicam-navy mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Packages Omra Ramadan 2025</h2>
                        <p className="text-gray-500">Choisissez le package qui correspond à vos besoins</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, idx) => (
                            <div key={idx} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all relative ${pkg.popular ? 'border-2 border-tropicam-orange md:scale-105' : ''}`}>
                                {pkg.popular && (
                                    <div className="absolute top-4 right-4 bg-tropicam-orange text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                                        Le Plus Demandé
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-tropicam-navy mb-2">{pkg.name}</h3>
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
                                        <div className="mb-4 text-red-600 text-sm font-bold">
                                            ⚠️ {pkg.spotsLeft} places restantes
                                        </div>
                                    )}
                                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                        <div className="text-xs text-gray-600 mb-1">Paiement flexible</div>
                                        <div className="text-sm font-bold text-tropicam-navy">
                                            Acompte 30% + Solde avant départ
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
                </div>
            </section>

            {/* Important Notes */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="text-yellow-600" size={32} />
                            <h2 className="text-2xl font-bold text-tropicam-navy">Points Importants à Retenir</h2>
                        </div>
                        <ul className="space-y-4">
                            {importantNotes.map((note, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                    <p className="text-gray-700 font-medium">{note}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Réservez Votre Omra Ramadan 2025</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Les places sont limitées et se remplissent rapidement. Contactez-nous maintenant pour garantir votre place.
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

export default OmraRamadan;

