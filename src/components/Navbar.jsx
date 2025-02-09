import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center p-4 bg-gray-800 text-white shadow-md">
      {/* Enlaces del Navbar */}
      <div className="flex space-x-8">
        <a
          href="/Home"
          className="hover:text-gray-300 transition-colors"
        >
          Inicio
        </a>
        <a
          href="/Spaces"
          className="hover:text-gray-300 transition-colors"
        >
          Espacios
        </a>
        <a
          href="/Comments"
          className="hover:text-gray-300 transition-colors"
        >
          Comentarios
        </a>
        <a
          href="/Contact"
          className="hover:text-gray-300 transition-colors"
        >
          Contacto
        </a>
      </div>
    </nav>
  )
}