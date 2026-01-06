import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Shield, Plane, Heart, Phone, MessageCircle, ShieldCheck, AlertTriangle } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';

const AssuranceVoyage: React.FC = () => {
    useEffect(() => {
        document.title = "Assurance Voyage | Protection Complète pour vos Voyages | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Assurance voyage complète pour vos déplacements. Couverture médicale, annulation, bagages, rapatriement. Protection pour toute la famille. Prix à partir de 150 MAD.');
    }, []);

    const coverageOptions = [
        {
            name: 'Essentielle',
            price: 150,
            duration: 'par voyage',
            coverage: [
                'Frais médicaux jusqu\'à 50,000 MAD',
                'Rapatriement sanitaire',
                'Annulation jusqu\'à 5,000 MAD',
                'Bagages jusqu\'à 2,000 MAD',
                'Responsabilité civile'
            ],
            recommended: false
        },
        {
            name: 'Confort',
            price: 250,
            duration: 'par voyage',
            coverage: [
                'Frais médicaux jusqu\'à 100,000 MAD',
                'Rapatriement sanitaire',
                'Annulation jusqu\'à 10,000 MAD',
                'Bagages jusqu\'à 5,000 MAD',
                'Responsabilité civile',
                'Assistance 24/7',
                'Retard de vol'
            ],
            recommended: true
        },
        {
            name: 'Premium',
            price: 400,
            duration: 'par voyage',
            coverage: [
                'Frais médicaux jusqu\'à 200,000 MAD',
                'Rapatriement sanitaire',
                'Annulation illimitée',
                'Bagages jusqu\'à 10,000 MAD',
                'Responsabilité civile',
                'Assistance 24/7',
                'Retard/annulation de vol',
                'Activités sportives',
                'Couverture COVID-19'
            ],
            recommended: false
        }
    ];

    const benefits = [
        {
            icon: Heart,
            title: 'Couverture Médicale',
            description: 'Prise en charge des frais médicaux à l\'étranger, hospitalisation, consultations'
        },
        {
            icon: Plane,
            title: 'Rapatriement',
            description: 'Rapatriement sanitaire en cas de problème médical grave'
        },
        {
            icon: Shield,
            title: 'Annulation',
            description: 'Remboursement en cas d\'annulation pour raison valable'
        },
        {
            icon: Phone,
            title: 'Assistance 24/7',
            description: 'Numéro d\'urgence disponible 24h/24 et 7j/7'
        }
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je souhaite souscrire à une assurance voyage. Pouvez-vous me donner plus d\'informations ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-tropicam-navy">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Shield size={12} className="text-tropicam-orange" />
                        Protection Complète
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Assurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Voyage</span><br />
                        <span className="text-2xl md:text-3xl font-normal">Voyagez en Toute Sérénité</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Protégez-vous et votre famille pendant vos voyages. Couverture médicale, annulation, bagages, rapatriement. À partir de 150 MAD par voyage.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Souscrire Maintenant
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

            {/* Why Insurance */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Pourquoi Souscrire une Assurance Voyage ?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-2xl text-center">
                                <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="text-tropicam-orange" size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-tropicam-navy mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Options */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Formules d'Assurance</h2>
                        <p className="text-gray-500">Choisissez la protection qui vous convient</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coverageOptions.map((option, idx) => (
                            <div key={idx} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all relative ${option.recommended ? 'border-2 border-tropicam-orange md:scale-105' : ''}`}>
                                {option.recommended && (
                                    <div className="absolute top-4 right-4 bg-tropicam-orange text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                                        Recommandée
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-tropicam-navy mb-2">{option.name}</h3>
                                    <div className="mb-6">
                                        <div className="text-3xl font-bold text-tropicam-navy mb-1">
                                            {option.price} MAD
                                        </div>
                                        <div className="text-sm text-gray-500">{option.duration}</div>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {option.coverage.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={handleWhatsApp}
                                        className="w-full bg-tropicam-orange hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                                    >
                                        Souscrire
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Info */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="text-yellow-600" size={32} />
                            <h2 className="text-2xl font-bold text-tropicam-navy">Points Importants</h2>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-green-500 shrink-0 mt-0.5" />
                                <span><strong>Valable partout dans le monde</strong> - Couverture internationale</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-green-500 shrink-0 mt-0.5" />
                                <span><strong>Famille incluse</strong> - Protection pour conjoint et enfants</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-green-500 shrink-0 mt-0.5" />
                                <span><strong>Obligatoire pour Schengen</strong> - Minimum 30,000 EUR de couverture</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-green-500 shrink-0 mt-0.5" />
                                <span><strong>Souscription rapide</strong> - En ligne en 5 minutes</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Protégez Votre Voyage</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Ne partez pas sans assurance. Contactez-nous pour souscrire votre assurance voyage en quelques minutes.
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

export default AssuranceVoyage;

