import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import style from "./about.module.scss"

import webImage from "../../images/web.svg"
import designImage from "../../images/design.svg"
import cameraImage from "../../images/camera.svg"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hobby: file(relativePath: { eq: "html.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section className={`component`}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <div className={style.bio}>
            <h2>About Me</h2>
            <p>
            Hi, I’m Isaac Schwab, a computer scientist that lives and works in Minneapolis, MN.
            I attended the University of Minnesota where I graduated with a degree in Computer Science.
            I currently work at General Mills, where I can be found building performant, accesible, and visually appealing websites.
            </p>
          </div>

          <div class={`${style.visualTextWrap} ${style.visualTextWrap}`}>
            <div class={style.visualTextVisual}>
              <img className={style.icon} src={webImage} alt=""></img>
              <img className={style.icon} src={designImage} alt=""></img>
              <img className={style.icon} src={cameraImage} alt=""></img>
            </div>
            <div class={style.visualTextText}>
              <p className={style.text}>
                Outside of work I have a variety of side projects that I like to tinker with when I have time.
                This includes web and game development, design, and photography.
                <br></br>
                <Link className={style.link}>View my side projects.</Link>
              </p>
            </div>
          </div>

          <div class={`${style.visualTextWrap} ${style.visualTextFlipped}`}>
            <div class={style.visualTextVisual}>
              <img className={style.icon} src={webImage} alt=""></img>
              <img className={style.icon} src={designImage} alt=""></img>
              <img className={style.icon} src={cameraImage} alt=""></img>
            </div>
            <div class={style.visualTextText}>
              <p className={style.text}>
                I also like to get away from a screen and get some activity. I spend a lot of time skiing, mountain biking, rock climbing, and exploring the outdoors.
                When I'm not in Minneapolis, you can find me along the North Shore of Lake Superior, as far away from the city as possible.
                <br></br>
                <Link className={style.link}>View my hobbies.</Link>
              </p>
            </div>
          </div>

          {/* <div className={style.extras}>
            <div className={` ${style.itemFlip}`}>
              <p className={style.text}>
                Outside of work I have a variety of side projects that I like to tinker with when I have time.
                This includes web and game development, design, and photography.
                <br></br>
                <Link className={style.link}>View my side projects.</Link>
              </p>
              <div className={style.visual}>
                <img height="50" className={style.icon} src={webImage} alt=""></img>
                <img height="50" className={style.icon} src={designImage} alt=""></img>
                <img height="50" className={style.icon} src={cameraImage} alt=""></img>
              </div>
            </div>
            <div className={style.item}>
              <p className={style.text}>
                My favorite hobbies are skiing, mountain biking, rock climbing, and exploring the outdoors. 
              </p>
              <div className={`${style.visual} ${style.flipped}`}>
                <div className={style.icons}>
                  <img height="30" className={style.icon} src={data.hobby.childImageSharp.fixed.src}></img>
                  <img height="30" className={style.icon} src={data.hobby.childImageSharp.fixed.src}></img>
                  <img height="30" className={style.icon} src={data.hobby.childImageSharp.fixed.src}></img>
                </div>
                <Link className={style.link}>View Hobbies</Link>
              </div>
            </div>
            
          </div> */}
          

        </div>
        <Img
          fluid={data.logo.childImageSharp.fluid}
          className={style.image}
          imgStyle={{borderRadius: '100%'}}
        />
      </div>
      
    </section>
  )
  
}

export default About
