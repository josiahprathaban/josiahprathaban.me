import React from "react"
import Layout from "../components/Layout"
import "../styles/index.scss"

export default function Home() {
  return (
  <div>
    <Layout>
      <section>
        <div className="text">
        <img src="/jo.back.svg" alt="text"/>
          <h1>Josiah Prathaban</h1>
          <h3>Developer | Designer</h3>
          <a href="https://josiahprathaban.github.io/josiahprathaban.resume/" target="_blank" rel="noreferrer">My Resume</a>
        </div>

        <div className="banner">
          <img src="/jo.svg" alt="banner"/>
        </div> 
      </section>
    </Layout>
  </div>)
}
