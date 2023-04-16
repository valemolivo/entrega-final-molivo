import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/logo.png'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => { 
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand" href="">
                        <img src={logo} alt="Logo de la pagina" width={100} height={100} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse justify-content-end collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 navBar">
                            <li>
                                <NavLink to={`/categoria/Ambientación`} className="nav-link active">Ambientación</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/categoria/Juguetes`} className="nav-link active">Juguetes</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/categoria/Alimentos`} className="nav-link active">Alimentos</NavLink>
                            </li>
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar