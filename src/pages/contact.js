import React from "react";
import { Link } from "gatsby";
import Header from "../Components/Header";
import Layout from "../Components/Layout";

export default function Contact() {
  return (
    <Layout>
        <div style={{ color: `teal` }}>
        <Link to="/">Home</Link>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
        </div>
    </Layout>
  );
}
