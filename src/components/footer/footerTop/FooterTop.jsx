import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const footerData = [
    {
        id: 1,
        title: "Product",
        links: [
            { id: 1, name: "Features", path: "/features" },
            { id: 2, name: "Pricing", path: "/pricing" },
            { id: 3, name: "Templates", path: "/templates" },
            { id: 4, name: "Integrations", path: "/integrations" },
        ],
    },
    {
        id: 2,
        title: "Company",
        links: [
            { id: 1, name: "About", path: "/about" },
            { id: 2, name: "Blog", path: "/blog" },
            { id: 3, name: "Careers", path: "/careers" },
            { id: 4, name: "Press", path: "/press" },
        ],
    },
    {
        id: 3,
        title: "Resources",
        links: [
            { id: 1, name: "Documentation", path: "/docs" },
            { id: 2, name: "Help Center", path: "/help" },
            { id: 3, name: "Community", path: "/community" },
            { id: 4, name: "Contact", path: "/contact" },
        ],
    },
];

const footerInfo = {
    brand: "DigiTools",
    description:
        "Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.",
};


const FooterTop = () => {
    return (
        <div className='grid grid-cols-17 w-11/12 mx-auto gap-10'>
            <div className='col-span-4 space-y-3'>
                <h1 className="text-2xl md:text-4xl font-extrabold text-white ">{footerInfo.brand}</h1>
                <p className=' text-white'>{footerInfo.description}</p>
            </div>

            <div className='col-span-9 grid grid-cols-3 text-white'>
                {footerData.map((footerDataTitle) => {
                    return (
                        <div>
                            <h3 className='text-white text-xl'>{footerDataTitle.title}</h3>
                            <ul>
                                {footerDataTitle.links.map(link => {
                                    return (
                                        <li>
                                            <a href={link.path}>{link.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>


                    )

                })}

            </div>

            <div className='col-span-4 space-y-3 text-white'>
                <h3>Social Links</h3>
                <ul className='flex items-center gap-4'>
                    <li className='bg-white text-blue-950 rounded-md p-0.75'><a href="/"> <RiInstagramFill /></a></li>
                    <li className='bg-white text-blue-950 rounded-md p-0.75'><a href="/"> <FaFacebookSquare /></a></li>
                    <li className='bg-white text-blue-950 rounded-md p-0.75'><a href="/"> <FaXTwitter /></a></li>

                </ul>
            </div>
        </div>
    );
};

export default FooterTop;