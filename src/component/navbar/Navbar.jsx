"use client";
import { GoHome } from "react-icons/go";
import { MdOutlineTimeline } from "react-icons/md";
import { TbChartLine } from "react-icons/tb";
import Links from "./Links";

const navLinks = [
  { href: "/", label: "Home", Icon: GoHome },
  { href: "/timeline", label: "Timeline", Icon: MdOutlineTimeline },
  { href: "/stats", label: "Stats", Icon: TbChartLine },
];

export default function Navbar() {
  return (
    <div className="border-gray-200  border-b bg-white ">
      <nav className="max-w-375 w-full mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="shrink-0">
          <span className="font-extrabold text-gray-900 text-xl tracking-tight sm:text-2xl">
            Keen
          </span>
          <span className="font-bold text-gray-900 text-xl tracking-tight sm:text-2xl">
            Keeper
          </span>
        </div>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Links key={link.href} {...link} />
          ))}
        </div>
      </nav>
    </div>
  );
}
