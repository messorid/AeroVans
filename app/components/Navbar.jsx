"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <h1 className={`font-bold text-xl ${
          scrolled ? "text-black" : "text-white"
        }`}>
          Aerovans
        </h1>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#servicios" className={`${scrolled ? "text-black" : "text-white"} hover:text-yellow-500`}>
            Servicios
          </a>
          <a href="#destinos" className={`${scrolled ? "text-black" : "text-white"} hover:text-yellow-500`}>
            Destinos
          </a>
          <a href="#contacto" className={`${scrolled ? "text-black" : "text-white"} hover:text-yellow-500`}>
            Contacto
          </a>

          <a
            href="https://wa.me/584121044194"
            className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
}