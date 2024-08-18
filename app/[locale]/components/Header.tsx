"use client"

import { useState } from "react"
import Image from 'next/image'
import { inter } from "../fonts/fonts";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { label: 'Про нас', href: '#' },
        {
            label: 'Блог',
            href: '#',
            isDropdown: true,
            dropdownItems: [
                { label: 'Blog 1', href: '#' },
                { label: 'Blog 2', href: '#' },
            ],
        },
        { label: 'Івенти', href: '#' },
        { label: 'Твої можливості', href: '#' },
        { label: 'Галерея', href: '#' },
        { label: 'Q/A', href: '#' },
    ];

    return (
        <header className={`${inter.className} bg-best-blue text-white fixed top-0 w-full z-50 text-[20px]`}>
            <div className="container mx-auto flex justify-between items-center  h-[110px]">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/best-logo.svg" alt="Best Lviv" width={123} height={64}
                        className="max-h-12 lg:min-h-48" />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-16">
                    {menuItems.map((item, index) =>
                        item.isDropdown ? (
                            <div key={index} className="relative group">
                                <button className="hover:text-gray-300 flex items-center">
                                    {item.label}
                                    <svg
                                        className="ml-1 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </button>
                                {/* Dropdown Menu */}
                                <div className="absolute left-0 mt-2 py-2 w-40 bg-blue-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                                    {item.dropdownItems.map((dropdownItem, i) => (
                                        <a
                                            key={i}
                                            href={dropdownItem.href}
                                            className="block px-4 py-2 text-sm hover:bg-blue-700"
                                        >
                                            {dropdownItem.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a
                                key={index}
                                href={item.href}
                                className="hover:text-gray-300"
                            >
                                {item.label}
                            </a>
                        )
                    )}
                </nav>

                {/* Stand with Ukraine button */}
                <div className="hidden md:block pr-4">
                    <div className="bg-white text-best-blue px-4 py-2 rounded-full font-bold flex items-center">
                        Stand with Ukraine
                        <img
                            src="./ukrainianFlag.svg"
                            alt="UK"
                            width={32}
                            height={32}
                            className="ml-2"
                        />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {!isOpen && (
                            <Image src="./headerBurger.svg" alt="dhjfdh" width={42} height={42} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-best-blue text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                {/* Close Button */}
                <div className="h-[140px] flex bg-best-blue justify-self-end justify-end pr-12">
                    <Image src="./headerBurger.svg" alt="dhjfdh" width={42} height={42} className="rotate-90" onClick={toggleMenu} />
                </div>

                {/* Mobile Navigation */}
                <nav className="">
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <a href={item.href} className="pl-8 shadow-ms shadow-inner block py-2 text-lg hover:bg-blue-700">
                                {item.label}
                            </a>
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
}