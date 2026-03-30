import React from 'react';

import bannerImg from "../../assets/banner.png"
import BannerBadge from './BannerBadge';
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className=" flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center mt-6 md:mt-24 pb-6 md:pb-0 pt-6 md:pt-0">

                <div className="space-y-6 relative">
                    <div className='flex justify-center md:block'>
                        <BannerBadge />
                    </div>

                    <h1 className='font-extrabold text-center md:text-left text-4xl md:text-6xl'>
                        Supercharge Your <br className="hidden md:block" /> Digital Work flow
                    </h1>

                    <p className='line-clamp-3 md:line-clamp-none text-center md:text-left'>
                        Access premium AI tools, design assets, templates, and productivity <br className="hidden md:block" />
                        software—all in one place. Start creating faster today. <br className="hidden md:block" />
                        Explore Products
                    </p>

                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <button className="btn btn-primary rounded-4xl w-40">Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-4xl w-40">
                            <span><CiPlay1 /></span> Watch Demo
                        </button>
                    </div>
                </div>

                <div className="w-[90vw] md:max-w-[540px] mx-auto md:mx-0">
                    <img className="w-full h-full object-cover" src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;