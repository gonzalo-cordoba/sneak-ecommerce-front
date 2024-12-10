"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const categories = [
  { id: 1, name: "PUMA RS-X", image: "/placeholder.svg" },
  { id: 2, name: "NIKE DUNK", image: "/placeholder.svg" },
  { id: 3, name: "ADIDAS FORUM", image: "/placeholder.svg" },
  { id: 4, name: "PUMA SUEDE", image: "/placeholder.svg" },
  { id: 5, name: "JORDAN", image: "/placeholder.svg" },
];

export function CategorySlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            className="flex space-x-4"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-48 h-48 relative"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <p className="text-white font-bold text-center">
                    {category.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
