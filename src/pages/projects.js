import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/"
import SEO from "../components/seo"
import ImgDesc2Col from '../components/img-desc-2-col'

const Projects = ({ data }) => {
  const { projects } = data
  let count = 0
  return (
    <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <p>Check out some of my personal projects below!</p>
    <section className={`component`}>
        {projects.edges.map(item => {
          count++
          return (
            <ImgDesc2Col
              key={item.node.id}
              title={item.node.title}
              description={item.node.description}
              image={item.node.image}
              flip={count % 2 === 0}
              slug={`/projects/${item.node.slug}`}
            />
          )
        })}
      </section>
  </Layout>
  )
}

export const query = graphql`
  query {
    projects: allProjectsJson(filter: {type: {eq: "project"}}) {
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

export default Projects
