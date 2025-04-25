import Image from "next/image";
import logo from "@/../public/logo.svg";
import { navLinkInfo } from "@/lib/navlinksinfo";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full h-[70px] px-[10%]  flex justify-between items-center">
      <Link href={"/"} className="logo">
        <Image src={logo} height={60} width={60} alt="logo" />
      </Link>
      
      <nav className="flex items-center gap-6">
        {navLinkInfo.map((link) => (
          <Link href={link.href} key={link.id}>
            <p className="font-poppins text-4 font-normal text-menu-color">
              {link.name}{" "}
            </p>
          </Link>
        ))}
        <form action="" className="bg-off-white/70">
        <div className="relative w-full max-w-[312px] h-[48px] mx-auto flex items-center bg-off-white/70 border border-gray-300">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none bg-off-white/70">
            <FiSearch className="h-5 w-5 " />
          </div>
          <input
            type="text"
            name="search"
            placeholder="Search"
            id="#search"
            className="h-[48px] block w-full pl-10 pr-3 py-2  rounded-lg bg-off-white/70  focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-transparent"
          />
        </div>
      </form>
      </nav>

      
    </header>
  );
}
