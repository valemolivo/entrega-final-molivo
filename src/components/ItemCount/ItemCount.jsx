import { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
    return (
        <>
            <div>
                <button class="btn btn-success" onClick={incrementar}> + </button>
                <p className="pContador"> {contador} </p>
                <button class="btn btn-success" onClick={decrementar}> - </button>
            </div>
            <br /> <br/>
            <button class="btn btn-success" onClick={() => funcionAgregar(contador)} disabled={!stock} >Agregar al Carrito</button>
        </>
    )
    }

export default ItemCount
