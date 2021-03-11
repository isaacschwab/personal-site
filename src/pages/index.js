import React from "react"

import Layout from "../components/layout/"
import Intro from "../components/intro"
import SEO from "../components/seo"
import About from "../components/about"


const IndexPage = () => (
  <Layout>
    <SEO title="Isaac Schwab" />
    <Intro></Intro>
    <About></About>
  </Layout>
)

export default IndexPage
