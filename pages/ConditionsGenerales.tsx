import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShieldCheck } from 'lucide-react';
import { LICENSE_NUMBER } from '../constants';

const ConditionsGenerales: React.FC = () => {
    useEffect(() => {
        document.title = "Conditions Générales de Vente | Tropicam Voyage";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', 'Conditions générales de vente de Tropicam Voyage. Conditions de réservation, paiement, annulation et modifications.');
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <FileText className="text-tropicam-orange" size={32} />
                        <h1 className="text-3xl md:text-4xl font-bold text-tropicam-navy">Conditions Générales de Vente</h1>
                    </div>

                    <div className="prose max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">1. Informations Légales</h2>
                            <p className="text-gray-700 mb-4">
                                <strong>Tropicam Voyage</strong> est une agence de voyage agréée par le Ministère du Tourisme du Maroc.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Raison sociale: Tropicam Voyage</li>
                                <li>Licence N°: {LICENSE_NUMBER}</li>
                                <li>Adresse: Bd General el Kettani, Résidence ARWA, 1er Étage N°4, Settat, Maroc</li>
                                <li>Téléphone: +212 6 08 98 69 49</li>
                                <li>Email: contact@tropicamvoyage.ma</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">2. Conditions de Réservation</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong>2.1.</strong> Toute réservation implique l'acceptation sans réserve des présentes conditions générales.
                                </p>
                                <p>
                                    <strong>2.2.</strong> La réservation devient ferme et définitive après versement d'un acompte de 30% du montant total ou paiement intégral selon l'option choisie.
                                </p>
                                <p>
                                    <strong>2.3.</strong> Le solde doit être réglé au plus tard 30 jours avant le départ, sauf indication contraire.
                                </p>
                                <p>
                                    <strong>2.4.</strong> En cas de non-paiement du solde dans les délais, la réservation sera annulée et les sommes versées seront retenues selon les conditions d'annulation.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">3. Conditions de Paiement</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong>3.1.</strong> Nous acceptons les modes de paiement suivants :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Paiement en agence (espèces)</li>
                                    <li>Virement bancaire</li>
                                    <li>Carte bancaire (CMI)</li>
                                    <li>Paiement en plusieurs fois (sans frais, conditions applicables)</li>
                                </ul>
                                <p>
                                    <strong>3.2.</strong> En cas de paiement en plusieurs fois, les échéances sont fixées lors de la réservation.
                                </p>
                                <p>
                                    <strong>3.3.</strong> Un paiement intégral en une fois bénéficie d'une réduction de 5%.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">4. Conditions d'Annulation</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong>4.1.</strong> Toute annulation doit être notifiée par écrit (email ou courrier).
                                </p>
                                <p>
                                    <strong>4.2.</strong> Les frais d'annulation sont calculés selon les délais :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Plus de 60 jours avant départ : 10% du montant total</li>
                                    <li>Entre 30 et 60 jours : 30% du montant total</li>
                                    <li>Entre 15 et 30 jours : 50% du montant total</li>
                                    <li>Moins de 15 jours : 100% du montant total (non remboursable)</li>
                                </ul>
                                <p>
                                    <strong>4.3.</strong> Les frais d'annulation peuvent varier selon les prestataires (compagnies aériennes, hôtels). Les conditions spécifiques sont communiquées lors de la réservation.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">5. Modifications de Réservation</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong>5.1.</strong> Toute modification de réservation est soumise à disponibilité et peut entraîner des frais supplémentaires.
                                </p>
                                <p>
                                    <strong>5.2.</strong> Les frais de modification sont de 200 MAD par modification, en plus des éventuels frais des prestataires.
                                </p>
                                <p>
                                    <strong>5.3.</strong> Les modifications de dates sont possibles jusqu'à 30 jours avant le départ, sous réserve de disponibilité.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">6. Responsabilités</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong>6.1.</strong> Tropicam Voyage agit en tant qu'intermédiaire entre le client et les prestataires (compagnies aériennes, hôtels, etc.).
                                </p>
                                <p>
                                    <strong>6.2.</strong> Nous ne sommes pas responsables des retards, annulations ou modifications imposés par les prestataires (grèves, conditions météo, etc.).
                                </p>
                                <p>
                                    <strong>6.3.</strong> Il est fortement recommandé de souscrire une assurance voyage pour couvrir les risques d'annulation, de rapatriement, etc.
                                </p>
                                <p>
                                    <strong>6.4.</strong> Le client est responsable de la validité de ses documents de voyage (passeport, visa) et de leur conformité avec les exigences du pays de destination.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">7. Réclamations</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong>7.1.</strong> Toute réclamation doit être adressée par écrit à Tropicam Voyage dans un délai de 8 jours suivant le retour du voyage.
                                </p>
                                <p>
                                    <strong>7.2.</strong> Nous nous engageons à répondre à toute réclamation dans un délai de 30 jours.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">8. Force Majeure</h2>
                            <p className="text-gray-700">
                                En cas de force majeure (guerre, émeute, catastrophe naturelle, pandémie, etc.), Tropicam Voyage se réserve le droit d'annuler ou de modifier le voyage. Dans ce cas, un remboursement ou report sera proposé selon les conditions des prestataires.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-tropicam-navy mb-4">9. Droit Applicable</h2>
                            <p className="text-gray-700">
                                Les présentes conditions sont régies par le droit marocain. Tout litige sera soumis aux tribunaux compétents de Casablanca.
                            </p>
                        </section>

                        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
                            <p className="text-sm text-gray-700">
                                <strong>Dernière mise à jour :</strong> Janvier 2025
                            </p>
                            <p className="text-sm text-gray-700 mt-2">
                                Pour toute question concernant ces conditions, contactez-nous à <a href="mailto:contact@tropicamvoyage.ma" className="text-tropicam-orange underline">contact@tropicamvoyage.ma</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConditionsGenerales;

