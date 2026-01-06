import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, FileCheck, Clock, AlertCircle, MessageCircle, ShieldCheck, Globe, CreditCard, Calendar } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';
import VisaBadge from '../components/VisaBadge';

const Visa: React.FC = () => {
    useEffect(() => {
        document.title = "Assistance Visa depuis Maroc | Visa Schengen, Turquie, Égypte | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Assistance complète pour vos demandes de visa depuis le Maroc. Visa Schengen, Turquie, Égypte, et plus. On s\'occupe de tout : documents, RDV, suivi. Service rapide et fiable.');
    }, []);

    const visaServices = [
        {
            country: 'Schengen',
            countries: 'France, Espagne, Italie, Allemagne, etc.',
            status: 'visa-required',
            processing: '15-30 jours',
            cost: 'Service: 800-1,200 MAD',
            description: 'Visa le plus demandé. Nous gérons RDV, documents, suivi.',
            icon: Globe
        },
        {
            country: 'Turquie',
            countries: 'E-visa en ligne',
            status: 'e-visa',
            processing: '24-48h',
            cost: 'Service: 200 MAD',
            description: 'E-visa simple et rapide. On s\'occupe de tout.',
            icon: FileCheck
        },
        {
            country: 'Égypte',
            countries: 'Visa à l\'arrivée',
            status: 'visa-on-arrival',
            processing: 'À l\'arrivée',
            cost: '25 USD',
            description: 'Visa obtenu directement à l\'aéroport.',
            icon: Check
        },
        {
            country: 'Royaume-Uni',
            countries: 'UK Visa',
            status: 'visa-required',
            processing: '15-20 jours',
            cost: 'Service: 1,000-1,500 MAD',
            description: 'Assistance complète pour visa UK.',
            icon: Globe
        },
        {
            country: 'USA',
            countries: 'Visa américain',
            status: 'visa-required',
            processing: '30-60 jours',
            cost: 'Service: 2,000 MAD',
            description: 'Processus complexe, nous vous accompagnons.',
            icon: Globe
        },
        {
            country: 'Canada',
            countries: 'Visa canadien',
            status: 'visa-required',
            processing: '30-45 jours',
            cost: 'Service: 1,500 MAD',
            description: 'Assistance pour visa Canada.',
            icon: Globe
        }
    ];

    const visaFreeCountries = [
        { name: 'Malaisie', duration: '90 jours' },
        { name: 'Thaïlande', duration: '30 jours' },
        { name: 'Indonésie', duration: '30 jours' },
        { name: 'Maldives', duration: '30 jours' },
        { name: 'Tunisie', duration: '90 jours' },
        { name: 'Jordanie', duration: 'Visa à l\'arrivée' }
    ];

    const ourServices = [
        {
            title: 'Préparation des Documents',
            description: 'Liste complète, vérification, traduction si nécessaire',
            icon: FileCheck
        },
        {
            title: 'Prise de RDV',
            description: 'Réservation de votre rendez-vous au consulat',
            icon: Calendar
        },
        {
            title: 'Suivi du Dossier',
            description: 'Accompagnement jusqu\'à l\'obtention du visa',
            icon: Clock
        },
        {
            title: 'Conseil Personnalisé',
            description: 'Conseils pour maximiser vos chances d\'obtention',
            icon: MessageCircle
        }
    ];

    const requiredDocuments = [
        'Passeport valide (minimum 6 mois)',
        'Formulaire de demande complété',
        '2 photos d\'identité récentes',
        'Justificatifs de ressources financières',
        'Réservation d\'hôtel',
        'Billet d\'avion aller-retour',
        'Assurance voyage (pour Schengen)',
        'Lettre d\'invitation (si applicable)'
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! J\'ai besoin d\'assistance pour une demande de visa. Pouvez-vous m\'aider ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-tropicam-navy to-blue-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <FileCheck size={12} className="text-tropicam-orange" />
                        Service d'Assistance Visa
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Assistance <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Visa</span><br />
                        <span className="text-2xl md:text-3xl font-normal">On S'Occupe de Tout</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Simplifiez vos démarches de visa. Notre équipe expérimentée vous accompagne de A à Z : documents, RDV, suivi. Service rapide et fiable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Demander de l'Aide
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

            {/* Visa Services Grid */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Services Visa</h2>
                    <p className="text-gray-500">Assistance pour tous types de visas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visaServices.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-tropicam-navy mb-1">{service.country}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{service.countries}</p>
                                </div>
                                <service.icon className="text-tropicam-orange" size={24} />
                            </div>
                            
                            <div className="mb-4">
                                <VisaBadge status={service.status} country={service.country} />
                            </div>

                            <div className="space-y-2 mb-4 text-sm">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Clock size={14} className="text-tropicam-orange" />
                                    <span><strong>Délai:</strong> {service.processing}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <CreditCard size={14} className="text-tropicam-orange" />
                                    <span><strong>Coût:</strong> {service.cost}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                            <button
                                onClick={handleWhatsApp}
                                className="w-full bg-tropicam-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                            >
                                Demander Assistance
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Visa-Free Countries */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Destinations Sans Visa</h2>
                        <p className="text-gray-500">Pour les passeports marocains</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                        {visaFreeCountries.map((country, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm text-center">
                                <div className="text-2xl mb-2">✓</div>
                                <div className="font-bold text-tropicam-navy mb-1">{country.name}</div>
                                <div className="text-xs text-gray-600">{country.duration}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Ce Que Nous Faisons Pour Vous</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ourServices.map((service, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <service.icon className="text-tropicam-orange" size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-tropicam-navy mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-tropicam-navy mb-8 text-center">Documents Généralement Requis</h2>
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
                                    <strong>Note :</strong> La liste exacte varie selon le pays et le type de visa. Contactez-nous pour une liste personnalisée.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Besoin d'Aide pour Votre Visa ?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Notre équipe est là pour vous aider. Contactez-nous maintenant pour un devis gratuit et des conseils personnalisés.
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

export default Visa;

