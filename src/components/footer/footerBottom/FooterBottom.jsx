import React from 'react';

const FooterBottom = () => {
    return (
        <div className='blok md:flex text-center  justify-between text-white w-11/12 mx-auto'>
            <h5 className=''>© 2026 DigiTools • All rights reserved.</h5>
            <ul className='flex gap-5 justify-center md:justify-start'>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Cookies</a></li>

            </ul>
        </div >
    );
};

export default FooterBottom;