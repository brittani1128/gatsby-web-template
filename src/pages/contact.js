import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h1>Contact Me...</h1>
    <form>
      <input />
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
