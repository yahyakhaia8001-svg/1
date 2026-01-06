import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Bus, Clock, MessageCircle, ShieldCheck, Users, Calendar, FileCheck, Heart } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';

const Hajj: React.FC = () => {
    useEffect(() => {
        document.title = "Hajj 2025 depuis Maroc | Inscription & Packages Hajj | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Hajj 2025 depuis le Maroc. Packages Économique, Confort, Premium et VIP. Agence agréée, encadrement religieux, hôtels proches du Haram. Inscriptions ouvertes.');
    }, []);

    const packages = [
        {
            name: 'Pack Économique',
            price: 50000,
            duration: '15 Jours',
            includes: [
                'Vol aller-retour Royal Air Maroc',
                'Hôtel 3★ à Makkah (proche Haram)',
                'Hôtel 3★ à Madinah',
                'Transferts aéroport',
                'Encadrement religieux francophone',
                'Visa Hajj inclus',
                'Transport entre Makkah et Madinah',
                'Petit-déjeuner'
            ],
            spotsLeft: 15,
            registrationStatus: 'open'
        },
        {
            name: 'Pack Confort',
            price: 75000,
            duration: '18 Jours',
            includes: [
                'Vol aller-retour Royal Air Maroc',
                'Hôtel 4★ à Makkah (face Haram)',
                'Hôtel 4★ à Madinah',
                'Transferts VIP',
                'Encadrement religieux bilingue (FR/AR)',
                'Visa Hajj inclus',
                'Transport climatisé',
                'Petit-déjeuner et dîner',
                'Guide religieux expérimenté'
            ],
            spotsLeft: 8,
            registrationStatus: 'open',
            popular: true
        },
        {
            name: 'Pack Premium',
            price: 100000,
            duration: '20 Jours',
            includes: [
                'Vol aller-retour Royal Air Maroc Business',
                'Hôtel 5★ à Makkah (face Haram, vue Kaaba)',
                'Hôtel 5★ à Madinah (face Masjid Nabawi)',
                'Transferts VIP avec assistance',
                'Encadrement religieux premium',
                'Visa Hajj inclus',
                'Transport privé climatisé',
                'Pension complète',
                'Guide religieux certifié',
                'Assistance 24/7'
            ],
            spotsLeft: 5,
            registrationStatus: 'open'
        },
        {
            name: 'Pack VIP',
            price: 150000,
            duration: '25 Jours',
            includes: [
                'Vol aller-retour Royal Air Maroc Business',
                'Hôtel 5★ luxe à Makkah (face Haram, suite)',
                'Hôtel 5★ luxe à Madinah (face Masjid Nabawi, suite)',
                'Transferts VIP avec assistance personnelle',
                'Encadrement religieux VIP',
                'Visa Hajj inclus',
                'Transport privé avec chauffeur',
                'Pension complète (buffet)',
                'Guide religieux senior certifié',
                'Assistance personnelle 24/7',
                'Services spa et bien-être',
                'Accès prioritaire aux sites saints'
            ],
            spotsLeft: 3,
            registrationStatus: 'open'
        }
    ];

    const requiredDocuments = [
        'Passeport valide (minimum 6 mois)',
        'Carte d\'Identité Nationale (CIN)',
        '2 photos d\'identité récentes',
        'Certificat de vaccination (méningite, grippe)',
        'Certificat médical (moins de 3 mois)',
        'Relevé bancaire (justificatif de moyens)',
        'Formulaire d\'inscription complété',
        'Copie du passeport de l\'accompagnant (si applicable)'
    ];

    const departureCities = ['Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tanger', 'Agadir'];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je suis intéressé(e) par le Hajj 2025. Pouvez-vous me donner plus d\'informations sur les packages et les inscriptions ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/80 via-tropicam-navy/60 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2000&auto=format&fit=crop"
                    alt="Hajj 2025 depuis Maroc"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Heart size={12} className="text-tropicam-orange fill-current" />
                        Agence Agréée pour le Hajj
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Hajj <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">2025</span><br />
                        <span className="text-2xl md:text-3xl font-normal">depuis le Maroc</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Accomplissez votre 5ème pilier de l'Islam avec une agence agréée. Packages complets avec encadrement religieux, hôtels proches du Haram.
                    </p>

                    <div className="bg-green-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold text-base mb-6 inline-block">
                        ✅ Inscriptions Ouvertes - Places Limitées
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            S'inscrire au Hajj
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

            {/* Registration Status */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-tropicam-navy mb-4">Statut des Inscriptions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-xl">
                                <div className="text-3xl font-bold text-green-600 mb-2">Ouvert</div>
                                <div className="text-sm text-gray-600">Inscriptions en cours</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl">
                                <div className="text-3xl font-bold text-orange-600 mb-2">31</div>
                                <div className="text-sm text-gray-600">Places disponibles</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl">
                                <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
                                <div className="text-sm text-gray-600">Année du Hajj</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Packages Hajj 2025</h2>
                    <p className="text-gray-500">Choisissez le package qui correspond à vos besoins et votre budget</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all relative ${pkg.popular ? 'border-2 border-tropicam-orange md:scale-105' : ''}`}>
                            {pkg.popular && (
                                <div className="absolute top-4 right-4 bg-tropicam-orange text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                                    Le Plus Demandé
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
                                    S'inscrire Maintenant
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-tropicam-navy mb-8 text-center">Documents Requis</h2>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {requiredDocuments.map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <FileCheck className="text-tropicam-orange" size={20} />
                                        <span className="text-gray-700 font-medium">{doc}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm text-gray-700">
                                    <strong>Important :</strong> Tous les documents doivent être en ordre. Notre équipe vous assiste dans la préparation de votre dossier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departure Cities */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold text-tropicam-navy mb-6 text-center">Départs depuis</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {departureCities.map((city, idx) => (
                            <div key={idx} className="bg-tropicam-navy text-white px-6 py-3 rounded-xl shadow-sm font-bold">
                                {city}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us for Hajj */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Pourquoi Choisir Tropicam Voyage pour le Hajj ?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck className="text-tropicam-orange" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-tropicam-navy mb-2">Agence Agréée</h3>
                        <p className="text-gray-500">Licence officielle pour l'organisation du Hajj. Conformité totale avec les réglementations.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Users className="text-tropicam-orange" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-tropicam-navy mb-2">Encadrement Religieux</h3>
                        <p className="text-gray-500">Guides religieux expérimentés, francophones et arabophones. Accompagnement spirituel complet.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Hotel className="text-tropicam-orange" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-tropicam-navy mb-2">Hôtels Proches</h3>
                        <p className="text-gray-500">Hôtels situés à quelques pas du Haram et de Masjid Nabawi. Accès facile aux sites saints.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt pour Accomplir le Hajj ?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Contactez-nous maintenant pour réserver votre place. Notre équipe vous guide dans toutes les démarches.
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
                        Agence Agréée N° {LICENSE_NUMBER} - Organisation Hajj Autorisée
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Hajj;


