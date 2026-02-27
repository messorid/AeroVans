"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Burbuja */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl px-4 py-2 text-sm text-gray-800 hidden md:block"
      >
        ¿Necesitas información?
      </motion.div>

      {/* Botón */}
      <motion.a
        href="https://wa.me/584121044194"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl"
      >
        <MessageCircle size={28} />
      </motion.a>
    </motion.div>
  );
}