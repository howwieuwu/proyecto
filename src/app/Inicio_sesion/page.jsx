import React from 'react'
import Image from "next/image";
import Girl from "@/../public/image/ChicayDog.png"
import Paw from "@/../public/image/Paw.png"
import Link from 'next/link';

function page() {
    return (
        <main className='flex items-center max-h-screen overflow-hidden'>
            <section className='w-full md:w-1/2 h-full justify-center'>
                <div className='w-full h-full py-16 px-20'>
                    <picture className="mx-auto"><h2 className="text-[#EEB154] font-bold">Paw<span className="text-[#124C5F] font-semibold">-Paseo</span></h2><Image src={Paw} width={264} height={121} className="w-[300px] h-[200px] mx-40" /> </picture>
                    <div className='px-14 py-14'>
                        <h5 className='py-2'>Usuario o Correo Electronico</h5>
                        <input type='email' className='bg-[#BEBDBD] bg-opacity-25 rounded-2xl  w-full h-10 px-4'></input>
                        <h5 className='py-2'>Contraseña</h5>
                        <input type='password' className='bg-[#BEBDBD] bg-opacity-25 rounded-2xl  w-full h-10 px-4'></input>
                        <button className="bg-[#124C5F] w-full h-[45px] rounded-3xl text-white my-10">
                            <Link href={"/dashboard"}> Iniciar Sesión </Link> 
                            </button>
                        <h5 className='text-center'>¿No tienes una cuenta? <u>Registrate</u></h5>
                    </div>
                </div>
            </section>
            <section className=' hidden md:w-1/2 md:block h-full'>
                <Image src={Girl} width={756} height={500} className='w-full object-cover'></Image>
            </section>
        </main>
    )
}

export default page