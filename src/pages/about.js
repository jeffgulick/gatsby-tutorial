import { Link } from "gatsby"
import React from "react"
import Header from "../Components/Header"
import Layout from "../Components/Layout"

export default function About() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="About Gatsby" />
        <Header headerText="It's pretty cool" />
        <Link to="/">Home</Link>
        <p>Such wow. Very React.</p>
      </div>
    </Layout>
  )
}