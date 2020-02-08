import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import WorkTile from "./work-tile"

import style from "./work.module.scss"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      work: allWorkJson {
        edges {
          node {
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
              url={item.node.url}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Work