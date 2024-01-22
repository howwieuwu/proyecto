import Image from 'next/image';
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoFill } from "react-icons/pi";
import Perr from "@/../public/image/perritofeliz.png"

function Footer() {
    return (
        <footer className='bg-gray-700  mx-auto pt-1'>
            <div>
                <div className='md:rounded-t-full bg-white flex flex-row mt-1 rounded-lg'>
                    <Image src={Perr} alt="Perrito_Feliz" width={200} height={200}></Image>
                    <div >
                        <div className='max-sm:text-xs p-1'>
                            <h3 className='font-semibold max-sm:text-center'> Soporte: <span className='font-normal text-blue-500'><a>support@pawpaseo.com</a></span></h3>
                            <p className='text-gray-600 md:w-3/4 p-1'> El agregador en línea para el paseo de mascotas de PawPaseo no está involucrado en las interacciones entre los usuarios. 
                                Los usuarios crean, envían y realizan todas las solicitudes de forma independiente.</p>
                            <h3 className='text-gray-500 max-sm:text-center'> © all rights reserved &  design  with love by bharat </h3>
                            <div className='flex justify-center md:justify-end mt-1'>
                                <FaInstagram className=" h-8 w-8 md:h-12 md:w-12 cursor-pointer " />
                                <PiFacebookLogoFill className="h-8 w-8 md:h-12 md:w-12 cursor-pointer " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer