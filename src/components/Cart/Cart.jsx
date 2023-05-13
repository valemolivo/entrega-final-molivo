import './Cart.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if(totalCantidad === 0) {
        return (
            <div className='contenedorCart'>
                <h2>No hay productos en el carrito </h2>
                <Link to='/' className="option"> Productos </Link>
            </div>
        )
    }

    return (
        <div className='contenedorCart'>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total} </h3>
            <button onClick={() => vaciarCarrito()} className="option"> Vaciar Carrito </button>
            <Link to='/checkout' className="option"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart