import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div className="logo"></div>
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/">Development</Link>
                <Link className="link" to="/">Design</Link>
                <Link className="link" to="/">About</Link>
            </div>
        </nav>
    )
}
