import React from 'react'
import Navbar from "../components/Navbar"

export default function resume() {
    return (
        <div>
            <Navbar />
            <button onclick="window.print();" id="download">Download CV as PDF</button>
        </div>
    )
}
