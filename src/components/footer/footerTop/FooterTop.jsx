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
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 w-11/12 mx-auto'>


            <div className='md:col-span-1 space-y-3 text-center md:text-left'>
                <h1 className="text-2xl md:text-4xl font-bold md:font-extrabold text-white">
                    {footerInfo.brand}
                </h1>
                <p className='text-white text-sm md:text-base'>
                    {footerInfo.description}
                </p>
                <hr className='border-gray-600 md:hidden' />
            </div>


            <div className='md:col-span-3 grid grid-cols-3 gap-8 text-white'>

                {footerData.map((item) => (
                    <div key={item.id}>
                        <h3 className='text-md md:text-xl font-semibold mb-2'>
                            {item.title}
                        </h3>
                        <ul className='space-y-1'>
                            {item.links.map(link => (
                                <li key={link.id} className='hover:text-gray-300 transition text-sm md:text-base'>
                                    <a href={link.path}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>


            <div className='md:col-span-1 space-y-3 text-white'>
                <h3 className='text-md md:text-lg font-semibold '>Social Links</h3>
                <ul className='flex items-center gap-4'>
                    <li className='bg-white text-blue-950 rounded-md cursor-pointer p-1'>
                        <RiInstagramFill />
                    </li>
                    <li className='bg-white text-blue-950 rounded-md cursor-pointer p-1'>
                        <FaFacebookSquare />
                    </li>
                    <li className='bg-white text-blue-950 rounded-md cursor-pointer p-1'>
                        <FaXTwitter />
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default FooterTop;