import React, { useEffect } from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PolitiqueConfidentialite: React.FC = () => {
    useEffect(() => {
        document.title = "Politique de Confidentialité | Protection des Données | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Politique de confidentialité de Tropicam Voyage. Protection de vos données personnelles, utilisation des cookies, droits RGPD.');
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <Shield className="text-tropicam-orange" size={32} />
                        <h1 className="text-3xl md:text-4xl font-bold text-tropicam-navy">Politique de Confidentialité</h1>
                    </div>

                    <div className="prose max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">1. Introduction</h2>
                            <p className="text-gray-700">
                                Tropicam Voyage s'engage à protéger la confidentialité et la sécurité de vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">2. Données Collectées</h2>
                            <p className="text-gray-700 mb-4">Nous collectons les données suivantes :</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Données d'identité :</strong> Nom, prénom, date de naissance, CIN, numéro de passeport</li>
                                <li><strong>Données de contact :</strong> Adresse email, numéro de téléphone, adresse postale</li>
                                <li><strong>Données de réservation :</strong> Destination, dates de voyage, nombre de voyageurs, préférences</li>
                                <li><strong>Données de paiement :</strong> Informations nécessaires au traitement des paiements (gérées par nos prestataires sécurisés)</li>
                                <li><strong>Données de navigation :</strong> Cookies, adresse IP, pages visitées (pour améliorer notre site)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">3. Utilisation des Données</h2>
                            <p className="text-gray-700 mb-4">Vos données sont utilisées pour :</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Traiter et gérer vos réservations</li>
                                <li>Vous contacter concernant votre voyage</li>
                                <li>Vous envoyer des confirmations et documents de voyage</li>
                                <li>Améliorer nos services et votre expérience</li>
                                <li>Vous envoyer des offres promotionnelles (avec votre consentement)</li>
                                <li>Respecter nos obligations légales</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">4. Partage des Données</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Nous partageons vos données uniquement avec :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Prestataires de voyage :</strong> Compagnies aériennes, hôtels, agences locales (nécessaires à l'exécution de votre voyage)</li>
                                    <li><strong>Prestataires de paiement :</strong> Pour le traitement sécurisé des transactions</li>
                                    <li><strong>Autorités compétentes :</strong> Si requis par la loi (douanes, immigration, etc.)</li>
                                </ul>
                                <p>
                                    Nous ne vendons jamais vos données à des tiers à des fins commerciales.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">5. Cookies</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Notre site utilise des cookies pour :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Améliorer la navigation et l'expérience utilisateur</li>
                                    <li>Analyser le trafic et l'utilisation du site</li>
                                    <li>Personnaliser le contenu et les publicités</li>
                                </ul>
                                <p>
                                    Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités du site.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">6. Vos Droits (RGPD)</h2>
                            <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données personnelles</li>
                                <li><strong>Droit de rectification :</strong> Vous pouvez corriger vos données inexactes</li>
                                <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données (sous réserve de nos obligations légales)</li>
                                <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré</li>
                                <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données pour le marketing</li>
                                <li><strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement de vos données</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                Pour exercer ces droits, contactez-nous à <a href="mailto:contact@tropicamvoyage.ma" className="text-tropicam-orange underline">contact@tropicamvoyage.ma</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">7. Sécurité des Données</h2>
                            <p className="text-gray-700">
                                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou altération. Nos systèmes sont sécurisés et régulièrement mis à jour.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">8. Conservation des Données</h2>
                            <p className="text-gray-700">
                                Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, et conformément à nos obligations légales. Les données de réservation sont conservées pendant 5 ans après le voyage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">9. Contact</h2>
                            <p className="text-gray-700">
                                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :
                            </p>
                            <ul className="list-none pl-0 space-y-2 text-gray-700 mt-4">
                                <li><strong>Email :</strong> <a href="mailto:contact@tropicamvoyage.ma" className="text-tropicam-orange underline">contact@tropicamvoyage.ma</a></li>
                                <li><strong>Téléphone :</strong> +212 6 08 98 69 49</li>
                                <li><strong>Adresse :</strong> Bd General el Kettani, Résidence ARWA, 1er Étage N°4, Settat, Maroc</li>
                            </ul>
                        </section>

                        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
                            <p className="text-sm text-gray-700">
                                <strong>Dernière mise à jour :</strong> Janvier 2025
                            </p>
                            <p className="text-sm text-gray-700 mt-2">
                                Cette politique peut être modifiée. Nous vous informerons de tout changement significatif.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PolitiqueConfidentialite;

