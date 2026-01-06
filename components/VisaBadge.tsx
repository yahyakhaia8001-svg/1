import React from 'react';
import { CheckCircle, AlertCircle, Clock, XCircle } from 'lucide-react';

interface VisaBadgeProps {
    status: 'visa-free' | 'visa-on-arrival' | 'e-visa' | 'visa-required';
    country: string;
    details?: string;
    className?: string;
}

const VisaBadge: React.FC<VisaBadgeProps> = ({ status, country, details, className = '' }) => {
    const config = {
        'visa-free': {
            icon: CheckCircle,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            text: 'Sans visa',
            emoji: '🟢'
        },
        'visa-on-arrival': {
            icon: Clock,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
            text: 'Visa à l\'arrivée',
            emoji: '🟠'
        },
        'e-visa': {
            icon: AlertCircle,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            text: 'E-visa',
            emoji: '🟡'
        },
        'visa-required': {
            icon: XCircle,
            color: 'text-red-600',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
            text: 'Visa requis',
            emoji: '🔴'
        }
    };

    const configItem = config[status];
    const Icon = configItem.icon;

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${configItem.bgColor} ${configItem.borderColor} ${className}`}>
            <span className="text-sm">{configItem.emoji}</span>
            <Icon size={16} className={configItem.color} />
            <span className={`text-sm font-bold ${configItem.color}`}>
                {configItem.text}
            </span>
            {details && (
                <span className="text-xs text-gray-600 ml-1">
                    ({details})
                </span>
            )}
        </div>
    );
};

export default VisaBadge;


