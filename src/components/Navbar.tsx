import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#FAF3E8]/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-[#4A2512] text-2xl font-bold">Janaki&apos;s</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-[#4A2512] hover:text-[#8B4513]">
            Home
          </Link>
          <Link href="/menu" className="text-[#4A2512] hover:text-[#8B4513]">
            Menu
          </Link>
          <Link href="/team" className="text-[#4A2512] hover:text-[#8B4513]">
            Our Team
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
