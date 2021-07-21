import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as style from "./intro.module.scss"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
    }
  `)
  return (
    <section className={`component`}>
      <div className={style.container}>
        <GatsbyImage
          image={data.logo.childImageSharp.gatsbyImageData}
          alt={"headshot of Isaac Schwab wearing a suit"}
          className={style.image}
          imgStyle={{borderRadius: '100%'}}
        />

        <div className={style.textContainer}>
          <h1 className={style.heading}>Hello! Let me introduce myself, I'm<br></br><span className={style.name}>Isaac Schwab</span></h1>
          <p>I’m a software engineer based in Minneapolis, Minnesota.
          I received a degree in Computer Science from the University of Minnesota. Read more about me and my work below.
          </p>
        </div>
        
      </div>
      
    </section>
  )
  
}

export default Intro
