"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg"
              alt="SNEAK"
              width={40}
              height={40}
              className="w-10"
            />
            <span className="text-white font-bold text-xl">SNEAK</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["Nike", "Adidas", "Puma"].map((brand) => (
              <motion.a
                key={brand}
                href={`#${brand.toLowerCase()}`}
                className="text-white hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {brand}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              <User className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
