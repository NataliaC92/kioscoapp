import { useRouter } from 'next/router';
import useQuiosco from '../hooks/useQuiosco';



const pasos = [
    {paso: 1, nombre: 'Menú', url: '/' },
    {paso: 2, nombre: 'Resumen', url: '/resumen' },
    {paso: 3, nombre: 'Datos y Total', url: '/total' },
];

const Pasos = () => {
    const { handleChangePaso, paso } = useQuiosco();
    const router = useRouter();
    
    console.log(paso);

return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map(paso => (
                <button 
                    key={paso.paso}
                    className="text-2xl font-bold"
                    onClick={() => {
                        router.push(paso.url);
                        handleChangePaso(paso.paso);
                    }}
                    >
                        {paso.nombre}
                </button>
            ))}
        </div>
    </>
  )
}

export default Pasos;

