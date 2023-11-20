import { useState, createContext } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito]  = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarAlCarrito = (producto, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === producto.id );
    
        if(!productoExistente) {
            setCarrito(prev => [...prev, {item: producto, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal( prev => prev + (producto.precio * cantidad));
    
        } else {
            const carritoActualizado = carrito.map( prod => {
                if(prod.item.id === producto.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal( prev => prev + (producto.precio * cantidad));
        }
    }

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id );
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}