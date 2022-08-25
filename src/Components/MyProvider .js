import { createContext, useState} from "react"

    export const context = createContext([])
    const {Provider} = context

const MyProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    

    const verificarProductoExistente = (id) => {
        return cartList.some(producto => producto.id ===id)}

    const agregarProducto = (porductsDetail,cantidad) => {

        const nuevoProducto = {
            ...porductsDetail, cantidad
    }
        if(verificarProductoExistente(nuevoProducto.id)){

            const findProducto = cartList.find(produ => produ.id === nuevoProducto.id)
            const productoIndexOf = cartList.indexOf(findProducto)
            const arrayAux = [...cartList]
                arrayAux[productoIndexOf].cantidad += cantidad
                setCartList(arrayAux)

        }else{
            setCartList([...cartList, nuevoProducto])
        }
}
    const obtenerCantidad = ()=> {
        return cartList.reduce((acc, x) => acc += x.cantidad, 0 )
    }

    const ObtenerTotalPrecio = () =>{
        return cartList.reduce((acc, x) => acc += (x.precio * x.cantidad),0 )
    }
    const borrarItem = (id)=> {
        return setCartList(cartList.filter(producto => producto.id !== id))
    }

    const vaciarCarrito  = ()=> {
        setCartList([]);
    }



return (
    <Provider value={{
        obtenerCantidad,cartList,
        verificarProductoExistente,vaciarCarrito,
        agregarProducto,borrarItem,ObtenerTotalPrecio}}>
        {children}
    </Provider>
    )
}

export default MyProvider 
