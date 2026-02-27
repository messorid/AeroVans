"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Transporte Privado Nacional",
    description:
      "Viajes personalizados desde Mérida hacia cualquier destino del país con comodidad y seguridad.",
    image: "/images/services/privado.png",
  },
  {
    title: "Traslados Aeropuerto",
    description:
      "Servicio puntual y confiable para traslados desde y hacia el aeropuerto.",
    image: "/images/services/aeropuerto.png",
  },
  {
    title: "Tours Turísticos",
    description:
      "Recorridos al Páramo, playas, aguas termales y destinos especiales.",
    image: "/images/services/turismo.png",
  },
  {
    title: "Viajes Ejecutivos",
    description:
      "Transporte profesional para empresas y eventos corporativos.",
    image: "/images/services/hotel.png",
  },
  {
    title: "Encomiendas",
    description:
      "Envío seguro de paquetes y documentos en rutas nacionales e internacionales.",
    image: "/images/services/encomienda.png",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24 px-6">
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
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Soluciones de transporte diseñadas para brindarte comodidad,
            puntualidad y seguridad.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}