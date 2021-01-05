import React from "react"

import Layout from "../components/layout/"
import SEO from "../components/seo"
import ImgBasic from '../components/img-basic'

const ProjectDetail = ({ data }) => {
  const project = data.projectsJson
  console.log(project)
  return (
    <Layout>
    <SEO title={`Projects - ${project.title}`} />
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <div>
      <div>{project.long_desc}</div>
    </div>
    <section className={`component center`}>
    {project.detail.map((item, index) => {
      console.log(item)
      return (
        <ImgBasic
          key={index}
          image={item.image}
        />
      )
    })}
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
      long_desc
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
      detail {
        text
        title
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
`

export default ProjectDetail

