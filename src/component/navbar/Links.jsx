import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({ href, label, Icon }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors sm:px-4 sm:py-2 sm:gap-2
        ${
          isActive
            ? "bg-[#244D3F] text-white border-[#1a3a2f]"
            : "text-gray-600 border-gray-200 hover:bg-gray-50"
        }`}
    >
      <Icon size={16} />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
};

export default Links;
