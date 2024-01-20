import React from "react";
import Image from "next/image";
import Cel from "@/../public/image/Cel.png";
import Ubi from "@/../public/image/Ubi.png";
import Paseo from "@/../public/image/Paseo.png";

export const Celular = () => {
    return (
        <div className="">
            <div className="relative z-0 h-[280px] mx-auto  w-[280px]  xl:h-[450px] xl:w-[450px] rounded-full bg-[#f3ba65]">
                <Image
                    alt="celular"
                    src={Cel}
                    width={200}
                    height={200}
                    className="absolute -bottom-32 left-1/2 w-36  xl:w-56  -translate-x-1/2 rounded-3xl"
                />
                <Image
                    alt="Ubi"
                    src={Ubi}
                    width={200}
                    height={50}
                    className=" max-sm:w-28 -bottom-2  absolute xl:-bottom-10"
                />
                <Image
                    alt="Paseo"
                    src={Paseo}
                    width={200}
                    height={50}
                    className="absolute max-sm:w-28 right-0 top-60  xl:top-2/3"
                />
            </div>
        </div>
    );
};
