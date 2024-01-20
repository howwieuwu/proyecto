"use client"
import React from 'react'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'
import Editar from "@/../public/icon/editar.png";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';


function Formulario() {
    return (
        <div>
            <Input
                label=""
                isClearable
                radius="lg"
                className=""
                placeholder="Nombre, Apellido, Status"
            />
            <hr></hr>
            <Table >
                <TableHeader>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Primer Apellido</TableColumn>
                    <TableColumn>Segundo Apellido</TableColumn>
                    <TableColumn>Activo</TableColumn>
                    <TableColumn>Acción</TableColumn>
                </TableHeader>
                <TableBody >
                    <TableRow key={1}>
                        <TableCell>Hector Hugo</TableCell>
                        <TableCell>Corona</TableCell>
                        <TableCell>Garcia</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Image
                                        src={Editar}
                                        width={25}
                                        height={25}
                                        className="w-5 h-5 object-cover"
                                    ></Image>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions" className='bg-cyan-700 text-white text-center'>
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </TableCell>
                    </TableRow >
                    <TableRow >
                        <TableCell>Fernanda</TableCell>
                        <TableCell>Hernandez</TableCell>
                        <TableCell>Vargas</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Image
                                        src={Editar}
                                        width={25}
                                        height={25}
                                        className="w-5 h-5 object-cover"
                                    ></Image>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions" className='bg-cyan-700 text-white text-center'>
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Fransico</TableCell>
                        <TableCell>Coronado</TableCell>
                        <TableCell>Espitia</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Image
                                        src={Editar}
                                        width={25}
                                        height={25}
                                        className="w-5 h-5 object-cover"
                                    ></Image>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions" className='bg-cyan-700 text-white text-center'>
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Mauricio</TableCell>
                        <TableCell>Perez</TableCell>
                        <TableCell>Correa</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Image
                                        src={Editar}
                                        width={25}
                                        height={25}
                                        className="w-5 h-5 object-cover"
                                    ></Image>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions" className='bg-cyan-700 text-white text-center'>
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Alberto</TableCell>
                        <TableCell>Morales</TableCell>
                        <TableCell>Perez</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Image
                                        src={Editar}
                                        width={25}
                                        height={25}
                                        className="w-5 h-5 object-cover"
                                    ></Image>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions" className='bg-cyan-700 text-white text-center'>
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Fernando</TableCell>
                        <TableCell>Bautista</TableCell>
                        <TableCell>Reyes</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Image
                                        src={Editar}
                                        width={25}
                                        height={25}
                                        className="w-5 h-5 object-cover"
                                    ></Image>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions" className='bg-cyan-700 text-white text-center'>
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Juan</TableCell>
                        <TableCell>Mendez</TableCell>
                        <TableCell>Cordova</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Image
                                        src={Editar}
                                        width={25}
                                        height={25}
                                        className="w-5 h-5 object-cover"
                                    ></Image>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions" className='bg-cyan-700 text-white text-center'>
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
import Image from 'next/image'
import { Input } from '@nextui-org/react';

export default Formulario