"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
  {
    title: "Mérida ↔ Cúcuta",
    description: "Ruta internacional segura y confiable.",
    image: "/images/destinations/cucuta.png",
  },
  {
    title: "Páramo La Culata",
    description: "Paisajes andinos y experiencias únicas.",
    image: "/images/destinations/paramo.png",
  },
  {
    title: "Chichiriviche",
    description: "Playas paradisíacas y descanso total.",
    image: "/images/destinations/chichiriviche.png",
  },
  {
    title: "Aguas Termales",
    description: "Relajación natural en entornos únicos.",
    image: "/images/destinations/termales.png",
  },
  {
    title: "Playas Nacionales",
    description: "Viajes cómodos hacia el mar.",
    image: "/images/destinations/tropical.png",
  },
];

export default function Destinations() {
  return (
    <section id="destinos" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Destinos Destacados
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explora Venezuela con comodidad, seguridad y atención personalizada.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden group"
            >
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

              {/* Texto */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">
                  {destination.title}
                </h3>
                <p className="mb-6">{destination.description}</p>

                <a
                  href="https://wa.me/584121044194"
                  className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
                >
                  Consultar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}