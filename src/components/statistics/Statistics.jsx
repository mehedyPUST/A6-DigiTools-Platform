import React from 'react';

const Statistics = () => {
    return (
        <div className="  mx-auto bg-linear-to-t from-purple-700 to-purple-500 py-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-white text-center">

                {/* Item 1 */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold">50K+</h2>
                    <p className="text-sm opacity-80 mt-1">Active Users</p>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-white/40"></div>

                {/* Item 2 */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">200+</h2>
                    <p className="text-sm opacity-80 mt-1">Premium Tools</p>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-white/40"></div>

                {/* Item 3 */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">4.9</h2>
                    <p className="text-sm opacity-80 mt-1">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Statistics;





