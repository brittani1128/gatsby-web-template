import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>this is a blog</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
