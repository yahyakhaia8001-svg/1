import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, User, Calendar, Users, CreditCard, FileCheck, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../constants';
import DepartureCitySelector from './DepartureCitySelector';

interface BookingFormProps {
    initialDestination?: string;
    initialPrice?: number;
    onClose?: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ initialDestination, initialPrice, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        destination: initialDestination || '',
        departureCity: 'Casablanca',
        travelDate: '',
        returnDate: '',
        adults: 2,
        children: 0,
        infants: 0,
        roomType: 'double',
        travelers: [] as Array<{
            title: string;
            firstName: string;
            lastName: string;
            dateOfBirth: string;
            cin: string;
            passportNumber: string;
            passportExpiry: string;
            phone: string;
            email: string;
        }>,
        addOns: {
            insurance: false,
            transfers: false,
            roomUpgrade: false,
            mealPlan: false
        },
        paymentMethod: 'full',
        paymentType: 'card',
        termsAccepted: false
    });

    const totalPrice = initialPrice ? initialPrice * (formData.adults + formData.children * 0.7) : 0;
    const deposit = totalPrice * 0.3;
    const monthlyPayment = formData.paymentMethod === 'installment' ? totalPrice / 4 : 0;

    const handleNext = () => {
        if (step < 5) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleSubmit = () => {
        // Create WhatsApp message with booking details
        const message = `Réservation - ${formData.destination}%0A%0A` +
            `Ville de départ: ${formData.departureCity}%0A` +
            `Dates: ${formData.travelDate} au ${formData.returnDate}%0A` +
            `Voyageurs: ${formData.adults} adultes, ${formData.children} enfants%0A` +
            `Prix total: ${totalPrice.toLocaleString('fr-FR')} MAD%0A%0A` +
            `Merci de confirmer cette réservation.`;
        
        window.open(`${WHATSAPP_LINK}?text=${message}`, '_blank');
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-tropicam-navy text-white p-6 flex items-center justify-between rounded-t-2xl">
                    <h2 className="text-2xl font-bold">Réservation</h2>
                    {onClose && (
                        <button onClick={onClose} className="text-white hover:text-gray-300">
                            ✕
                        </button>
                    )}
                </div>

                {/* Progress Steps */}
                <div className="px-6 py-4 bg-gray-50 border-b">
                    <div className="flex items-center justify-between">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <React.Fragment key={s}>
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                                        s < step ? 'bg-green-500 text-white' :
                                        s === step ? 'bg-tropicam-orange text-white' :
                                        'bg-gray-300 text-gray-600'
                                    }`}>
                                        {s < step ? '✓' : s}
                                    </div>
                                    <span className="ml-2 text-sm font-medium hidden md:block">
                                        {s === 1 ? 'Voyage' : s === 2 ? 'Voyageurs' : s === 3 ? 'Options' : s === 4 ? 'Paiement' : 'Confirmation'}
                                    </span>
                                </div>
                                {s < 5 && <div className={`flex-1 h-1 mx-2 ${s < step ? 'bg-green-500' : 'bg-gray-300'}`}></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-6">
                    {/* Step 1: Trip Selection */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-tropicam-navy mb-6">Sélection du Voyage</h3>
                            
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Destination *</label>
                                <input
                                    type="text"
                                    value={formData.destination}
                                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-2 focus:ring-tropicam-navy/10 outline-none"
                                    placeholder="Ex: Istanbul, Dubaï, Le Caire..."
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Ville de départ *</label>
                                <DepartureCitySelector
                                    defaultCity={formData.departureCity}
                                    onSelect={(city) => setFormData({...formData, departureCity: city})}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Date de départ *</label>
                                    <input
                                        type="date"
                                        value={formData.travelDate}
                                        onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-2 focus:ring-tropicam-navy/10 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Date de retour *</label>
                                    <input
                                        type="date"
                                        value={formData.returnDate}
                                        onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-2 focus:ring-tropicam-navy/10 outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Adultes *</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={formData.adults}
                                        onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value) || 1})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-2 focus:ring-tropicam-navy/10 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Enfants (2-11 ans)</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.children}
                                        onChange={(e) => setFormData({...formData, children: parseInt(e.target.value) || 0})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-2 focus:ring-tropicam-navy/10 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Bébés (0-2 ans)</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.infants}
                                        onChange={(e) => setFormData({...formData, infants: parseInt(e.target.value) || 0})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-2 focus:ring-tropicam-navy/10 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Type de chambre</label>
                                <select
                                    value={formData.roomType}
                                    onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-2 focus:ring-tropicam-navy/10 outline-none"
                                >
                                    <option value="double">Double</option>
                                    <option value="twin">Twin (2 lits)</option>
                                    <option value="triple">Triple</option>
                                    <option value="family">Familiale</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Traveler Information */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-tropicam-navy mb-6">Informations des Voyageurs</h3>
                            
                            {Array.from({ length: formData.adults + formData.children }).map((_, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-xl p-4">
                                    <h4 className="font-bold text-tropicam-navy mb-4">Voyageur {idx + 1}</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Civilité</label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200">
                                                <option>M.</option>
                                                <option>Mme</option>
                                                <option>Mlle</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Nom (comme sur passeport) *</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Prénom (comme sur passeport) *</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Date de naissance *</label>
                                            <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Numéro CIN</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Numéro passeport *</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Date d'expiration passeport *</label>
                                            <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone *</label>
                                            <input type="tel" placeholder="+212 6XX XXX XXX" className="w-full px-4 py-3 rounded-xl border border-gray-200" required />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Step 3: Add-ons */}
                    {step === 3 && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-tropicam-navy mb-6">Options & Services Supplémentaires</h3>
                            
                            <div className="space-y-4">
                                <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="checkbox"
                                        checked={formData.addOns.insurance}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            addOns: {...formData.addOns, insurance: e.target.checked}
                                        })}
                                        className="w-5 h-5 text-tropicam-orange"
                                    />
                                    <div className="flex-1">
                                        <div className="font-bold text-tropicam-navy">Assurance Voyage</div>
                                        <div className="text-sm text-gray-600">Protection complète (recommandée) - 250 MAD/personne</div>
                                    </div>
                                    <div className="font-bold text-tropicam-navy">250 MAD</div>
                                </label>

                                <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="checkbox"
                                        checked={formData.addOns.transfers}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            addOns: {...formData.addOns, transfers: e.target.checked}
                                        })}
                                        className="w-5 h-5 text-tropicam-orange"
                                    />
                                    <div className="flex-1">
                                        <div className="font-bold text-tropicam-navy">Transferts Aéroport</div>
                                        <div className="text-sm text-gray-600">Aller-retour - 300 MAD</div>
                                    </div>
                                    <div className="font-bold text-tropicam-navy">300 MAD</div>
                                </label>

                                <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="checkbox"
                                        checked={formData.addOns.roomUpgrade}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            addOns: {...formData.addOns, roomUpgrade: e.target.checked}
                                        })}
                                        className="w-5 h-5 text-tropicam-orange"
                                    />
                                    <div className="flex-1">
                                        <div className="font-bold text-tropicam-navy">Upgrade Chambre</div>
                                        <div className="text-sm text-gray-600">Suite ou chambre supérieure - Sur devis</div>
                                    </div>
                                </label>

                                <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="checkbox"
                                        checked={formData.addOns.mealPlan}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            addOns: {...formData.addOns, mealPlan: e.target.checked}
                                        })}
                                        className="w-5 h-5 text-tropicam-orange"
                                    />
                                    <div className="flex-1">
                                        <div className="font-bold text-tropicam-navy">Plan Repas Amélioré</div>
                                        <div className="text-sm text-gray-600">Demi-pension ou pension complète - Sur devis</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Payment */}
                    {step === 4 && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-tropicam-navy mb-6">Paiement</h3>
                            
                            {/* Price Summary */}
                            <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                <h4 className="font-bold text-tropicam-navy mb-4">Récapitulatif</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Voyage {formData.destination}</span>
                                        <span className="font-bold">{totalPrice.toLocaleString('fr-FR')} MAD</span>
                                    </div>
                                    {formData.addOns.insurance && (
                                        <div className="flex justify-between text-gray-600">
                                            <span>Assurance</span>
                                            <span>250 MAD</span>
                                        </div>
                                    )}
                                    {formData.addOns.transfers && (
                                        <div className="flex justify-between text-gray-600">
                                            <span>Transferts</span>
                                            <span>300 MAD</span>
                                        </div>
                                    )}
                                    <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span className="text-tropicam-orange">{totalPrice.toLocaleString('fr-FR')} MAD</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-4">Mode de paiement</label>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-4 p-4 border-2 border-tropicam-orange rounded-xl cursor-pointer bg-orange-50">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="full"
                                            checked={formData.paymentMethod === 'full'}
                                            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                                            className="w-5 h-5 text-tropicam-orange"
                                        />
                                        <div className="flex-1">
                                            <div className="font-bold text-tropicam-navy">Paiement intégral</div>
                                            <div className="text-sm text-gray-600">Réduction de 5% - {Math.round(totalPrice * 0.95).toLocaleString('fr-FR')} MAD</div>
                                        </div>
                                    </label>

                                    <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="deposit"
                                            checked={formData.paymentMethod === 'deposit'}
                                            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                                            className="w-5 h-5 text-tropicam-orange"
                                        />
                                        <div className="flex-1">
                                            <div className="font-bold text-tropicam-navy">Acompte 30% + Solde avant départ</div>
                                            <div className="text-sm text-gray-600">Acompte: {Math.round(deposit).toLocaleString('fr-FR')} MAD maintenant</div>
                                        </div>
                                    </label>

                                    <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="installment"
                                            checked={formData.paymentMethod === 'installment'}
                                            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                                            className="w-5 h-5 text-tropicam-orange"
                                        />
                                        <div className="flex-1">
                                            <div className="font-bold text-tropicam-navy">Paiement en 4 fois</div>
                                            <div className="text-sm text-gray-600">{Math.round(monthlyPayment).toLocaleString('fr-FR')} MAD/mois sans frais</div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Payment Type */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-4">Méthode de paiement</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                        <input
                                            type="radio"
                                            name="paymentType"
                                            value="card"
                                            checked={formData.paymentType === 'card'}
                                            onChange={(e) => setFormData({...formData, paymentType: e.target.value})}
                                            className="w-5 h-5 text-tropicam-orange"
                                        />
                                        <span className="font-bold">Carte Bancaire</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                        <input
                                            type="radio"
                                            name="paymentType"
                                            value="transfer"
                                            checked={formData.paymentType === 'transfer'}
                                            onChange={(e) => setFormData({...formData, paymentType: e.target.value})}
                                            className="w-5 h-5 text-tropicam-orange"
                                        />
                                        <span className="font-bold">Virement</span>
                                    </label>
                                </div>
                            </div>

                            {/* Terms */}
                            <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.termsAccepted}
                                    onChange={(e) => setFormData({...formData, termsAccepted: e.target.checked})}
                                    className="w-5 h-5 text-tropicam-orange mt-1"
                                    required
                                />
                                <span className="text-sm text-gray-700">
                                    J'accepte les <Link to="/conditions-generales" className="text-tropicam-orange underline">conditions générales</Link> et la <Link to="/politique-confidentialite" className="text-tropicam-orange underline">politique de confidentialité</Link> *
                                </span>
                            </label>
                        </div>
                    )}

                    {/* Step 5: Confirmation */}
                    {step === 5 && (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="text-green-600" size={48} />
                            </div>
                            <h3 className="text-3xl font-bold text-tropicam-navy mb-4">Demande de Réservation Envoyée !</h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                Merci ! Notre équipe a bien reçu votre demande. Nous allons vous contacter via WhatsApp dans les prochaines minutes pour finaliser votre réservation.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-green-600 transition-colors"
                                >
                                    <MessageCircle size={20} /> Discuter maintenant
                                </a>
                                <div className="text-sm text-gray-500">
                                    Référence: TV-{Date.now().toString().slice(-6)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                {step < 5 && (
                    <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex justify-between rounded-b-2xl">
                        {step > 1 && (
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 font-bold text-tropicam-navy hover:bg-gray-100 transition-colors"
                            >
                                <ArrowLeft size={20} />
                                Retour
                            </button>
                        )}
                        <div className="flex-1"></div>
                        <button
                            onClick={step === 4 ? handleSubmit : handleNext}
                            disabled={step === 4 && !formData.termsAccepted}
                            className="flex items-center gap-2 bg-tropicam-orange hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {step === 4 ? 'Confirmer' : 'Suivant'}
                            {step < 4 && <ArrowRight size={20} />}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingForm;

