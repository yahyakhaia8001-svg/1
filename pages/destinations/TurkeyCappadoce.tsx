import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Bus, Camera, Clock, MessageCircle, ShieldCheck, Mountain, Sunrise } from 'lucide-react';
import { WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../../constants';

const TurkeyCappadoce: React.FC = () => {
    useEffect(() => {
        document.title = "Voyage Cappadoce depuis Maroc | Montgolfière & Hôtels Caves | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Voyage unique en Cappadoce depuis le Maroc. Vol en montgolfière, hôtels troglodytes, cheminées de fées. Combinable avec Istanbul. Prix à partir de 8,000 MAD.');
    }, []);

    const highlights = [
        { icon: Sunrise, text: 'Vol en montgolfière au lever du soleil' },
        { icon: Mountain, text: 'Hôtels troglodytes uniques au monde' },
        { icon: Camera, text: 'Paysages féeriques et cheminées de fées' },
        { icon: Bus, text: 'Combinable avec Istanbul (circuit 10 jours)' },
    ];

    const packages = [
        {
            name: 'Pack Découverte',
            duration: '4 Jours / 3 Nuits',
            price: 8000,
            includes: ['Vol aller-retour', 'Hôtel troglodyte 4★', 'Petit-déjeuner', 'Transferts', '1 excursion'],
            spotsLeft: 6
        },
        {
            name: 'Pack Complet',
            duration: '5 Jours / 4 Nuits',
            price: 11000,
            includes: ['Vol aller-retour', 'Hôtel troglodyte 5★', 'Petit-déjeuner', 'Transferts', 'Vol montgolfière', '3 excursions'],
            spotsLeft: 4,
            popular: true
        },
        {
            name: 'Circuit Istanbul + Cappadoce',
            duration: '10 Jours / 9 Nuits',
            price: 15000,
            includes: ['Vol aller-retour', '4 nuits Istanbul + 4 nuits Cappadoce', 'Vols internes', 'Tous transferts', 'Vol montgolfière', 'Excursions guidées'],
            spotsLeft: 3
        }
    ];

    const experiences = [
        'Vol en montgolfière au lever du soleil (inclus dans Pack Complet)',
        'Visite des villes souterraines de Kaymakli',
        'Vallée de l\'Amour et cheminées de fées',
        'Ateliers de poterie à Avanos',
        'Coucher de soleil depuis le château d\'Uçhisar',
        'Dégustation de vins locaux',
        'Balade à cheval dans les vallées',
        'Musée en plein air de Göreme'
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je suis intéressé(e) par un voyage en Cappadoce depuis le Maroc. Pouvez-vous me donner plus d\'informations ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/70 via-tropicam-navy/50 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2000&auto=format&fit=crop"
                    alt="Voyage Cappadoce montgolfière"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Star size={12} className="text-yellow-400 fill-current" />
                        Expérience Unique au Monde
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Voyage en <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Cappadoce</span><br />
                        <span className="text-2xl md:text-3xl font-normal">Montgolfière & Hôtels Caves</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Découvrez un paysage lunaire unique : vol en montgolfière, hôtels troglodytes, cheminées de fées. Une expérience inoubliable !
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
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> À partir de 8,000 MAD</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Combinable Istanbul</span>
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
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Formules Cappadoce</h2>
                    <p className="text-gray-500">Choisissez votre expérience unique</p>
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

            {/* Experiences */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Expériences Inoubliables</h2>
                        <p className="text-gray-500">Découvrez les merveilles de la Cappadoce</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-tropicam-orange/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Check className="text-tropicam-orange" size={20} />
                                    </div>
                                    <p className="text-gray-700 font-medium">{exp}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Time to Visit */}
            <section className="py-16 container mx-auto px-4">
                <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-3xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl font-bold text-tropicam-navy mb-4">Meilleure Période</h2>
                        <p className="text-gray-700 mb-6">
                            <strong>Avril à Octobre</strong> : Période idéale. Les vols en montgolfière sont possibles toute l'année, mais les conditions sont optimales au printemps et en automne.
                        </p>
                        <p className="text-gray-600 text-sm">
                            L'hiver offre un paysage enneigé magnifique, mais certaines activités peuvent être limitées. L'été peut être chaud, mais les matinées sont parfaites pour la montgolfière.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt pour l'Expérience Cappadoce ?</h2>
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

export default TurkeyCappadoce;


