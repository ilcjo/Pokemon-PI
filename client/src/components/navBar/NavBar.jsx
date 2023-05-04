import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <nav className="nav-list">
                <Link to="/home" className="nav-item">
                    <button className="btn-primary">Home</button>
                </Link>
                <Link to="/create" className="nav-item">
                    <button className="btn-primary">Create Pokemon</button>
                </Link>
                <Link to="/details" className="nav-item">
                    <button className="btn-primary">Details</button>
                </Link>
                <button className="btn-primary">LogOut</button>

            </nav>
        </>
    )
}

