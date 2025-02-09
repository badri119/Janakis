"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full h-[80px] bg-[#FAF3E8]/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="md:w-1/4"></div>
        <Link href="/" className="flex items-center justify-center h-[70px]">
          <Image
            src="/Janakis.png"
            alt="Janaki's Logo"
            width={400}
            height={70}
            className="object-contain h-[70px] w-[400px] rounded-md"
          />
        </Link>
        <div className="hidden md:flex space-x-4 md:w-1/3 justify-end">
          <Link
            href="/"
            className={`text-[#4A2512] hover:text-[#8B4513] pb-1 whitespace-nowrap ${
              pathname === "/" ? "border-b-2 border-[#4A2512]" : ""
            }`}
          >
            who we are
          </Link>
          <Link
            href="/menu"
            className={`text-[#4A2512] hover:text-[#8B4513] pb-1 whitespace-nowrap ${
              pathname === "/menu" ? "border-b-2 border-[#4A2512]" : ""
            }`}
          >
            menu & locations
          </Link>
          <Link
            href="/why-us"
            className={`text-[#4A2512] hover:text-[#8B4513] pb-1 whitespace-nowrap ${
              pathname === "/why-us" ? "border-b-2 border-[#4A2512]" : ""
            }`}
          >
            why us?
          </Link>
        </div>

        <button
          className="md:hidden text-[#4A2512]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#FAF3E8] shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className={`text-[#4A2512] hover:text-[#8B4513] pb-1 ${
                pathname === "/" ? "border-b-2 border-[#4A2512]" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              who we are
            </Link>
            <Link
              href="/menu"
              className={`text-[#4A2512] hover:text-[#8B4513] pb-1 ${
                pathname === "/menu" ? "border-b-2 border-[#4A2512]" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              menu & locations
            </Link>
            <Link
              href="/why-us"
              className={`text-[#4A2512] hover:text-[#8B4513] pb-1 ${
                pathname === "/why-us" ? "border-b-2 border-[#4A2512]" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              why us?
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
