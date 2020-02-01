import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import WorkTile from "./work-tile"

import soupImage from "../../images/soup.svg"
import barImage from "../../images/protein-bar.svg"
import climbImage from "../../images/climbing.svg"

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
          desc={'A Gatsby + Wordpress solution that consumes data from internal APIs. Features advanced filtering and multi-tier navigation menu.'}
          image={soupImage}
          url={'https://www.progresso.com/'}
        />
        <WorkTile
          title={'Chex Mix'}
          desc={'A Wordpress solution that has product unique patterns throughout the site.'}
          image={barImage}
          url={'https://www.chexmix.com/'}
        />
        <WorkTile
          title={'Larabar Canada'}
          desc={'A multilingual Wordpress solution with bright colors, fun imagery, and a two tier navigation menu.'}
          image={barImage}
          url={'https://www.larabar.ca/'}
        />
      </div>
    </section>
  )
  
}

export default Work