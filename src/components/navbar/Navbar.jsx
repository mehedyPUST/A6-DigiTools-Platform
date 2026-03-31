import React from 'react';
import { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import GetStartedBtn from './GetStartedBtn';
const routes = [
    {
        id: 1,
        name: "Products", //home
        path: "/products" // 
    },
    {
        id: 2,
        name: "Features", //about
        path: "/features"
    },
    {
        id: 3,
        name: "Pricing",  //services
        path: "/pricing"
    },
    {
        id: 4,
        name: "Testimonial", // blog
        path: "/testimonial"
    },
    {
        id: 5,
        name: "FAQ", // contact
        path: "/faq"
    }
];
const Navbar = ({ cart, setCart, setActiveTab }) => {
    const [open, setOpen] = useState(false);

    const links = routes.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className=' w-11/12 mx-auto flex justify-between  items-center relative'>
            <span onClick={() => setOpen(!open)} className='flex items-center'>

                {
                    open ?
                        <X className='md:hidden mr-2 z-20 relative'></X> :
                        <Menu className='md:hidden mr-2 z-20 relative' ></Menu>
                }

                <ul className={`md:hidden duration-600 z-20 absolute left-0 right-0 w-11/12 mx-auto ${open ? 'top-15' : '-top-96'} bg-linear-to-r from-purple-400 to-purple-600 shadow-md rounded-xl p-4   overflow-y-auto text-center font-bold text-white`}>

                    <div>
                        {links}
                        <GetStartedBtn></GetStartedBtn>
                    </div>

                </ul>

                <a href="/">
                    <h1 className="text-2xl md:text-4xl font-extrabold "><span className="bg-linear-to-t from-purple-500 via-purple-700 to-purple-600 bg-clip-text text-transparent">DigiTools</span></h1>
                </a>
            </span>
            <ul className='hidden md:flex font-bold  '>

                {
                    links
                }

            </ul>


            <div className='flex items-center gap-4 font-bold'>
                <div className='relative inline-block'>
                    <button onClick={() => setActiveTab('cart')} className='cursor-pointer'>
                        <MdOutlineShoppingCart size={20} />
                        {cart.length > 0 ? (
                            <p className='rounded-full bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center absolute -top-2 -right-2'>
                                {cart.length}
                            </p>
                        ) : null}
                    </button>
                </div>
                <button className='cursor-pointer'>Login</button>
                <span className='hidden md:block'>
                    <GetStartedBtn></GetStartedBtn>
                </span>
            </div>



        </nav>
    );
};


export default Navbar;