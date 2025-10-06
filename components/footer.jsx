"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-black text-white py-16 px-8 md:px-20"
      style={{
        backgroundImage: "url('/footer/Rectangle 27.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        <div className="space-y-6">
          
          <div className="flex items-center gap-4">
            <Image src="/logo/logo1.png" alt="Logo" width={27} height={21} />
            <span className="font-extrabold text-[20px] h-[16px] mb-2">Xelta</span>
          </div>

          
          <div className="bg-black/30 backdrop-blur-md border border-gray-700 rounded-lg p-6 max-w-sm">
            <h3 className="text-[20px] font-bold pt-3 mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full bg-[#5A7CFF] hover:bg-blue-500 text-[#FFFFFF] font-medium py-2 rounded-full transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        
        <div className="lg:ml-50">
          <h4 className="font-medium mb-4 text[20px]">Pages</h4>
          <ul className="font-satoshi font-medium space-y-3 text-gray-300 text[16px]">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Model</li>
            <li className="hover:text-white cursor-pointer">Kits</li>
            <li className="hover:text-white cursor-pointer">Studio</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-medium mb-4 text[20px]">Social Media</h4>
          <ul className="font-satoshi font-medium space-y-3 text-gray-300 text[16px]">
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">YouTube</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Threads</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
