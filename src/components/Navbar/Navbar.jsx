import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ setNavbarHeight }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navbarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, [setNavbarHeight]);

  const isScroll = scroll ? 'py-5' : 'py-9';

  return (
    <header ref={navbarRef} className={`bg-slate-700 w-full fixed z-20 top-0 start-0 ${isScroll} transition-all duration-500 ease-in-out`}>
      <nav className="container mx-auto w-[87%]">
        <div className="flex items-center justify-between px-6">
          <div className="text-white font-bold text-3xl uppercase">
            <NavLink to="/">Start Framework</NavLink>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><NavLink to="/about" className="text-white uppercase font-bold">About</NavLink></li>
              <li><NavLink to="/portfolio" className="text-white uppercase font-bold">Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="text-white uppercase font-bold">Contact</NavLink></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={isOpen ? "mobile-menu md:hidden" : "mobile-menu md:hidden hidden"}>
          <ul className="mt-4 space-y-8 px-6 pt-4">
            <li><NavLink to="/about" className="block text-white uppercase font-bold">About</NavLink></li>
            <li><NavLink to="/portfolio" className="block text-white uppercase font-bold">Portfolio</NavLink></li>
            <li><NavLink to="/contact" className="block text-white uppercase font-bold">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
