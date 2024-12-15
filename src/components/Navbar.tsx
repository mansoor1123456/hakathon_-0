"use client";
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white text-black w-full h-[80px] flex justify-center items-center px-6 shadow-md">
        {/* Logo Section  
        <div>
          <h1 className="text-xl font-bold">
            <Link href="/">Logo</Link>
          </h1>
        </div>
        Navigation Links */}
        <div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="/" className="hover:text-blue-500 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-blue-500 transition duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          <button id="menu-btn" className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div id="mobile-menu" className="hidden md:hidden bg-white text-black p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-blue-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-blue-500 transition duration-300">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;