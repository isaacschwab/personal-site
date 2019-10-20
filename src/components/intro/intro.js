import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import style from "./intro.module.scss"

const Intro = () => {
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
      <div className={style.container}>
        <Img
          fluid={data.logo.childImageSharp.fluid}
          className={style.image}
          imgStyle={{borderRadius: '100%'}}
        />
        <div className={style.textContainer}>
          <h1 className={style.heading}>Hello! Let me introduce myself, I'm<br></br><span className={style.name}>Isaac Schwab</span></h1>
          <p>I’m a software engineer, that is based in Minneapolis, MN.
            I recieved a degree in Computer Science from the University of Minnesota. Read more about me or my work below.
          </p>
        </div>
        
      </div>
      
    </section>
  )
  
}

export default Intro
