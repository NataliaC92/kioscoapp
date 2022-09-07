import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setHttpAgentOptions } from 'next/dist/server/config';

const  QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProucto ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ pedido, setPedido ] = useState([])
    const [ paso, setPado ] = useState(1)

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleclickCategoria = id => {
        const categoria = categorias.filter( cat=> cat.id === id )
        setCategoriaActual(categoria[0]);
    }

    const handleSetProducto = producto => {
        setProucto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)) {
            //Actualizar cantidad 
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)

            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido')
        }

        setModal(false)
    }

    const handleChangePaso = paso => {
        setPaso(paso);
    }
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleclickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                paso,
                handleChangePaso
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext; 