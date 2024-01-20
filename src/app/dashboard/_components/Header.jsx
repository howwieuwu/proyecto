import React from 'react'
import Paw from "@/../public/image/Paw.png"
import Image from 'next/image'

function HeaderAdmin() {
    return (
        <header className='flex items-center justify-between h-20 bg-[#F8F8F8] w-full'>
            <h1 className='text-[#9B9B9B] font-bold text-3xl mx-10'>Bienvenido, <span className='text-[#124C5F] font-semibold'> Nick </span> {" "} </h1>
            <div className='flex-1'></div>
            <picture className='text-[#FFB749] font-bold text-3xl flex items-center'>Paw<span className='text-[#124C5F] font-bold'>-Paseo</span>
            <Image
            alt="Paw-Paseo"
            src={Paw}
            width={264} 
            height={121} 
            className="w-24 h-16 object-cover mr-5"
            />
            </picture>
        </header>
    )
}

export default HeaderAdmin