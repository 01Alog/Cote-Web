import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-black shadow-lg rounded-lg p-6 max-w-sm w-full">
        <div className="flex flex-col items-center">
          <img
            className="rounded-full w-32 h-32 object-cover"
            src="/images/img2.png" // Reemplaza con la ruta de tu imagen
            alt="Profile"
          />
          <h2 className="text-white text-xl font-semibold mt-4">
            Maria Jose Palmas Salinas
          </h2>
          <p className="text-gray-300 mt-2">
            Descripción breve o información adicional aquí.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/majo_palma/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-2xl hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="https://wa.link/vkhy3c"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-white text-2xl hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/maria.j.palma.12"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white text-2xl hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
