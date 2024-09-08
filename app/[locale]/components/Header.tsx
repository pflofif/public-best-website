"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { inter } from "../../fonts/fonts";
import Link from "next/link";
import { cn } from "../../lib/utils";

const menuItems = [
  { label: "Про нас", href: "/about-us" },
  {
    label: "Блог",
    href: "/blog",
    isDropdown: true,
    dropdownItems: [
      { label: "Blog 1", href: "#" },
      { label: "Blog 2", href: "#" },
    ],
  },
  { label: "Івенти", href: "/events" },
  { label: "Твої можливості", href: "/opportunities" },
  { label: "Галерея", href: "/gallery" },
  { label: "Q/A", href: "/qa" },
];

const MenuItems = ({ setIsOpen }: { setIsOpen: (arg0: boolean) => void }) => {
  return (
    <>
      {menuItems.map((item, index) =>
        !item.isDropdown ? (
          <li key={index}>
            <Link
              onClick={() => setIsOpen(false)}
              href={item.href}
              className="hover:text-gray-300 "
            >
              {item.label}
            </Link>
          </li>
        ) : (
          <li key={index} className="relative group cursor-pointer">
            <button className="hover:text-gray-300 flex items-center lg:pb-2">
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
            {
              //Dropdown Menu
            }
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
        ),
      )}
    </>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // To block scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header
      className={`${inter.className} bg-best-blue text-white fixed top-0 left-0 w-full min-h-28 z-50 text-[20px] px-6 md:px-12`}
    >
      <div className="mx-auto flex justify-between items-center gap-x-5 h-[110px]">
        {/* Logo */}
        <Link href="/" className="flex items-center basis-32 shrink-0 z-50">
          <img
            src="/best-logo.svg"
            alt="Best Lviv"
            width={123}
            height={64}
            onClick={() => setIsOpen(false)}
            className="max-h-12 lg:min-h-48"
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden xl:flex">
          <ul className="flex gap-x-10">
            <MenuItems setIsOpen={setIsOpen} />
          </ul>
        </nav>
        {/* Mobile menu */}
        <nav className="xl:hidden absolute top-0 left-0 w-full h-svh basis-full justify-center pointer-events-none">
          <ul
            className={cn(
              "absolute top-0 left-full w-full flex text-3xl flex-col justify-start bg-best-blue gap-y-7 h-svh p-10 pt-36  gap-x-10 transition-all duration-500 pointer-events-auto",
              isOpen && "left-1/4",
            )}
          >
            {<MenuItems setIsOpen={setIsOpen} />}
          </ul>
        </nav>

        {/* Stand with Ukraine button */}
        <Link href={"#"} className="hidden xl:block basis-64 shrink-0">
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
        <div className="xl:hidden z-50">
          <button
            onClick={toggleMenu}
            className={cn(
              "focus:outline-none transition-all duration-500",
              isOpen && "rotate-90 ",
            )}
          >
            <Image
              src="/headerBurger.svg"
              alt="dhjfdh"
              width={42}
              height={42}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
