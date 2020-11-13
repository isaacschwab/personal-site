import React from "react"

import Layout from "../components/layout/"
import SEO from "../components/seo"
import ImgDesc2Col from '../components/img-desc-2-col'

const Projects = ({ data }) => {
  const { projects } = data
  return (
    <Layout>
    <SEO title="Projects - Isaac Schwab" />
    <h1>Projects</h1>
    <p>Check out some of my projects below! I like to hop back and forth between coding projects, and other hands on projects.</p>
    <section className={`component`}>
        {projects.edges.map(item => {
          return (
            <ImgDesc2Col
              key={item.node.id}
              title={item.node.title}
              description={item.node.description}
              image={item.node.image}
            />
          )
        })}
      </section>
  </Layout>
  )
}

export const query = graphql`
  query {
    projects: allProjectsJson {
      edges {
        node {
          id
          title
          description
          skills
          image {
            alt
            src {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Projects
