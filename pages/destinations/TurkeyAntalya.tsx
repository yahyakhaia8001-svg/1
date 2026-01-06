import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Bus, Camera, Clock, MessageCircle, ShieldCheck, Sun, Waves } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../../constants';

const TurkeyAntalya: React.FC = () => {
    useEffect(() => {
        document.title = "Séjour Antalya depuis Maroc | Vacances Plage Tout Compris | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Séjour Antalya all inclusive depuis le Maroc. Hôtels 5★ en bord de mer, plages paradisiaques, activités nautiques. Prix à partir de 5,500 MAD. Réservez maintenant !');
    }, []);

    const highlights = [
        { icon: Sun, text: 'Plages paradisiaques et eau turquoise' },
        { icon: Hotel, text: 'Hôtels 4★ et 5★ all inclusive en bord de mer' },
        { icon: Waves, text: 'Activités nautiques incluses' },
        { icon: Camera, text: 'Excursions guidées en français' },
    ];

    const packages = [
        {
            name: 'Pack Économique',
            duration: '7 Jours / 6 Nuits',
            price: 5500,
            includes: ['Vol aller-retour', 'Hôtel 4★ all inclusive', 'Transferts', 'Plage privée'],
            spotsLeft: 12
        },
        {
            name: 'Pack Confort',
            duration: '7 Jours / 6 Nuits',
            price: 7500,
            includes: ['Vol aller-retour', 'Hôtel 5★ all inclusive', 'Transferts', 'Plage privée', 'Spa', '1 excursion'],
            spotsLeft: 8,
            popular: true
        },
        {
            name: 'Pack Luxe',
            duration: '10 Jours / 9 Nuits',
            price: 12000,
            includes: ['Vol aller-retour', 'Hôtel 5★ luxe all inclusive', 'Transferts VIP', 'Spa illimité', '3 excursions', 'Chambre vue mer'],
            spotsLeft: 4
        }
    ];

    const activities = [
        'Plongée sous-marine',
        'Jet ski',
        'Parasailing',
        'Croisière en yacht',
        'Visite des cascades de Düden',
        'Vieille ville d\'Antalya (Kaleiçi)',
        'Aquarium d\'Antalya',
        'Parc aquatique'
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je suis intéressé(e) par un séjour à Antalya depuis le Maroc. Pouvez-vous me donner plus d\'informations ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/70 via-tropicam-navy/50 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop"
                    alt="Séjour Antalya depuis Maroc"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Sun size={12} className="text-yellow-400 fill-current" />
                        Destination Plage N°1
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Séjour <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Antalya</span><br />
                        <span className="text-2xl md:text-3xl font-normal">All Inclusive depuis le Maroc</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Plages paradisiaques, eau turquoise, hôtels 5★ all inclusive. La destination parfaite pour vos vacances d'été en famille ou en couple.
                    </p>

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
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Sans Visa</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> À partir de 5,500 MAD</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> All Inclusive</span>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <div className="w-12 h-12 bg-tropicam-orange/10 rounded-xl flex items-center justify-center shrink-0">
                                    <item.icon className="text-tropicam-orange" size={24} />
                                </div>
                                <span className="font-bold text-tropicam-navy text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Formules Antalya</h2>
                    <p className="text-gray-500">Choisissez votre séjour all inclusive idéal</p>
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

            {/* Activities */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Activités Incluses & Excursions</h2>
                        <p className="text-gray-500">Profitez d'une multitude d'activités pendant votre séjour</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {activities.map((activity, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm text-center">
                                <div className="text-tropicam-orange mb-2">✓</div>
                                <div className="text-sm font-bold text-tropicam-navy">{activity}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Time to Visit */}
            <section className="py-16 container mx-auto px-4">
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl font-bold text-tropicam-navy mb-4">Meilleure Période</h2>
                        <p className="text-gray-700 mb-6">
                            <strong>Mai à Octobre</strong> : Période idéale pour profiter des plages et de la mer. Températures entre 25°C et 35°C.
                        </p>
                        <p className="text-gray-600 text-sm">
                            Les mois de juillet et août sont les plus chauds et les plus fréquentés. Pour un meilleur rapport qualité-prix, privilégiez mai, juin, septembre ou octobre.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt pour vos Vacances à Antalya ?</h2>
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

export default TurkeyAntalya;


