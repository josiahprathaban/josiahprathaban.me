import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import "../styles/global.scss"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {

    const [isLightMode, setIsLightMode] = useState(true);

    function handleMode() {
        isLightMode ? setIsLightMode(false) : setIsLightMode(true)
    }

    return (
        <div className={isLightMode ? 'light' : 'dark'}>
            <div className="layout">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Josiah Prathaban</title>
                    <link rel="icon" href="/favicon.svg" />
                </Helmet>
                <div className="texture"></div>
                <div>
                    <Navbar/>
                    <div className="content">
                    <button onClick={handleMode} className="mode">
                        <img src={isLightMode ? 'light_mode.svg' : 'dark_mode.svg'}/>
                    </button>
                        { children }
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
