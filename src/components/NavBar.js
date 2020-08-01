import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className='main-NavBar'>
            <ul className='nav-list'>
                <li className='nav-item-li'><Link className='main-NavBar__item nav-item' to="/">Home</Link></li>
                <li className='nav-item-li'><Link className='main-NavBar__item nav-item' to="/pokemon">Pokedex</Link></li>
                <li className='nav-item-li'><Link className='main-NavBar__item nav-item' to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar