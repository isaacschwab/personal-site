import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import WorkTile from "./work-tile"

import style from "./work.module.scss"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      progresso: file(relativePath: { eq: "progresso.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 770) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      chexmix: file(relativePath: { eq: "chexmix.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 770) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      larabar: file(relativePath: { eq: "larabar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 770) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className={`component`}>
      <h2 className={style.title}>Recent Work</h2>
      <div className={style.container}>
        <WorkTile
          title={'Progresso Soups'}
          desc={'A Gatsby + Wordpress solution that consumes recipe and product data from internal APIs'}
          image={data.progresso.childImageSharp.fluid}
        />
        <WorkTile
          title={'Chex Mix'}
          desc={'A Gatsby + Wordpress solution that consumes recipe and product data from internal APIs'}
          image={data.chexmix.childImageSharp.fluid}
        />
        <WorkTile
          title={'Larabar Canada'}
          desc={'A Gatsby + Wordpress solution that consumes recipe and product data from internal APIs'}
          image={data.larabar.childImageSharp.fluid}
        />
      </div>
    </section>
  )
  
}

export default Work