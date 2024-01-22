import React from 'react'
import { Formulario } from "./Formulario";
import { BiEdit } from "react-icons/bi";
import { IoSearchCircleOutline } from "react-icons/io5";




function Formularios() {
  return (
    <div class=" overflow-x-auto  sm:rounded-lg ">
        <div className='flex  mx-auto m-3'>
        <IoSearchCircleOutline className='h-8 w-8'/>
        <input type='search' placeholder='Nombre, status, action' className='p-2 rounded-2xl'></input>
        </div>
    <table class="w-full  text-sm text-gray-500 dark:text-gray-400 border-y-2">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-800 border-y-2">
            <tr className='h-20'>
                <th scope="col" class="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Primer Apellido
                </th>
                <th scope="col" class="px-6 py-3">
                    Segundo Apellido
                </th>
                <th scope="col" class="px-6 py-3">
                    Activo
                </th>
                <th scope="col" class="px-6 py-3">
                    Accion
                </th>
            </tr>
        </thead>
        <tbody className='text-center '>
        {Formulario.map((formulario) => {
                        return (
                            <tr key={formulario.id} className='h-14 border-y-2'>
                                <td>{formulario.name}</td>
                                <td>{formulario.primer}</td>
                                <td>{formulario.segundo}</td>
                                <td>
                                    <button className='bg-[#EEB154] text-white  py-2.5 px-6 rounded'> Activo </button>
                                </td>
                                <td className='flex justify-center'>
                                    <BiEdit className='h-8 w-8 cursor-pointer'/>
                                </td>
                            </tr>
                        );
                    })}
        </tbody>
        </table>
        </div>
  )
}

export default Formularios