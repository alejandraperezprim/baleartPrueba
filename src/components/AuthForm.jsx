import React, { useState } from "react";

export default function AuthForm() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
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
        const { name, surname, email, password } = formData;

        if (!email || !password || (isRegistering && (!name || !surname))) {
            setStatus({ success: false, message: "Todos los campos son obligatorios." });
            return;
        }

        if (!validateEmail(email)) {
            setStatus({ success: false, message: "Introduce un email válido." });
            return;
        }

        if (password.length < 6) {
            setStatus({ success: false, message: "La contraseña debe tener al menos 6 caracteres." });
            return;
        }

        setStatus({ success: true, message: isRegistering ? "¡Registro exitoso!" : "¡Inicio de sesión exitoso!" });

        // Aquí podrías manejar la autenticación o redirección
        setFormData({
            name: "",
            surname: "",
            email: "",
            password: "",
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
                {isRegistering ? "Registro" : "Iniciar sesión"}
            </h2>
            
            {status && (
                <div className={`p-2 mb-4 text-white rounded ${status.success ? "bg-green-500" : "bg-red-500"}`}>
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {isRegistering && (
                    <>
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

                        {/* Apellidos */}
                        <div>
                            <label className="block font-medium">Apellidos</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                                placeholder="Tus apellidos"
                            />
                        </div>
                    </>
                )}

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

                {/* Contraseña */}
                <div>
                    <label className="block font-medium">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="••••••••"
                    />
                </div>

                {/* Botón de Enviar */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                >
                    {isRegistering ? "Registrarse" : "Iniciar sesión"}
                </button>
            </form>

            {/* Cambio entre registro y login */}
            <p className="text-center mt-4">
                {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
                <button
                    className="text-blue-500 hover:underline"
                    onClick={() => setIsRegistering(!isRegistering)}
                >
                    {isRegistering ? "Inicia sesión" : "Regístrate"}
                </button>
            </p>
        </div>
    );
}
