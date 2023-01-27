import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex flex-col p-8 w-1/2">
      <h1 className="text-2xl font-bold text-gray-800 -tracking-wide">
        Inicia Sesión
      </h1>
      <p className="text-gray-600 -tracking-wide text-sm">
        Ingresa tus credenciales para acceder a tu cuenta
      </p>
      <form className="mt-8 space-y-6 w-full" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold text-gray-500 -tracking-wide mb-1">
            Correo electrónico
          </label>
          <input
            className="w-full border rounded-lg outline-none indent-3 h-10 font-semibold text-sm"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-500 -tracking-wide mb-1">
            Contraseña
          </label>
          <input
            className="w-full border rounded-lg outline-none indent-3 h-10 font-semibold text-sm"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a className="text-sm cursor-pointer text-[#72ADF3] font-bold">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <button className="w-full">
          <div className="bg-[#72ADF3] h-10 rounded-lg text-white font-semibold text-sm flex justify-center items-center hover:bg-[#72ADF3]/80 transition-all duration-300 ease-in-out">
            Iniciar Sesión
          </div>
        </button>
        <div className="flex items-center justify-center">
          <span className="text-sm">
            ¿No tienes una cuenta?{" "}
            <strong
              className="cursor-pointer text-[#72ADF3]"
              onClick={() => router.push("/register")}
            >
              Regístrate
            </strong>
          </span>
        </div>
      </form>
    </div>
  );
};

export const AboutLoginSection = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="/images/bg-login.jpg"
        width={350}
        height={300}
        alt="login"
        className="rounded-lg"
      />
    </div>
  );
};
