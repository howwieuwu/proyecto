import { Services } from "./ServiceData";
import Image from "next/image";

export const Servicios = () => {
    return (
        <section className="bg-[#f0f0f0]  min-h-96 my-10 xl:my-56 p-8 xl:py-12 ">
            <div className="max-w-[1500px] mx-auto">
                <h2 className="text-base xl:text-lg text-gray-700 font-semibold mb-5">Nuestros Servicios</h2>
                <div className="w-full h-full grid grid-cols-[repeat(auto-fit,_minmax(120px,1fr))] gap-3 place-items-center">
                    {Services.map((service) => {
                        return (
                            <div
                                key={service.id}
                                className="p-4 flex h-full py-5 xl:py-6 flex-col gap-3 items-center justify-center  bg-white rounded  w-full xl:w-60 px-8  "
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    src={service.image}
                                    className="w-2/3 h-2/3 object-contain"
                                    alt="service"
                                />

                                <p className="text-base font-normal">{service.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
