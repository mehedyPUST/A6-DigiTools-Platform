import React from 'react';

const WorkFlow = () => {
    return (
        <div className=' flex flex-col justify-center items-center bg-linear-to-r from-purple-500 to-purple-700 p-15 space-y-3'>
            <h2 className='text-2xl text-center md:text-4xl md:font-bold text-white'>Ready to Transform Your Workflow?</h2>
            <p className='text-white text-center'>Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
            <div className='flex flex-col md:flex-row items-center gap-5 '>
                <button className="btn btn-primary rounded-4xl w-40">Explore Products </button>
                <button className="btn btn-outline btn-primary rounded-4xl w-40 text-white border-white">View Pricing</button>
            </div>
            <p className='text-white font-sm'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default WorkFlow;