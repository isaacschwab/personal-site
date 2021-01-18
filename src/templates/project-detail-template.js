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
    <p>
      {project.description}<br></br>
      {project.url &&
      <a href={project.url} target="_blank" rel="noopener noreferrer">View {project.title}.</a>
      }
    </p>
    
    <div className={style.summaryContainer}>
      <div className={style.summaryItem}>
        <h2>Task</h2>
        <ul>
          {project.task.map((item, index) => {
            console.log(item)
            return (
              <li key={`task-${index}`}>{item}</li>
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
              <li key={`tech-${index}`}>{item}</li>
            )
          })}
        </ul>
      </div>
    </div>
    <div>
      <p dangerouslySetInnerHTML={{ __html: project.long_desc }}></p>
    </div>
    <section className={`component center`}>
    {project.detail.map((item, index) => {
      console.log(item)
      return (
        <div key={index} className={style.detailImage}>
          <ImgBasic
            key={index}
            image={item.image}
          />
          <p className={style.detailCaption}>{item.caption}</p>
        </div>
        
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
        caption
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

