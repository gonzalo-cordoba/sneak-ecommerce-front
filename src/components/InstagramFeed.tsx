"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const posts = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  image: "/placeholder.svg",
}));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export function InstagramFeed() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="aspect-square relative overflow-hidden rounded-lg"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
