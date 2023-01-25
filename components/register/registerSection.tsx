import Image from "next/image";
import { useState } from "react";
import { People } from "../../utils/register/people.json";

export const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(fullName, email, password);
  };

  return (
    <div className="flex flex-col p-8 w-1/2">
      <h1 className="text-2xl font-bold text-gray-800 -tracking-wide">
        Regístrate
      </h1>
      <p className="text-gray-600 -tracking-wide text-sm">
        Crea una cuenta en Aeris
      </p>
      <form className="mt-8 space-y-6 w-full" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold text-gray-500 -tracking-wide mb-1">
            Nombre completo
          </label>
          <input
            className="w-full border rounded-lg outline-none indent-3 h-10 font-semibold text-sm"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
        </div>
        <button className="w-full">
          <div className="bg-[#72ADF3] h-10 rounded-lg text-white font-semibold text-sm flex justify-center items-center hover:bg-[#72ADF3]/80 transition-all duration-300 ease-in-out">
            Regístrate
          </div>
        </button>

        <div className="flex items-center justify-center">
          <span className="text-sm">
            ¿Ya tienes una cuenta?{" "}
            <strong className="cursor-pointer text-[#72ADF3]">
              Inicia Sesión
            </strong>
          </span>
        </div>
      </form>
    </div>
  );
};

export const AboutRegisterSection = () => {
  const people = People.map((person) => person);
  const [renderQuote, setRenderQuote] = useState(0);

  return (
    <div className="w-1/2 bg-slate-100/100 rounded-lg flex flex-col px-8 py-10">
      <div className="flex flex-row">
        <Image
          src="/images/logoImage.png"
          alt="Logo"
          width={24}
          height={24}
          className="object-contain"
        />
        <a className="font-bold text-[24px] -tracking-[0.065em]">Aeris</a>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl -tracking-wide font-bold">
          Déjanos transformar la gestión académica de tu institución educativa.
        </h2>
        <p className="mt-5 text-sm -tracking-wide font-semibold text-gray-500">
          Registrarse en nuestra plataforma es muy fácil y ¡es gratis!, te
          tomará menos de 5 minutos.
        </p>
      </div>

      {people.map(
        (person, index) =>
          index === renderQuote && (
            <>
              <div className="w-full bg-slate-800 rounded-lg text-slate-100 px-8 py-4 mt-10 transition-all duration-500 ease-in-out">
                <p className="text-base -tracking-wide font-medium">
                  {"“" + person.quote + "”"}
                </p>
                <div className="flex flex-row mt-4 ">
                  <div className="w-[30px] h-[30px]">
                    <Image
                      src={person.image}
                      alt="People1"
                      width={40}
                      height={40}
                      sizes="30px"
                      draggable={false}
                      className="rounded-full w-full h-full object-cover mt-2"
                    />
                  </div>
                  <div>
                    <p className="text-sm -tracking-wide font-semibold m-0 ml-2">
                      {person.name}
                    </p>
                    <p className="text-sm -tracking-wide font-semibold m-0 ml-2 text-slate-400">
                      {person.job}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 mt-4">
                <span
                  className={
                    index === 0
                      ? "w-2 h-2 bg-slate-800 rounded-full"
                      : "w-2 h-2 bg-slate-400 rounded-full"
                  }
                  onClick={() => setRenderQuote(0)}
                ></span>
                <span
                  className={
                    index === 1
                      ? "w-2 h-2 bg-slate-800 rounded-full"
                      : "w-2 h-2 bg-slate-400 rounded-full"
                  }
                  onClick={() => setRenderQuote(1)}
                ></span>
                <span
                  className={
                    index === 2
                      ? "w-2 h-2 bg-slate-800 rounded-full"
                      : "w-2 h-2 bg-slate-400 rounded-full"
                  }
                  onClick={() => setRenderQuote(2)}
                ></span>
              </div>
            </>
          )
      )}
    </div>
  );
};
