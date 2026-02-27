"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">

      {/* Imagen optimizada */}
      <Image
        src="/images/Hero.png"
        alt="Transporte turístico Aerovans en Mérida"
        fill
        priority
        quality={90}
        className="object-cover object-[center_30%] md:object-center"
      />

      {/* Overlay profesional uniforme (sin blanco abajo) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl pt-24 md:pt-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
        >
          Transporte Privado y Turístico en Venezuela
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-200 text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto"
        >
          Viaja seguro, cómodo y sin preocupaciones desde Mérida hacia destinos nacionales e internacionales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/584121044194"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition transform hover:scale-105"
          >
            Reservar por WhatsApp
          </a>

          <a
            href="#destinos"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold transition transform hover:scale-105"
          >
            Ver Destinos
          </a>
        </motion.div>
      </div>

      {/* Indicador scroll más abajo y sutil */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 text-white text-xl opacity-80"
      >
        ↓
      </motion.div>
    </section>
  );
}