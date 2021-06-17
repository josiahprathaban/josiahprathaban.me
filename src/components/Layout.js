import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../styles/global.scss"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Josiah Prathaban</title>
                <link rel="icon" href="/favicon.svg" />
            </Helmet>
            <Navbar/>
            <div className="content">
                { children }
            </div>
            <Footer/>
        </div>
    )
}
