import React from "react";

export default function Pagination({ totalPages, currentPage, paginate }) {
  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Botón anterior */}
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        ← Anterior
      </button>

      {/* Indicador de página */}
      <span className="text-gray-700 font-medium">
        Página {currentPage} de {totalPages}
      </span>

      {/* Botón siguiente */}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Siguiente →
      </button>
    </div>
  );
}
