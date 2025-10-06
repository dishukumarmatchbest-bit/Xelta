'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar2 from './Navbar2';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [showSecondNavbar, setShowSecondNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowSecondNavbar(true);
      } else {
        setShowSecondNavbar(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <AnimatePresence mode="wait">
        {!showSecondNavbar ? (
          <motion.div
            key="first-navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-transparent"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <Image src="/logo/logo1.png" width={18} height={18} alt="logo" />
                  <span className="mb-2 font-extrabold text-white h-[16px]">Xelta</span>
                </Link>

                <nav className="space-x-8 hidden sm:flex text-white text-[14px]">
                  <Link href="/model" className="hover:underline">Model</Link>
                  <Link href="#" className="hover:underline">Uppercases</Link>
                  <Link href="#" className="hover:underline">Neuroflows</Link>
                  <Link href="#" className="hover:underline">About</Link>
                  <Link href="#" className="hover:underline">Sign Up</Link>
                </nav>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="second-navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Navbar2 />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
