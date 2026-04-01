import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCards = ({ pricingPlans }) => {
    return (
        <div className='grid md:grid-cols-3 gap-5 md:gap-10'>
            {
                pricingPlans.map(plan => {
                    const {
                        planName,
                        features,
                        price,
                        shortDescription,
                        mostPopular,
                        button
                    } = plan;

                    return (
                        <div
                            key={plan.id}
                            className={` relative flex flex-col h-full  p-8 rounded-xl shadow-md ${mostPopular ? 'bg-purple-500 text-white' : 'bg-white'
                                }`}
                        >
                            {mostPopular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-200 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            )}

                            <h3 className='text-md font-bold mt-2 mb-2'>
                                {planName}
                            </h3>

                            <p className='text-sm'>
                                {shortDescription}
                            </p>

                            <h2 className='text-xl font-bold mt-2'>
                                $ {price}/Month
                            </h2>

                            <ul className='mb-4 mt-3'>
                                <PricingFeatures
                                    features={features}
                                    plan={plan}
                                />
                            </ul>

                            <button className={`btn  ${mostPopular ? 'bg-white text-purple-600' : 'btn-primary'} w-full rounded-full  mt-auto`}>
                                {button}
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default PricingCards;