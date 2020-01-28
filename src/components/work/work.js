import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import style from "./work.module.scss"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className={`component`}>
      <h2 className={style.title}>Recent Work</h2>
      <div className={style.container}>
        <div className={style.item}>
          <h3 className={style.itemName}>Progresso Soups</h3>
        </div>
        <div className={style.item}>
          <h3 className={style.itemName}>Chex Mix</h3>
        </div>
        <div className={style.item}>
          <h3 className={style.itemName}>Larabar Canada</h3>
        </div>
      </div>
    </section>
  )
  
}

export default Work