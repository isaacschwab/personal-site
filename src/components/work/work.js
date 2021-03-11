import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import WorkTile from "./work-tile"

import { workSection, title, container }from "./work.module.scss"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      work: allProjectsJson(filter: {type: {eq: "work"}}, limit: 3) {
        edges {
          node {
            slug
            id
            title
            description
            url
            image {
              alt
              src {
                extension
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
    {/* <h2 className={title}>Work Highlights</h2> */}
    <div className={container}>
      {data.work.edges.map(item => {
        return (
          <WorkTile
            key={item.node.id}
            title={item.node.title}
            desc={item.node.description}
            image={item.node.image}
            url={item.node.slug}
          />
        )
      })}
    </div>
    </>
  )
}

export default Work