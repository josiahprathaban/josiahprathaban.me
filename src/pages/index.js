import React from "react"
import Layout from "../components/Layout"
import "../styles/index.scss"

export default function Home() {
  return (
  <div>
    <Layout>
      Hello world!
      <a href="https://josiahprathaban.github.io/josiahprathaban.resume/" target="_blank" rel="noreferrer">Resume</a>
      <img src="/jo_animated.svg" alt="banner" className="banner"/>
    </Layout>
  </div>)
}
