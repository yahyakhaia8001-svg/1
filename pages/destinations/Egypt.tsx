import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Bus, Camera, Clock, MessageCircle, ShieldCheck, MapPin, Pyramid } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../../constants';
import VisaBadge from '../../components/VisaBadge';

const Egypt: React.FC = () => {
    useEffect(() => {
        document.title = "Voyage Égypte depuis Maroc | Pyramides & Croisière Nil | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Voyage organisé en Égypte depuis le Maroc. Pyramides de Gizeh, croisière sur le Nil, temples de Louxor. Visa à l\'arrivée. Prix à partir de 4,500 MAD.');
    }, []);

    const packages = [
        {
            name: 'Pack Découverte',
            duration: '7 Jours / 6 Nuits',
            price: 4500,
            includes: ['Vol aller-retour', 'Hôtel 4★ Le Caire', 'Petit-déjeuner', 'Transferts', 'Visite Pyramides', 'Musée Égyptien'],
            spotsLeft: 12
        },
        {
            name: 'Pack Complet',
            duration: '10 Jours / 9 Nuits',
            price: 7500,
            includes: ['Vol aller-retour', 'Hôtel 4★ Le Caire', 'Croisière Nil 3 nuits', 'Petit-déjeuner', 'Transferts', 'Guide francophone', 'Tous les sites'],
            spotsLeft: 8,
            popular: true
        },
        {
            name: 'Pack Luxe',
            duration: '12 Jours / 11 Nuits',
            price: 12000,
            includes: ['Vol aller-retour', 'Hôtel 5★ Le Caire', 'Croisière Nil 4 nuits luxe', 'Pension complète', 'Transferts VIP', 'Guide privé', 'Tous les sites + Abu Simbel'],
            spotsLeft: 5
        }
    ];

    const highlights = [
        'Pyramides de Gizeh et Sphinx',
        'Croisière sur le Nil (Louxor, Assouan)',
        'Temples de Karnak et Louxor',
        'Vallée des Rois',
        'Musée Égyptien du Caire',
        'Mosquée Al-Azhar',
        'Khan el-Khalili (souk historique)',
        'Abu Simbel (optionnel)'
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je suis intéressé(e) par un voyage organisé en Égypte depuis le Maroc. Pouvez-vous me donner plus d\'informations ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/70 via-tropicam-navy/50 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?q=80&w=2000&auto=format&fit=crop"
                    alt="Voyage Égypte Pyramides"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Pyramid size={12} className="text-yellow-400 fill-current" />
                        Destination Historique
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Voyage en <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Égypte</span><br />
                        <span className="text-2xl md:text-3xl font-normal">depuis le Maroc</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Découvrez les merveilles de l'Égypte antique : Pyramides, Sphinx, croisière sur le Nil, temples millénaires. Une aventure historique inoubliable.
                    </p>

                    <div className="mb-6">
                        <VisaBadge status="visa-on-arrival" country="Égypte" details="25 USD" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Réserver via WhatsApp
                        </button>
                        <Link
                            to="/contact"
                            className="bg-white text-tropicam-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                        >
                            Demander un Devis
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Visa à l'arrivée</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> À partir de 4,500 MAD</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Guide francophone</span>
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Packages Égypte</h2>
                    <p className="text-gray-500">Découvrez l'Égypte antique avec nos circuits organisés</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all relative ${pkg.popular ? 'border-2 border-tropicam-orange' : ''}`}>
                            {pkg.popular && (
                                <div className="absolute top-4 right-4 bg-tropicam-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                                    Le Plus Populaire
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
                                        À partir de {pkg.price.toLocaleString('fr-FR')} MAD
                                    </div>
                                    <div className="text-sm text-gray-500">par personne (vol inclus)</div>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {pkg.includes.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <Check size={16} className="text-green-500 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {pkg.spotsLeft && pkg.spotsLeft <= 5 && (
                                    <div className="mb-4 text-red-600 text-sm font-bold">
                                        ⚠️ Seulement {pkg.spotsLeft} places restantes
                                    </div>
                                )}
                                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                    <div className="text-xs text-gray-600 mb-1">Paiement en plusieurs fois disponible</div>
                                    <div className="text-sm font-bold text-tropicam-navy">
                                        Payez en 4 fois : {Math.ceil(pkg.price / 4).toLocaleString('fr-FR')} MAD/mois sans frais
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

            {/* Highlights */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Sites Incontournables</h2>
                        <p className="text-gray-500">Découvrez les merveilles de l'Égypte antique</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {highlights.map((highlight, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm text-center">
                                <div className="text-tropicam-orange mb-2 text-xl">✓</div>
                                <div className="text-sm font-bold text-tropicam-navy">{highlight}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à Découvrir l'Égypte ?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Contactez-nous maintenant pour recevoir votre devis personnalisé gratuit. Réponse garantie en 5 minutes.
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

export default Egypt;


