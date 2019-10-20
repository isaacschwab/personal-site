import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/"
import Intro from "../components/intro"
import SEO from "../components/seo"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro></Intro>
    <About></About>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
