import React from 'react'
import {Link} from "react-router-dom";
import logo from './logo.jpeg'
import './Header.css'

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img className="logo" src={logo} alt="Hotel Paradid=se"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item px-5">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    
                    <li className="nav-item px-5">
                        <Link className="nav-link" to="/booking">Book Now</Link>
                    </li>    
                </ul>

                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item fs-5">
                        <Link className="nav-link" to="/signup">Login/Signup</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header
