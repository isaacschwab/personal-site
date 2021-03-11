import { Link } from "gatsby"
import React from "react"
import Work from "../work"

import * as style from "./about.module.scss"

import webImage from "../../images/web.svg"
import designImage from "../../images/design.svg"
import cameraImage from "../../images/camera.svg"
import mtbImage from "../../images/mtb.svg"
import skiImage from "../../images/skiing.svg"
import climbImage from "../../images/climbing.svg"

const About = () => {
  return (
    <section className={`component`}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <div className={style.bio}>
            <h2>About Me</h2>
            <p>
            Hi, I’m Isaac Schwab, a software engineer with {new Date().getFullYear() - 2017}+ years of full-stack development experience, 
            determined to make an impact in a rapidly changing industry. I specialize in web technologies, object oriented programming, databases, and scripting,
            but I'm always open to learning something new! I enjoy opportunities to build out new capabilities, while focusing on functionality, performance and user experience.
            I currently work at General Mills, where I can be found building performant, accesible, and visually appealing websites, check out some of my work below.
            </p>
          </div>

          <Work />

          <div className={`${style.visualTextWrap} ${style.visualTextWrap}`}>
            <div className={style.visualTextVisual}>
              <img className={style.icon} src={webImage} alt="Graphic icon of a computer screen interface, representing web and game development"></img>
              <img className={style.icon} src={designImage} alt="Graphic icon of a pencil and a ruler, representing design"></img>
              <img className={style.icon} src={cameraImage} alt="Graphic icon of a camera, representing photography"></img>
            </div>
            <div className={style.visualTextText}>
              <p>
                Outside of work I have a variety of side projects that I like to tinker with when I have time.
                This includes web and game development, design, and photography.
                <br></br>
                <Link to={'/projects'} className={style.link}>View my side projects.</Link>
              </p>
            </div>
          </div>

          <div className={`${style.visualTextWrap} ${style.visualTextFlipped}`}>
            <div className={style.visualTextVisual}>
              <img className={style.icon} src={skiImage} alt="Graphic icon of a person skiing"></img>
              <img className={style.icon} src={mtbImage} alt="Graphic icon of a person mountain biking"></img>
              <img className={style.icon} src={climbImage} alt="Graphic icon of a person rock climbing"></img>
            </div>
            <div className={style.visualTextText}>
              <p>
                I also like to get away from a screen and get some activity. I spend a lot of time skiing, mountain biking, rock climbing, and exploring the outdoors.
                When I'm not in Minneapolis, you can find me along the North Shore of Lake Superior, as far away from the city as possible.
                <br></br>
                <Link to={'/hobbies'} className={style.link}>View my hobbies.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
  
}

export default About
