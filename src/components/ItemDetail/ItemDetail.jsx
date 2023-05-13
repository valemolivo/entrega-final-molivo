import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id, nombre, precio, img, stock, descrip}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }

    return (
    <article className='contenedorItem'>
        <header>
            <h2> {nombre} </h2>
        </header>
        <section>
            <p> {descrip} </p>
            <h3>Precio: ${precio} </h3>
            <h3> ID: {id} </h3>
        </section>
        <picture>
            <img className='imgProd' src= {img} alt= {nombre} />
        </picture>
        <footer>
            {
            agregarCantidad > 0 ? (<Link to="/cart" className="compraFinal"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </footer>
    </article>
    )
}

export default ItemDetail