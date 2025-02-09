"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-[#FAF3E8]/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Janakis.png"
            alt="Janaki's Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`text-[#4A2512] hover:text-[#8B4513] pb-1 ${
              pathname === "/" ? "border-b-2 border-[#4A2512]" : ""
            }`}
          >
            who we are
          </Link>
          <Link
            href="/menu"
            className={`text-[#4A2512] hover:text-[#8B4513] pb-1 ${
              pathname === "/menu" ? "border-b-2 border-[#4A2512]" : ""
            }`}
          >
            menu & locations
          </Link>
          <Link
            href="/why-us"
            className={`text-[#4A2512] hover:text-[#8B4513] pb-1 ${
              pathname === "/why-us" ? "border-b-2 border-[#4A2512]" : ""
            }`}
          >
            why us?
          </Link>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-[#4A2512]">
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
    </nav>
  );
}
