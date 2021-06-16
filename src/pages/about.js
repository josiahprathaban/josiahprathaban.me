import React from 'react'
import Layout from '../components/Layout'

export default function resume() {
    return (
        <div>
            <Layout>
                <button onclick="window.print();" id="download">Download CV as PDF</button>
            </Layout>
        </div>
    )
}
