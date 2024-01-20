import Link from "next/link";
import React from "react";
import Image from "next/image";
import Paw from "@/../public/image/Paw.png";
import { RiMenu2Line } from "react-icons/ri";

export const Header = () => {
    return (
        <nav className="  xl:h-[116px] py-2 xl:py-5 w-full  bg-[#F5F4F4] ">
            <div className="flex items-center justify-between  px-4 xl:px-6 mx-auto max-w-[1500px]">
                <picture className="flex items-center gap-2  ">
                    <Image
                        src={Paw}
                        width={264}
                        height={121}
                        className="h-12 w-12 object-contain lg:h-16 lg:w-24"
                        alt="Paw-Paseo"
                    />
                    <h2 className="text-md font-bold text-[#EEB154] 2xl:text-xl">
                        Paw<span className="font-semibold text-[#124C5F]">-Paseo</span>{" "}
                    </h2>
                </picture>

                {/* // Menu de Escritorio */}
                <div className="hidden items-center  gap-10 lg:flex">
                    <ul className="flex items-center justify-center gap-4">
                        <li>Inicio</li>
                        <li>Nuestros Servicios</li>
                        <li>Sobre la App</li>
                        <li>Reseñas</li>
                    </ul>
                    <button className="h-[42px] w-[170px] rounded-2xl bg-[#EEB154] text-white">
                        <Link href={"/Inicio_sesion"}>Iniciar Sesión</Link>
                    </button>
                </div>

                {/* // Menu de Celular */}
                <div className="lg:hidden ">
                    <RiMenu2Line className="h-6 w-6 cursor-pointer " />
                </div>
            </div>
        </nav>
    );
};
