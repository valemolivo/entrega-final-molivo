import { useState } from "react";
import './ItemCount.css';


const ItemCount = () => {
    let inicial = 1; 
    let stock = 100; 

const [contador, setContador] = useState(inicial);


const incrementar = () => {
        if(contador < stock) {
        setContador(contador + 1);
    }
}

const decrementar = () => {
    if(contador > inicial) {
        setContador(contador - 1);
    }
}

const agregarAlCarrito = () => {
    console.log(`Agregado ${contador} items `)
}
    
return (
    <>
        <button type="button" class="btn btn-success" onClick={ incrementar } >+</button>
        <p> {contador} </p>
        <button type="button" class="btn btn-success" onClick={ decrementar } >-</button>
        <br /> <br />

        <button type="button" class="btn btn-success" onClick={agregarAlCarrito} disabled={!stock}> Agregar al Carrito </button>
    </>
    )
}

export default ItemCount
