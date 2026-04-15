// components/Navbar.jsx
import { GoHome } from "react-icons/go";
import { MdOutlineTimeline } from "react-icons/md";
import { TbChartLine } from "react-icons/tb";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
      <div>
        <span className="font-extrabold text-gray-900 text-2xl tracking-tight">
          Keen
        </span>
        <span className="font-bold text-gray-900 text-2xl tracking-tight">
          Keeper
        </span>
      </div>

      <div className="flex items-center gap-1">
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#1a3a2f] text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          <GoHome size={16} />
          Home
        </Link>

        <Link
          href="/timeline"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <MdOutlineTimeline size={16} />
          Timeline
        </Link>

        <Link
          href="/stats"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <TbChartLine size={16} />
          Stats
        </Link>
      </div>
    </nav>
  );
}
