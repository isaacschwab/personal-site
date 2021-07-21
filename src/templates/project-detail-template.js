import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/'
import SEO from '../components/seo'
import ImgBasic from '../components/img-basic'
import Video from '../components/video'

import 
{ 
  summaryContainer, 
  summaryItem,  
  detailImage, 
  detailCaption 
} from './project-detail-template.module.scss'

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
    
    <div className={summaryContainer}>
      <div className={summaryItem}>
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
      <div className={summaryItem}>
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
    {project.video &&
      <Video
        videoSrcURL={project.video.src}
        videoTitle={project.video.title}
      />
    }
    <section className={`component center`}>
    {project.detail.map((item, index) => {
      console.log(item)
      return (
        <div key={index} className={detailImage}>
          <ImgBasic
            key={index}
            image={item.image}
          />
          <p className={detailCaption}>{item.caption}</p>
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
            gatsbyImageData(width: 1000, quality: 90)
          }
        }
      }
      video {
        src
        title
      }
      detail {
        text
        title
        caption
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
`

export default ProjectDetail

