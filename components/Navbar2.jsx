import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data/constants";

export default function Navbar2() {
  return (
    <nav className="w-full flex justify-center items-center py-6">
      <div
        className="
          flex items-center space-x-6 px-6 py-2 
          bg-white/10 backdrop-blur-md 
          rounded-full shadow-lg border border-white/20
        "
      >
        <Link href="/">
          <div className="cursor-pointer flex items-center space-x-2">
            <Image src="/logo/logo1.png" width={18} height={18} alt="logo" />
            <span className="mb-2 font-extrabold text-white h-[16px]">Xelta</span>
            <div className="w-px h-5 bg-white/30 ml-3" />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-8 hidden sm:flex text-white text-[14px]">
          {
            navLinks?.map((item, index) => (
              <Link key={`${item.name}-${index}`} href={item.href} className="hover:underline">{item.name}</Link>
            ))
          }
        </div>
        {/* Links */}
        {/* <div className="flex space-x-6 text-gray-200 text-sm">
          <Link href="/model"><span className="hover:text-white">Model</span></Link>
          <Link href="/usercases"><span className="hover:text-white">Usercases</span></Link>
          <Link href="#"><span className="hover:text-white">Neuroflows</span></Link>
          <Link href="/about"><span className="hover:text-white">About</span></Link>
          <Link href="#"><span className="hover:text-white">Sign Up</span></Link>
        </div> */}
      </div>
    </nav>
  );
}