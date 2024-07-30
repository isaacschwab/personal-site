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
             I am a software engineer with {new Date().getFullYear() - 2017}+ years of full-stack development experience. I have a foundation in UI/UX and API development, with a strong focus on performance, functionality, and accessibility. I excel at working with cross-functional teams, including designers, product managers, and engineers, this has allowed me to align varying perspectives to deliver high-quality solutions. Products have included websites, mobile apps, and web platforms. Recently, I’ve been focusing on game development and blockchain integrations with web platforms. I am dedicated to building innovative products and features that create great experiences for all users.
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
              Outside of work, I have a variety of side projects that I use to improve technical capabilities and explore new technologies. Recently, I dove head first into web3 development and blockchain technologies. Past projects have included web and game development, design, and photography.
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
                My time away from computer screens is filled with a variety of hobbies. I spend a lot of time mountain biking, rock climbing, skiing, and exploring the outdoors. When I'm not in Minneapolis, you will often find me along the North Shore of Lake Superior or on one of Minnesota’s many lakes.
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
