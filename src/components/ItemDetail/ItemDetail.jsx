import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
    <article className='contenedorItem'>
        <header>
            <h2>Nombre: {nombre} </h2>
        </header>
        <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.</p>
            <h3>Precio: {precio} </h3>
            <h3> ID: {id} </h3>
        </section>
        <picture>
            <img className='imgProd' src= {img} alt= {nombre} />
        </picture>
        <footer>
            <ItemCount/>
        </footer>
    </article>
    )
}

export default ItemDetail