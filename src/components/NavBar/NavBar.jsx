import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => { 
    return (
        <nav>
            <h3>Tienda</h3>
            <div>
                <button>Juguetes</button>
                <button>Alimento</button>
                <button>Ropa</button>
                <button>Ambientación</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar