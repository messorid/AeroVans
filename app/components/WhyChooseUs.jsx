"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, MapPin } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Seguridad y Confianza",
    description:
      "Operamos con responsabilidad y compromiso para garantizar viajes seguros en cada ruta.",
  },
  {
    icon: Clock,
    title: "Puntualidad Garantizada",
    description:
      "Respetamos tu tiempo con salidas y llegadas programadas con precisión.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description:
      "Cada cliente recibe asesoría directa y soporte continuo durante su viaje.",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description:
      "Servicios de transporte privado y turístico hacia múltiples destinos en Venezuela.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 px-6">
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
            ¿Por Qué Elegir Aerovans?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Más que transporte, ofrecemos tranquilidad, comodidad y experiencia.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition"
              >
                <div className="bg-yellow-500/10 p-4 rounded-full mb-6">
                  <Icon size={40} className="text-yellow-500" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}