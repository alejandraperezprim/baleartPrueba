import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();

    // Función para cambiar el idioma
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="bg-gray-800 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo (solo tipografía) */}
                <div className="text-xl font-bold">baleart.</div>

                {/* Selección de idiomas e imagen de perfil */}
                <div className="flex items-center space-x-4">
                    {/* Selección de idiomas */}
                    <div className="flex space-x-2">
                        <button
                            onClick={() => changeLanguage("es")}
                            className={`flex items-center px-2 py-1 rounded ${
                                i18n.language === "es" ? "bg-blue-500" : "bg-gray-700"
                            } hover:bg-blue-600 transition-colors`}
                        >
                            <img src="/assets/icons/es-flag.svg" alt="Español" className="w-5 h-5 mr-2" />
                            ES
                        </button>
                        <button
                            onClick={() => changeLanguage("ca")}
                            className={`flex items-center px-2 py-1 rounded ${
                                i18n.language === "ca" ? "bg-blue-500" : "bg-gray-700"
                            } hover:bg-blue-600 transition-colors`}
                        >
                            <img src="/assets/icons/cat-flag.svg" alt="Català" className="w-5 h-5 mr-2" />
                            CA
                        </button>
                        <button
                            onClick={() => changeLanguage("en")}
                            className={`flex items-center px-2 py-1 rounded ${
                                i18n.language === "en" ? "bg-blue-500" : "bg-gray-700"
                            } hover:bg-blue-600 transition-colors`}
                        >
                            <img src="/assets/icons/eng-flag.svg" alt="English" className="w-5 h-5 mr-2" />
                            EN
                        </button>
                    </div>

                    {/* Imagen de perfil */}
                    <a
                        href="/auth"
                        className="hover:text-gray-300 transition-colors"
                    >
                        <img
                            src="https://i.pravatar.cc/40" // Reemplaza con la ruta de tu imagen de perfil
                            alt="Perfil"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
}
