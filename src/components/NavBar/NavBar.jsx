import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/logo.png'
import './NavBar.css'

const NavBar = () => { 
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="">
                    <img src={logo} alt="Logo de la pagina" width={100} height={100} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse justify-content-end collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0 navBar">
                        <li><a className="nav-link active" aria-current="page">Juguetes</a></li>
                        <li><a className="nav-link active" aria-current="page">Ambientación</a></li>
                        <li><a className="nav-link active" aria-current="page">Ropa</a></li>
                        <li><a className="nav-link active" aria-current="page">Alimento</a></li>
                    </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar