import React from 'react'
import Image from 'next/image'
import Cel from "@/../public/image/Cel.png"
import Ubi from "@/../public/image/Ubi.png"
import Paseo from "@/../public/image/Paseo.png"


function Celular() {
  return (
    <div>
        <div className='w-[450px] h-[450px] bg-[#EEB154] rounded-full relative z-0'>
            <Image src={Cel} width={200} height={200} className='absolute -bottom-32 left-1/2 -translate-x-1/2 w-56 rounded-3xl'/>
            <Image src={Ubi}  width={200} height={50} className='absolute -bottom-10'/>
            <Image src={Paseo} width={200} height={50} className='absolute top-2/3 right-0'/>
        </div>
    </div>
  )
}

export default Celular