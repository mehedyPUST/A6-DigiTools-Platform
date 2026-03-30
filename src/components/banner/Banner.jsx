import React from 'react';
import BnrPng from "../../assets/hero.png"
import bannerImg from "../../assets/banner.png"
const Banner = () => {
    return (

        <div className='mx-auto'>
            <div className=" w-11/12 mx-auto min-h-fit md:min-h-[500px] flex flex-col md:flex-row  gap-[53px] justify-center mt-6 md:mt-25 pb-6 md:pb-0 pt-6 md:pt-0">

                <div className="space-y-6 max-w-[90vw] md:max-w-[577px] relative mx-auto md:mx-0">
                    <h2 className="font-extrabold text-[40px]">Our Popular Tours</h2>
                    <p className="text-base/[26px]">Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.</p>
                    <ul className="list-disc pl-10 space-y-4 text-justify">
                        <li className="text-base/[26px]">Tempus euismod lacus mauris dignissim quis in ultrices. Magna nullam odio neque diam. Sociis erat at .</li>
                        <li className="text-base/[26px]">Adipiscing ornare pellentesque mauris volutpat tortor vitae platea porta lacus. Lectus suspendisse nullam.</li>
                        <li className="text-base/[26px]">Accumsan eget et turpis praesent lorem egestas enim elit bibendum. Risus at in.</li>
                    </ul>
                    <p className="text-base/[26px]">Amet consectetur. Vulputate commodo felis molestie risus ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. Id bibendum nunc senectus semper tincidunt.</p>

                    <button className="md:absolute md:bottom-0 w-[174px] min-h-[50px] p-2 mb-6 md:mb-0 mt-4 md:mt-0 rounded-[8px] bg-[#FF5400] text-[20px] font-extrabold text-white">Read More</button>
                </div>

                <div className="w-[90vw] md:max-w-[540px] mx-auto md:mx-0">
                    <img className="w-full h-full object-cover" src={bannerImg} alt="" />

                </div>

            </div>

        </div>

    );
};

export default Banner;