import { Check, CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({ features, plan }) => {
    return (
        <div>
            {
                features.map((feature, indx) => {
                    return (
                        <li key={indx} className="flex items-center gap-2 text-gray-600 text-sm">
                            <Check size={16} className="text-green-500" />
                            <span className={`${plan.mostPopular ? 'text-white' : 'text-black'}`}>{feature}</span>
                        </li>
                    )
                })
            }
        </div>
    );
};

export default PricingFeatures;