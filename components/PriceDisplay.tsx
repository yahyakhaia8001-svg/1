import React from 'react';
import { Check } from 'lucide-react';

interface PriceDisplayProps {
    amount: number;
    originalPrice?: number;
    currency?: 'MAD';
    perPerson?: boolean;
    includesFlights?: boolean;
    showInstallments?: boolean;
    installmentMonths?: number;
    className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
    amount,
    originalPrice,
    currency = 'MAD',
    perPerson = true,
    includesFlights = true,
    showInstallments = true,
    installmentMonths = 4,
    className = ''
}) => {
    const discount = originalPrice ? Math.round(((originalPrice - amount) / originalPrice) * 100) : 0;
    const installmentAmount = Math.ceil(amount / installmentMonths);

    return (
        <div className={className}>
            <div className="flex items-baseline gap-3 mb-2">
                {originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                        {originalPrice.toLocaleString('fr-FR')} {currency}
                    </span>
                )}
                <span className="text-3xl md:text-4xl font-bold text-tropicam-navy">
                    {amount.toLocaleString('fr-FR')} {currency}
                </span>
                {originalPrice && discount > 0 && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        -{discount}%
                    </span>
                )}
            </div>
            
            <div className="text-sm text-gray-600 mb-3">
                {perPerson && <span>par personne</span>}
                {includesFlights && <span className="ml-1">(vol inclus)</span>}
            </div>

            {showInstallments && (
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                        <Check size={14} className="text-blue-600" />
                        <span className="font-medium">Paiement en plusieurs fois disponible</span>
                    </div>
                    <div className="text-base font-bold text-tropicam-navy">
                        Payez en {installmentMonths} fois : {installmentAmount.toLocaleString('fr-FR')} {currency}/mois sans frais
                    </div>
                </div>
            )}
        </div>
    );
};

export default PriceDisplay;


