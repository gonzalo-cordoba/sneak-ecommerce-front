"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

// Reusable product card component with hover animations and like button
interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden group"
    >
      {/* Image container with hover zoom effect */}
      <div className="relative aspect-square overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }} className="h-full w-full">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </motion.div>
        {/* Favorite button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
        >
          <Heart className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-gray-600">{price}</p>
      </div>
    </motion.div>
  );
}
