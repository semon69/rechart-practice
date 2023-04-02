import React, { useState } from 'react';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false) 

    return (
        <div className='bg-cyan-400'>
            <div onClick={()=> setOpen(!open)} className='md:hidden p-5'>
                <span>
                    {

                    open ? <XMarkIcon className="h-6 w-6 text-red-900 ml-4 mt-4" /> : <Bars3Icon className="h-6 w-6 text-red-900 ml-4 mt-4" />

                    }
                    </span>
                
            </div>
            <div className={`md:flex md:justify-around font-bold text-2xl p-5 bg-cyan-800 md:bg-cyan-400 duration-300 absolute md:static ${open ? 'top-20 ' : '-top-56'}`}>
                <p>Chart</p>
                <p>About Us</p>
                <p>Home</p>
                <p>Login</p>
                <p>Sign Up</p>
            </div>
        </div>
    );
};

export default Navbar;