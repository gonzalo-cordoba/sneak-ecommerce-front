"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-purple-900/20 to-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl"
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            ICONS MARBLE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-200 mb-8"
          >
            NOS SENTIMOS ELEGANTES
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              COMPRAR
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
