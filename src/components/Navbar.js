import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>JO</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
    )
}
