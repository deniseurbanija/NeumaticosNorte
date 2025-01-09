import Link from "next/link";

export default function Card() {
  return (
    <>
      <div className="bg-white w-[400px] flex flex-col justify-center items-center my-8 mx-2 rounded-lg p-4 shadow-[0px_20px_20px_0px_rgba(0,0,0,0.417)] transition-transform duration-500 hover:scale-105">
        <img
          className="object-cover w-full h-[300px] mt-2"
          src="img/autos.png"
          alt="Autos y camionetas"
        />
        <h2 className="text-black mt-4">Autos y camionetas</h2>
      </div>
      <div className="bg-white w-[400px] flex flex-col justify-center items-center my-8 mx-2 rounded-lg p-4 shadow-[0px_20px_20px_0px_rgba(0,0,0,0.417)] transition-transform duration-500 hover:scale-105">
        <img
          className="object-cover w-full h-[300px] mt-2"
          src="img/camiones.png"
          alt="Camiones"
        />
        <h2 className="text-black mt-4">Camiones</h2>
      </div>
      <div className="bg-white w-[400px] flex flex-col justify-center items-center my-8 mx-2 rounded-lg p-4 shadow-[0px_20px_20px_0px_rgba(0,0,0,0.417)] transition-transform duration-500 hover:scale-105">
        <img
          className="object-cover w-full h-[300px] mt-2"
          src="img/agricola.png"
          alt="Agrícola"
        />
        <h2 className="text-black mt-4">Agrícola</h2>
      </div>
    </>
  );
}
