import { Comentario } from "./ComentariosData";
import Image from "next/image";

export const Comentarios = () => {
    return (
        <section>
            {/* Cartas del celular */}
            <section className="mx-auto flex flex-col xl:flex-row my-10 items-center sm:hidden">
                <div>
                    <h2 className="text-base xl:text-lg text-gray-700 font-semibold mb-5">Reseñas</h2>
                </div>
                <div className=" items-center justify-center">
                    {Comentario.map((comentario) => {
                        return (
                            <div
                                key={comentario.id}
                                className="bg-sky-100 p-4 flex m-4 rounded-xl shadow-md"
                            >

                                <Image
                                    width={100}
                                    height={100}
                                    src={comentario.image}
                                    className="w-full h-52 object-contain"
                                    alt="reseñas"
                                />
                                <div>
                                    <ul className="bg-[#124C5F]  flex flex-col  justify-center w-full h-full p-2  text-center text-white rounded-md">
                                        <li> {comentario.name} </li>
                                        <li> {comentario.feedback} </li>
                                        <li>  {comentario.rating} </li>
                                    </ul>
                                </div>
                            </div>

                        );
                    })}
                </div>
                <button className="py-2.5 px-6 rounded-xl bg-[#124C5F] text-base  xl:text-lg text-white">Explora Mas {">"}</button>
            </section>
            {/* Cartas de las demas medidas */}
            <section className="hidden md:block my-7 p-8 xl:py-12">
                <div>
                    <h2 className="text-base xl:text-lg text-gray-700 font-semibold mb-5">Reseñas</h2>
                </div>
                <div className="flex justify-center">
                    {Comentario.map((comentario) => {
                        return (
                            <div
                                key={comentario.id}
                                className="bg-sky-100 p-4 m-4 rounded-xl shadow-md"
                            >

                                <Image
                                    width={100}
                                    height={100}
                                    src={comentario.image}
                                    className="w-full h-52 object-contain"
                                    alt="reseñas"
                                />
                                <div>
                                    <ul className="bg-[#124C5F]  flex flex-col  justify-center w-full h-full p-2  text-center text-white rounded-md">
                                        <li> {comentario.name} </li>
                                        <li> {comentario.feedback} </li>
                                        <li>  {comentario.rating} </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className=" flex flex-col items-center w-full">
                <button className="w-1/4 py-2.5 m-2 px-6 rounded-xl bg-[#124C5F] text-base  xl:text-lg text-white btn_primary_global">Explora Mas {">"}</button>
                </div>
            </section>
        </section>
    )
}