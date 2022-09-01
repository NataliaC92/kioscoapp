import Image from "next/image";

const Producto = ({producto}) => {

    const { nombre, imagen, precio} = producto;

    return (
        <div className="border p-3">
            <Image 
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen Platillos ${nombre}`}
                width={400}
                height={400}
            />
        </div>
    )
};

export default Producto;
