import React from "react";
import { motion } from "framer-motion";
import { stats } from "../data/siteData";
import StatCard from "./StatCard";

export default function Hero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h1 className="text-5xl font-bold mt-6">
            Caring for children with love and dignity.
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Providing shelter, education, healthcare, and
            opportunities for vulnerable children.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-amber-500 text-white px-6 py-3 rounded-full">
              Support a Child
            </button>

            <button className="border px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src="/images/hero.jpg"
          alt="Children"
          className="rounded-3xl shadow-xl"
        />
      </div>
    </motion.section>
  );
}