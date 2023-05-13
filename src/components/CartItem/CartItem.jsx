import './CartItem.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartItem = ({item, cantidad}) => {

    const { eliminarProducto } = useContext(CarritoContext)

    return (
        <div className='contenedorCartItem'>
            <h4> {item.nombre} </h4>
            <br></br> 
            <p>Cantidad: {cantidad} </p>
            <p>Precio: $ {item.precio} </p>
            <button class="btn btn-success" onClick={() => eliminarProducto(item.id)}>❌</button>
        </div>
    )
}

export default CartItem

