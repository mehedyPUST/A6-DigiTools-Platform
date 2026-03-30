import React from 'react';
import BnrPng from "../../assets/hero.png"
import bannerImg from "../../assets/banner.png"
import BannerBadge from './BannerBadge';
import { CiPlay1 } from 'react-icons/ci';
const Banner = () => {
    return (

        <div className='mx-auto  '>
            <div className=" w-11/12 mx-auto min-h-fit md:min-h-[500px] flex flex-col md:flex-row   gap-[53px] justify-center items-center mt-6 md:mt-25 pb-6 md:pb-0 pt-6 md:pt-0">

                <div className="space-y-6  relative mx-auto md:mx-0">
                    <BannerBadge></BannerBadge>
                    <h1 className='font-extrabold text-5xl'>Supercharge Your <br />Digital Work flow</h1>
                    <p className='line-clamp-3'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products</p>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <button className="btn btn-primary rounded-4xl w-40">Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-4xl w-40"> <span><CiPlay1 /></span> Watch Demo</button>
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