import Image from "next/image";
import { useRef } from "react";

export const TextSection = () => {
  return (
    <>
      <div className="px-[80px] flex flex-row items-center gap-[139px] min-h-screen">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-[60px] font-bold leading-[60px] w-[790px]">
              Plataforma para la gestión académica de las instituciones
              educativas
            </h1>
            <p className="text-[36px] font-medium m-0">
              Para estudiantes y profesores.
            </p>
          </div>
          <div className="flex flex-row gap-[39px] mt-[47px]">
            <button className="px-10 py-2 bg-[#72ADF3]/40 text-black rounded-[16px] shadow-md font-semibold -tracking-[0.065em] text-[20px] hover:scale-110 transition-all duration-500 ease-in-out">
              Registrate ahora
            </button>
            <button className="px-12 py-2 bg-white shadow-md rounded-[16px] font-semibold text-[20px] -tracking-[0.065em] hover:scale-110 transition-all duration-500 ease-in-out">
              Inicia Sesión
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/imageMiddle.png"
            width={305}
            height={520}
            alt="teacher"
          />
        </div>
      </div>
    </>
  );
};

export const AboutSection = () => {
  return (
    <div className="bg-white flex flex-col px-[80px]">
      <div className="w-full flex flex-col items-center mt-20">
        <h1 className="text-[40px] font-bold leading-[60px] w-[790px] text-center">
          Déjanos contarte sobre Aeris
        </h1>
        <div className="flex flex-row gap-10 mt-10 justify-center">
          <p className="w-[700px] text-base -tracking-wide">
            Aeris es un software de gestión académica para instituciones
            educativas desarrollado por estudiantes y profesores. Nuestra
            plataforma está diseñada para ayudar a las instituciones a mejorar
            su eficiencia y eficacia en la gestión de sus procesos académicos.
            <br />
            <br />
            Con Aeris, las instituciones pueden llevar a cabo tareas como
            matrícula y registro de estudiantes, seguimiento de calificaciones,
            gestión de tareas y exámenes, y seguimiento de asistencia, todo en
            un solo lugar. Además, nuestra plataforma permite a los padres,
            estudiantes y profesores comunicarse de forma segura y proporciona
            acceso a recursos educativos adicionales.
            <br />
            <br />
            Aeris es fácil de usar y se integra con aplicaciones de terceros
            para mejorar la experiencia del usuario. Además, nuestro equipo de
            soporte está disponible para ayudar a las instituciones a sacar el
            máximo provecho de nuestra plataforma.
          </p>
          <Image
            src="/images/about.png"
            width={350}
            height={350}
            alt="About"
            className="rounded"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-[70px] pb-[60px] bg-white">
        <div className="flex flex-col w-[250px] items-center">
          <h2 className="text-[24px] font-bold -tracking-[0.065em] text-[#303030]">
            Ten todo en orden
          </h2>
          <p className="text-center text-[#706E6E] text-base font-normal -tracking-wide">
            Organiza las notas, clases y observaciones de tus clases, fácil y
            rápido
          </p>
        </div>
        <div className="flex flex-col w-[250px] items-center">
          <h2 className="text-[24px] font-bold -tracking-[0.065em] text-[#303030] ">
            Para colegios
          </h2>
          <p className="text-center text-[#706E6E] text-base font-normal -tracking-wide]">
            Somos estudiantes y profesores, sabemos cuales son las necesidades
          </p>
        </div>
        <div className="flex flex-col w-[280px] items-center ">
          <h2 className="text-[24px] font-bold -tracking-[0.065em] text-[#303030]">
            Céntrate en enseñar
          </h2>
          <p className="text-center text-[#706E6E] text-base font-normal  -tracking-wide">
            Aeris hace todo lo demás, calificaciones, listado, observaciones,
            horarios... <strong>Todo</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
