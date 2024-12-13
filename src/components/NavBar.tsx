"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const brands = ["Nike", "Adidas", "Puma"];

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
            {brands.map((brand) => (
              <Link
                key={brand}
                href={`/${brand.toLowerCase()}`}
                className={`text-white hover:text-gray-300 transition-colors ${
                  pathname === `/${brand.toLowerCase()}` ? "font-bold" : ""
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {brand}
                </motion.span>
              </Link>
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
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white md:hidden z-50"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-40 md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {brands.map((brand, i) => (
                <motion.div key={brand} variants={linkVariants} custom={i}>
                  <Link
                    href={`/${brand.toLowerCase()}`}
                    className={`text-white text-4xl hover:text-gray-300 transition-colors ${
                      pathname === `/${brand.toLowerCase()}` ? "font-bold" : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {brand}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
