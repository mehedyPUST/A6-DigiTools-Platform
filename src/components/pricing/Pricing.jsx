import React from 'react';
import PricingCards from './pricingCards/pricingCards';

const pricingPlans = [
    {
        id: 1,
        planName: "Starter",
        shortDescription: "Perfect for individuals getting started with AI tools",
        price: 0,
        features: [
            "Access to basic AI tools",
            "Limited API usage",
            "Standard response speed",
            "Community support",
            "Basic analytics dashboard"
        ],
        button: "Start Free Trial"
    },
    {
        id: 2,
        planName: "Pro",
        shortDescription: "Best for professionals who need advanced AI capabilities",
        price: 29,
        mostPopular: true,
        features: [
            "Access to all AI tools",
            "Higher API limits",
            "Faster response speed",
            "Priority support",
            "Advanced analytics & insights",
            "Custom AI model fine-tuning"
        ],
        button: "Start Pro Trial"
    },
    {
        id: 3,
        planName: "Enterprise",
        shortDescription: "Tailored solutions for large teams and organizations",
        price: 99,
        features: [
            "Unlimited AI tool access",
            "Unlimited API usage",
            "Dedicated support manager",
            "Custom integrations",
            "Team collaboration features",
            "Enterprise-grade security",
            "SLA & uptime guarantee"
        ],
        button: "Contact Sales"
    }
];

const Pricing = () => {
    return (
        <div className=' w-11/12 mx-auto mb-5 md:mb-10 '>
            <div className=' w-11/12 mx-auto text-center space-y-2 mt-10'>
                <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='mt-5'>
                <PricingCards pricingPlans={pricingPlans}></PricingCards>
            </div>

        </div>
    );
};

export default Pricing;