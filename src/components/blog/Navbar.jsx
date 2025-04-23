import Image from "next/image";
import logo from "@/../public/logo.svg";
import { navLinkInfo } from "@/lib/navlinksinfo";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full h-[80px] px-[10%] flex justify-between items-center">
      <Link href={'/'} className="logo">
        <Image src={logo} height={60} width={60} alt="logo" />
      </Link>
      <nav className="flex items-center gap-6">
        {navLinkInfo.map((link) => (
          <Link href={link.href} key={link.id}>
            <p className="font-poppins text-4 font-normal text-menu-color">{link.name} </p>
          </Link>
        ))}
      </nav>

      <form action="">
        <input type="text" name="search" placeholder="Search" id="#search" />
      </form>
    </header>
  );
}
