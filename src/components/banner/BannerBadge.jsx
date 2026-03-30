import React from 'react';

const BannerBadge = () => {
    return (
        <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full w-fit">

            {/* Blinking Dot */}
            <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
            </span>

            <p className="text-purple-600 font-medium">New: AI-Powered Tools Available</p>
        </div>
    );
};

export default BannerBadge;