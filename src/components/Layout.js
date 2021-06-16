import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../styles/global.scss"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                { children }
            </div>
            <Footer/>
        </div>
    )
}
