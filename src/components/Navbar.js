import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <img src="/jo.logo.svg"/>
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/">About</Link>
                <Link className="link" to="/">Development Works</Link>
                <Link className="link" to="/">Design Works</Link>
            </div>
        </nav>
    )
}
