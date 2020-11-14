import React from "react"

import Layout from "../components/layout/"
import SEO from "../components/seo"
import ImgDesc2Col from '../components/img-desc-2-col'

const ProjectDetail = ({ data }) => {
  const project = data.projectsJson
  return (
    <Layout>
    <SEO title={`Projects - ${project.title}`} />
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <section className={`component`}>
        
    </section>
  </Layout>
  )

}

export const query = graphql`
  query($id: String!) {
    projectsJson(id: {eq: $id}) {
      id
      slug
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
`

export default ProjectDetail

