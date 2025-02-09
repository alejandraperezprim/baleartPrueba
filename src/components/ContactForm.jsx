import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            setStatus({ success: false, message: "Por favor, completa todos los campos." });
            return;
        }

        if (!validateEmail(email)) {
            setStatus({ success: false, message: "Por favor, introduce un email válido." });
            return;
        }

        // Simulación de envío exitoso
        setStatus({ success: true, message: "¡Mensaje enviado correctamente!" });

        // Opcional: Limpiar formulario después de enviar
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
            {status && (
                <div className={`p-2 mb-4 text-white rounded ${status.success ? "bg-green-500" : "bg-red-500"}`}>
                    {status.message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                    <label className="block font-medium">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Tu nombre"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="tucorreo@example.com"
                    />
                </div>

                {/* Asunto */}
                <div>
                    <label className="block font-medium">Asunto</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Asunto del mensaje"
                    />
                </div>

                {/* Mensaje */}
                <div>
                    <label className="block font-medium">Mensaje</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mt-1 h-32"
                        placeholder="Escribe tu mensaje aquí..."
                    />
                </div>

                {/* Botón de Enviar */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                >
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
}
