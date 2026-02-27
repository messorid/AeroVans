"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Imagen optimizada */}
      <Image
        src="/images/cta.png"
        alt="Paisaje turístico Venezuela"
        fill
        priority={false}
        quality={85}
        className="object-cover object-center"
      />

      {/* Overlay oscuro elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/90"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Reserva Tu Viaje Hoy Mismo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          Atención personalizada y disponibilidad inmediata.
          Viaja con comodidad, seguridad y confianza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="https://wa.me/584121044194"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold text-lg transition transform hover:scale-105"
          >
            Consultar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}