"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BrandHeaderProps {
  brand: "nike" | "adidas" | "puma";
  logoUrl: string;
}

export function BrandHeader({ brand, logoUrl }: BrandHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <Image
            src={logoUrl}
            alt={`${brand} logo`}
            width={300}
            height={120}
            className="h-32 w-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
