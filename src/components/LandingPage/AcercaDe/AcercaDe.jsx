import Image from 'next/image'
import React from 'react'
import Muc from "@/../public/image/Muchacho.png"

function AcercaDe() {
    return (
        <main className="mx-auto flex flex-col xl:flex-row  items-center">
            <section className=" w-full xl:px-0  xl:w-2/4 ">
                <div className="space-y-6 text-center">
                        <h1 className="  text-base xl:text-7xl font-bold text-black flex justify-center"> Sobre La App</h1>
                    <p className="mx-auto max-w-lg text-base xl:text-xl  font-normal text-left p-8">
                        Una aplicación móvil que permita a los dueños de mascotas programar paseos seguros y confiables para sus
                        animales de compañía. La aplicación se centrará en brindar una interfaz intuitiva y amigable tanto para los
                        dueños de mascotas como para los paseadores. Incluirá características como registro y certificación de
                        paseadores, programación de paseos personalizables, seguimiento en tiempo real, sistema de
                        retroalimentación y reseñas, y medidas sólidas de seguridad de datos. Tambien incluira ubicaciones de
                        veterinarias y tiendas de mascostas cercanas a su ubicacion.
                    </p>
                    <button className="py-2.5 px-6 rounded-xl bg-[#EEB154] text-base  xl:text-lg text-white">
                        Explora Mas {'>'}
                    </button>
                </div>
            </section>
            {/* // Imagen de Escritorio */}
            <section className="hidden md:block px-7 xl:w-2/4">
                <Image src={Muc} alt='Paseando con tu mascota' width={500} height={500} ></Image>
            </section>
        </main>
    )
}

export default AcercaDe