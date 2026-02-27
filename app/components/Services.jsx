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
    <section id="servicios" className="bg-white py-20">

      {/* TITULO */}
      <div className="text-center px-6 max-w-6xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Nuestros Servicios
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Soluciones de transporte diseñadas para brindarte comodidad,
          puntualidad y seguridad.
        </p>
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="md:hidden overflow-x-auto flex snap-x snap-mandatory scroll-smooth">

        {services.map((service, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center px-6"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

              {/* Imagen FULL WIDTH */}
              <div className="relative w-full h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>



              {/* Contenido */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
{/* Indicador Mobile */}
<div className="md:hidden flex justify-center mt-6">
  <motion.div
    animate={{ x: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    className="text-sm text-gray-400 flex items-center gap-2"
  >
    <span>Desliza</span>
    <span className="text-lg">→</span>
  </motion.div>
</div>
            </div>
            
          </div>
          
        ))}

      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6 max-w-6xl mx-auto mt-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <div className="relative h-56 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

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

    </section>
  );
}