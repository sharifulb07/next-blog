'use client'
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import logo from "@/../public/logo.svg";
import { navLinkInfo } from "@/lib/navlinksinfo";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu
  const buttonRef = useRef(null); 
  const pathname = usePathname();
  const router=useRouter();
 

  useEffect(() => {
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        isMobileOpen &&
        !menuRef.current?.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobileOpen]);
  return (
    <header className="w-full h-[70px] px-[10%]  flex justify-between items-center">
      <Link href={"/"} className="logo">
        <Image src={logo} height={60} width={60} alt="logo" />
      </Link>
      
      <nav className="items-center gap-6 hidden md:flex ">
        {navLinkInfo.map((link) => (
          <Link href={link.href} key={link.id}>
            <p className="font-poppins text-4 font-normal text-menu-color">
              {link.name}{" "}
            </p>
          </Link>
        ))}
        <form action="" className="bg-off-white/70">
        <div className="relative w-full max-w-[312px] h-[48px] mx-auto flex items-center bg-off-white/70 border border-gray-300">
          <div onClick={()=>router.push('/search')} className="absolute  inset-y-0 left-0 pl-3 z-50 flex items-center  bg-off-white/70 cursor-pointer">
            <FiSearch className="h-5 w-5 cursor-pointer  "     />
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
      {isMobileOpen ? (
        <RxCross2
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="cursor-pointer flex md:hidden lg:hidden"
          style={{ fontSize: 24 }}
        />
      ) : (
        <IoMenu
        ref={buttonRef}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="cursor-pointer flex md:hidden lg:hidden"
          style={{ fontSize: 24 }}
        />
      )}
      
      {isMobileOpen && (
        <div ref={menuRef} className="absolute top-30 right-30 z-500 flex flex-col p-5 rounded-xl bg-orange-100 md:hidden lg:hidden">
          <ul
            className={`list-none flex flex-col items-center gap-5 z-30  `}
          >
            {navLinkInfo.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`font-bold text-[20px] ${
                    pathname == link.href ? "text-[#FD6F00]" : "text-text-color"
                  } transition-colors duration-200 ease-in-out`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
