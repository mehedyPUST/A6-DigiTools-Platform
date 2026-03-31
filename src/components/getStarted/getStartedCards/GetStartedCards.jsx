// import React from 'react';
// import accIcon from "../../../assets/user.png"
// import productsIcon from "../../../assets/package.png"
// import rcktIcon from "../../../assets/rocket.png"
// const GetStartedCards = () => {
//     return (
//         <div className=' w-11/12 mx-auto grid grid-cols-3 mt-10'>
//             <div className='shadow-md rounded-xl p-4  flex flex-col items-center justify-center space-y-2'>
//                 <img className='rounded-full  bg-purple-200 p-5' src={accIcon} alt="" />
//                 <h3 className='text-2xl font-bold'>Create Account</h3>
//                 <p>Sign up for free in seconds. No credit card required to get started.</p>
//             </div>
//             <div className='shadow-md rounded-xl p-4 flex flex-col items-center justify-center space-y-2'>
//                 <img className='rounded-full bg-purple-200 p-5' src={productsIcon} alt="" />
//                 <h3 className='text-2xl font-bold'>Create Account</h3>
//                 <p>Sign up for free in seconds. No credit card required to get started.</p>
//             </div>
//             <div className='shadow-md rounded-xl p-4 flex flex-col items-center justify-center space-y-2'>
//                 <img className='rounded-full bg-purple-200 p-5   ' src={rcktIcon} alt="" />
//                 <h3 className='text-2xl font-bold'>Create Account</h3>
//                 <p>Sign up for free in seconds. No credit card required to get started.</p>
//             </div>
//         </div>
//     );
// };

// export default GetStartedCards;


import React from "react";
import accIcon from "../../../assets/user.png";
import productsIcon from "../../../assets/package.png";
import rocketIcon from "../../../assets/rocket.png";

const cardsData = [
    {
        id: "01",
        title: "Create Account",
        desc: "Sign up for free in seconds. No credit card required to get started.",
        icon: accIcon,
    },
    {
        id: "02",
        title: "Choose Products",
        desc: "Browse our catalog and select the tools that fit your needs.",
        icon: productsIcon,
    },
    {
        id: "03",
        title: "Start Creating",
        desc: "Download and start using your premium tools immediately.",
        icon: rocketIcon,
    },
];

const GetStartedCards = () => {
    return (
        <div className=" mx-auto grid md:grid-cols-3 gap-6 mt-16">
            {cardsData.map((card) => (
                <div
                    key={card.id}
                    className="relative bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition"
                >
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold w-8 h-8 flex items-center justify-center rounded-full">
                        {card.id}
                    </div>

                    {/* Icon */}
                    <div className="bg-purple-200 p-4 rounded-full mb-4">
                        <img className="w-10 h-10" src={card.icon} alt="" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800">
                        {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 mt-2">
                        {card.desc}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default GetStartedCards;