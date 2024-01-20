import Link from "next/link";
import React from "react";
import Image from "next/image";
import Paw from "@/../public/image/Paw.png"

function Header() {
  return (
    <nav className="h-[116px] flex items-center justify-between px-6  bg-[#F5F4F4]">
        <picture className="flex items-center"><Image src={Paw} width={264} height={121} className="w-24 h-16 object-cover" /> <h2 className="text-[#EEB154] font-bold">Paw<span className="text-[#124C5F] font-semibold">-Paseo</span> </h2></picture>
      <div className="flex items-center gap-10">
        <ul className="flex items-center justify-center gap-4">
          <li>Inicio</li>
          <li>Nuestros Servicios</li>
          <li>Sobre la App</li>
          <li>Reseñas</li>
        </ul>
        <button className="bg-[#EEB154] w-[266px] h-[45px] rounded-3xl text-white">
          <Link href={"/Inicio_sesion"}>Iniciar Sesión</Link>
        </button>
      </div>
    </nav>
  );
}

export default Header;
