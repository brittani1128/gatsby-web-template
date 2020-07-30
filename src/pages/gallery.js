import React from "react"
import { Link } from "gatsby"
import { Gallery } from "gatsby-theme-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = () => (
  <Layout>
    <SEO title="GalleryPage" />
    <h1>Photo Gallery</h1>
    <Gallery />
  </Layout>
)

export default GalleryPage
