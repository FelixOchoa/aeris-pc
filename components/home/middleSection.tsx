import Image from "next/image";

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
      <div className="flex flex-row justify-between items-center px-[80px] pb-[60px]">
        <div className="flex flex-col w-[250px] items-center">
          <h2 className="text-[32px] font-bold -tracking-[0.065em] text-[#303030]">
            Ten todo en orden
          </h2>
          <p className="text-center text-[#706E6E] text-[20px] font-normal  -tracking-[0.065em]">
            Organiza las notas, clases y observaciones de tus clases, fácil y
            rápido
          </p>
        </div>
        <div className="flex flex-col w-[250px] items-center">
          <h2 className="text-[32px] font-bold -tracking-[0.065em] text-[#303030] ">
            Para colegios
          </h2>
          <p className="text-center text-[#706E6E] text-[20px] font-normal  -tracking-[0.065em]">
            Somos estudiantes y profesores, sabemos cuales son las necesidades
          </p>
        </div>
        <div className="flex flex-col w-[280px] items-center ">
          <h2 className="text-[32px] font-bold -tracking-[0.065em] text-[#303030]">
            Céntrate en enseñar
          </h2>
          <p className="text-center text-[#706E6E] text-[20px] font-normal  -tracking-[0.065em]">
            Aeris hace todo lo demás, calificaciones, listado, observaciones,
            horarios... <strong>Todo</strong>
          </p>
        </div>
      </div>
    </>
  );
};
