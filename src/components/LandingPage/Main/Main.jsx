import React from "react";
import { Celular } from "./componentcelular/Celular";

export const Main = () => {
    return (
        <main className="mx-auto mt-8 flex flex-col xl:flex-row xl:max-w-7xl items-center">
            <section className=" w-full  xl:w-2/4">
                <Celular />
            </section>
            <section className=" w-full px-7 xl:px-0 mt-36 xl:mt-0 xl:w-2/4 ">
                <div className="space-y-6 text-center">
                    <div className="flex justify-center">
                        <h1 className="  text-base xl:text-7xl font-bold text-[#EEB154]">Paw</h1>
                        <span className=" text-base xl:text-7xl font-bold text-[#124C5F]">-Paseo</span>
                    </div>
                    <p className="mx-auto max-w-lg text-base xl:text-xl  font-normal">
                        ¡Con nuestra aplicación, encontrarás al paseador de perros perfecto para tu mejor amigo en
                        cuestión de minutos!
                    </p>
                    <button className=" py-2.5 px-6 rounded-3xl bg-[#EEB154] text-base  xl:text-lg text-white">
                        Descarga Aquí
                    </button>
                </div>
            </section>
        </main>
    );
};
