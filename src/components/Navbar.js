import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <img src="/jo.logo.svg"/>
            <div className="links">
                <Link className="lik" to="/">Home</Link>
                <Link className="lik" to="/about">About</Link>
            </div>
        </nav>
    )
}
