
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
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 items-start">

        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <Image src="/logo/logo1.png" alt="Logo" width={27} height={21} />
            <span className="font-extrabold text-lg lg:text-[20px]">Xelta</span>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-gray-700 rounded-lg p-4 lg:p-6 w-full">
            <h3 className="text-lg lg:text-[20px] font-bold mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm lg:text-base"
              />
              <button className="w-full bg-[#5A7CFF] hover:bg-blue-500 text-[#FFFFFF] font-medium py-2 rounded-full transition text-sm lg:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

            <div>
              <h4 className="font-medium mb-4 text-lg lg:text-[20px]">Pages</h4>
              <ul className="font-satoshi font-medium space-y-3 text-gray-300 text-sm lg:text-[16px]">
                <li><a href="#" className="hover:text-white cursor-pointer block">Home</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer block">Model</a></li>
                <li><a href="/usercases" className="hover:text-white cursor-pointer block">Usercase</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer block">Neuroflows</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer block">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-lg lg:text-[20px]">Social Media</h4>
              <ul className="font-satoshi font-medium space-y-3 text-gray-300 text-sm lg:text-[16px]">
                <li><a href="https://www.instagram.com/theXelta/" className="hover:text-white cursor-pointer block">Instagram</a></li>
                <li><a href="https://x.com/theXelta" className="hover:text-white cursor-pointer block">Twitter</a></li>
                <li><a href="https://www.youtube.com/@Xeltainternational" className="hover:text-white cursor-pointer block">YouTube</a></li>
                <li><a href="https://www.threads.com/login/?next=https%3A%2F%2Fwww.threads.com%2FtheXelta%2F" className="hover:text-white cursor-pointer block">Threads</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-lg lg:text-[20px]">Contact</h4>
              <div className="font-satoshi font-medium space-y-3 text-gray-300 text-sm lg:text-[16px]">
                <p>
                  <a href="mailto:contact@xelta.ai" className="hover:text-white transition-colors block">
                    contact@xelta.ai
                  </a>
                </p>
                <p>
                  <a href="tel:+971561401975" className="hover:text-white transition-colors block">
                    +971 561401975
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-400 text-sm lg:text-base">
          © 2025 — Matchbest FZE LLC | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
