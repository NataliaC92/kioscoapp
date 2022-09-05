import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from '../helpers';

const ModalProducto = () => {

    const { producto, handleChangeModal } = useQuiosco();

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image 
                width={300}
                height={400}
                alt={`imagen producto ${producto.imagen}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button onClick={handleChangeModal}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
            <p className="mt-5 font.black text-5xl text-amber-500">
                {formatearDinero(producto.precio)}
            </p>
        </div>
    </div>
  );
};

export default ModalProducto;