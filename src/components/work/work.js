import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import WorkTile from "./work-tile"

import * as style from "./work.module.scss"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      work: allProjectsJson(filter: {type: {eq: "work"}}) {
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
    <section className={`component`}>
      <h2 className={style.title}>Recent Work</h2>
      <div className={style.container}>
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
    </section>
  )
}

export default Work