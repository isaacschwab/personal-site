import React from "react"

import Layout from "../components/layout/"
import SEO from "../components/seo"
import ImgBasic from '../components/img-basic'

import style from './project-detail-template.module.scss'

const ProjectDetail = ({ data }) => {
  const project = data.projectsJson
  console.log(project)
  return (
    <Layout>
    <SEO title={`Projects - ${project.title}`} />
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    {project.url &&
      <a href={project.url} target="_blank" rel="noopener noreferrer">View {project.title}.</a>
    }
    <div className={style.summaryContainer}>
      <div className={style.summaryItem}>
        <h2>Task</h2>
        <ul>
          {project.task.map((item, index) => {
            console.log(item)
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      </div>
      <div className={style.summaryItem}>
        <h2>Tech</h2>
        <ul>
          {project.skills.map((item, index) => {
            console.log(item)
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      </div>
    </div>
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
      url
      description
      long_desc
      task
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

