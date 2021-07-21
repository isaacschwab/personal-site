import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgDesc2Col from '../components/img-desc-2-col'

const Work = ({ data }) => {
  const { work } = data
  let count = 0
  return (
    <Layout>
    <SEO title="Work - Isaac Schwab" />
    <h1>Work</h1>
    <p>Check out some projects I have worked on!</p>
    <section className={`component`}>
        {work.edges.map(item => {
          count++
          return (
            <ImgDesc2Col
              key={item.node.id}
              title={item.node.title}
              description={item.node.description}
              image={item.node.image}
              flip={count % 2 === 0}
              slug={`/work/${item.node.slug}`}
            />
          )
        })}
      </section>
  </Layout>
  )
}

export const query = graphql`
  query {
    work: allProjectsJson(filter: {type: {eq: "work"}}) {
      edges {
        node {
          id
          slug
          title
          description
          skills
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 1000, quality: 90)
              }
            }
          }
        }
      }
    }
  }
`

export default Work
