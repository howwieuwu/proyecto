import React from "react";
import Celular from "./componentcelular/Celular";

function Main() {
  return (
    <main className="flex items-center max-w-7xl mx-auto mt-8">
      <section className="w-2/4"> <Celular /> </section>
      <section className="w-2/4 ">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <h1 className="text-[#EEB154] text-7xl font-bold">Paw</h1>
            <span className="text-[#124C5F] text-7xl font-bold">-Paseo</span>
          </div>
          <p className="max-w-lg font-normal text-xl mx-auto">
            ¡Con nuestra aplicación, encontrarás al paseador de perros perfecto
            para tu mejor amigo en cuestión de minutos!
          </p>
          <button className="bg-[#EEB154] w-[400px] h-[60px] rounded-3xl text-white text-lg">
            Descarga Aquí
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
