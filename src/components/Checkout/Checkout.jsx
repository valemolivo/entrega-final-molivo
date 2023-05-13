import './Checkout.css';
import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmado, setEmailConfirmado] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmado) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== emailConfirmado) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vuelva más tarde");
            })
    }
    
    const manejadorCompra = (id, stock) => {
        if (stock > 0) {
            const productoRef = doc(db, "productos", id);
            updateDoc(productoRef, {
                stock: stock - 1,
            })
                .then(() => {
                    console.log("El stock se actualizó correctamente");
                })
                .catch((error) => {
                    console.log(error);
                    })
        }
    }
        

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Repita su email</label>
                    <input type="email" value={emailConfirmado} onChange={(e) => setEmailConfirmado(e.target.value)} />
                </div>
                {error && <p style={{ color: "red" }}> {error} </p>}

            <div>
            {
                carrito.map((producto) => (
                    <div>
                        <button onClick={() => manejadorCompra(producto.id, producto.stock)} type='submit'> Finalizar compra </button>
                    </div>
                ))
            }
            </div>
            </form>
            {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                )
            }
        </div>
    )
}

export default Checkout