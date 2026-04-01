import React from 'react';
import FooterTop from './footerTop/FooterTop';
import FooterBottom from './footerBottom/FooterBottom';

const Footer = () => {
    return (
        <div className='bg-blue-950   py-5 md:py-10'>
            <FooterTop></FooterTop>
            <hr className='border-gray-600 mt-5 mb-5' />
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Footer;