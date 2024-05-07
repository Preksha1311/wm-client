"use client"
// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-800 p-5 flex justify-between items-center text-white">
      <div className="flex items-center cursor-pointer">
        <Link href={"/"}>
          <div className="relative w-12 h-12">
            <Logo/> 
          </div>
        </Link>
      </div>
      <div className={`lg:flex items-center ${isOpen ? 'flex' : 'hidden'} flex-grow`}>
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="px-3 py-2">
            <Link href="/services"><span className="hover:underline cursor-pointer">Services</span></Link>
          </li>
          <li className="px-3 py-2">
            <Link href="/about-us"><span className="hover:underline cursor-pointer">About Us</span></Link>
          </li>
          <li className="px-3 py-2">
            <Link href="/contact-us"><span className="hover:underline cursor-pointer">Contact Us</span></Link>
          </li>
        </ul>
        <div className="flex">
          <Link href="/users/signup">
            <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              Sign Up
            </button>
          </Link>

        </div>
      </div>
      <button onClick={toggleNavbar} className="lg:hidden text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none">
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
    </div>
  );
};
const Logo =() =>(
  <svg xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 64 64" 
  id="nature">
  <path d="M61.44 38.87A3.79 3.79 0 0 0 58 38.42L53.63 40a5.55 5.55 0 0 0-5.09-2.36l-6.08.6L40.8 36.4a14.73 14.73 0 0 0-9.36-4.82A13.9 13.9 0 0 0 23.7 33l-4.39 2.2H16.05V33a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1V53a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V50h5.88l14.56 3.47a8 8 0 0 0 1.88.22A8.2 8.2 0 0 0 41.65 53l20.8-9a1 1 0 0 0 .6-.92V42A3.76 3.76 0 0 0 61.44 38.87zM14.05 52h-11V34h11zm47-9.66l-20.2 8.79a6.21 6.21 0 0 1-3.9.34L22.28 48a.85.85 0 0 0-.23 0h-6V37.15h3.5A1 1 0 0 0 20 37l4.6-2.3a11.92 11.92 0 0 1 6.62-1.18 12.68 12.68 0 0 1 8.08 4.18l2 2.23a1 1 0 0 0 .85.33l6.58-.65a3.58 3.58 0 0 1 3.67 2.22l.17.44H45.78a1 1 0 0 0 0 2h8.27A1 1 0 0 0 55 42.94l-.45-1.12 4.15-1.52A1.76 1.76 0 0 1 61.05 42zM44 31h.08c.38 0 9.15-.46 12.76-6s.49-13.75.36-14.09a1 1 0 0 0-1-.64c-.35 0-8.29.43-12.18 5.23-3.89-4.8-11.83-5.22-12.18-5.23a1 1 0 0 0-1 .64c-.13.34-3.26 8.56.36 14.09S43.63 31 44 31zM55.58 12.33c.63 2 2.1 7.75-.4 11.58-2 3.14-6.35 4.36-9 4.82a45.57 45.57 0 0 0 4.89-8.6 1 1 0 0 0-1.85-.76 43.83 43.83 0 0 1-4.82 8.41c-.66-2.54-1.39-7.17.73-10.42C47.65 13.53 53.51 12.56 55.58 12.33zm-23.06 0c2 .23 7.85 1.19 10.38 5a13 13 0 0 0-1.15 6.1 9.24 9.24 0 0 1-3.63-3.31 1 1 0 0 0-1.39-.28 1 1 0 0 0-.28 1.38A11.21 11.21 0 0 0 42 25.65a25.2 25.2 0 0 0 .67 3.19c-2.47-.35-7.44-1.47-9.7-4.93C30.42 20.08 31.89 14.32 32.52 12.33z">
  </path>
  </svg>
);
export default Navbar;
