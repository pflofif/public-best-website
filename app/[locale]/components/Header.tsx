"use client"

import { useState } from "react"
import Image from 'next/image'
import { inter } from "../../fonts/fonts";
import Link from "next/link";
import { cn } from "../../lib/utils";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { label: 'Про нас', href: '/about-us' },
        {
            label: 'Блог',
            href: '/blog',
            isDropdown: true,
            dropdownItems: [
                { label: 'Blog 1', href: '#' },
                { label: 'Blog 2', href: '#' },
            ],
        },
        { label: 'Івенти', href: '/events' },
        { label: 'Твої можливості', href: '/opportunities' },
        { label: 'Галерея', href: '/gallera' },
        { label: 'Q/A', href: '/qa' },
    ];

    return (
        <header className={`${inter.className} bg-best-blue text-white fixed top-0 left-0 w-full min-h-28 z-50 text-[20px] px-6 md:px-12`}>
            <div className="mx-auto flex justify-between items-center gap-x-5 h-[110px]">
                {/* Logo */}
                <Link href={"#"} className="flex items-center basis-32 shrink-0 z-50">
                    <img src="/best-logo.svg" alt="Best Lviv" width={123} height={64}
                        onClick={() => setIsOpen(false)}
                        className="max-h-12 lg:min-h-48" />
                </Link>

                {/*Menu */}
                <nav className={cn(`max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-svh min-lg:relative min-lg:flex basis-full justify-center`)}>
                    <ul className={cn("max-lg:absolute max-lg:top-0 max-lg:left-full max-lg:w-full flex max-lg:text-3xl max-lg:flex-col max-lg:justify-start max-lg:bg-best-blue gap-y-7 max-lg:h-svh max-lg:p-10 max-lg:pt-36 justify-center gap-x-10 2xl:gap-x-20 transition-all duration-500", isOpen && "max-lg:left-1/4")}>
                        {menuItems.map((item, index) =>
                            item.isDropdown ? (
                                <li key={index} className="relative group cursor-pointer">
                                    <button className="hover:text-gray-300 flex items-center min-lg:pb-2">
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
                                    <div className="min-lg:absolute left-0 py-2 w-40 min-lg:bg-blue-800 min-lg:rounded-md min-lg:shadow-lg hidden min-lg:group-hover:opacity-100 group-hover:block min-lg:group-hover:visible transition duration-200 ease-in-out">
                                        {item.dropdownItems.map((dropdownItem, i) => (
                                            <Link
                                                key={i}
                                                href={dropdownItem.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-4 py-2 max-lg:text-2xl text-sm hover:bg-blue-700"
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </li>
                            ) : (
                                <li className="">
                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        key={index}
                                        href={item.href}
                                        className="hover:text-gray-300 "
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>

                </nav>

                {/* Stand with Ukraine button */}
                <Link href={"#"} className="hidden min-lg:block basis-64 shrink-0">
                    <div className="bg-white text-best-blue px-4 py-2 rounded-full font-bold flex items-center">
                        Stand with Ukraine
                        <img
                            src="/ukrainianFlag.svg"
                            alt="UK"
                            width={32}
                            height={32}
                            className="ml-2"
                        />
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <div className="min-lg:hidden z-50">
                    <button onClick={toggleMenu} className={cn("focus:outline-none transition-all duration-500", isOpen && "rotate-90 ")}>

                        <Image src="/headerBurger.svg" alt="dhjfdh" width={42} height={42} />

                    </button>
                </div>
            </div>


        </header>
    );
}