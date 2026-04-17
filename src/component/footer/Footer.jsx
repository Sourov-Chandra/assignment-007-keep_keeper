import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <section className="bg-[#244D3F]">
      <footer className="container mx-auto text-white">
        <div className="flex flex-col items-center py-16 gap-4">
          <h2 className="text-5xl font-extrabold">
            Keen<span className="font-bold">Keeper</span>
          </h2>
          <p className="text-lg px-4 text-gray-300 text-center">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <p className="text-xl font-medium mt-4">Social Links</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-black rounded-full p-3 hover:opacity-80 transition-opacity"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-black rounded-full p-3 hover:opacity-80 transition-opacity"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="bg-black rounded-full p-3 hover:opacity-80 transition-opacity"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm
         text-gray-300">
          <p className="flex justify-center items-center gap-1.5">
            <LuCopyright /> 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
