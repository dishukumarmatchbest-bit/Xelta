
import Link from "next/link";
import Image from "next/image";

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
        
        <div className="flex items-center space-x-2">
          <Image src="/logo/logo1.png" width={18} height={18} alt="logo" />
          <span className="mb-2 font-extrabold text-white h-[16px]">Xelta</span>
          
          <div className="w-px h-5 bg-white/30 ml-3" />
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-gray-200 text-sm">
          <Link href="#"><span className="hover:text-white">Model</span></Link>
          <Link href="#"><span className="hover:text-white">Kits</span></Link>
          <Link href="#"><span className="hover:text-white">Studio</span></Link>
          <Link href="#"><span className="hover:text-white">About</span></Link>
          <Link href="#"><span className="hover:text-white">Sign Up</span></Link>
        </div>
      </div>
    </nav>
  );
}
