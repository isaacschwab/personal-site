import React from "react"

import { footer, social, logo, copyright } from "./footer.module.scss"

import githubImage from "../../images/github.svg"

const Footer = ({ socialData }) => {
  return (
    <footer className={footer}>
      <div className={social}>
        <a href={socialData.github} target="_blank" rel="noopener noreferrer">
          <img className={logo} src={githubImage} alt="GitHub Logo"></img>
        </a>
      </div>
      <div className={copyright}>
        © {new Date().getFullYear()} Isaac Schwab
      </div>
    </footer>
  )
}


export default Footer
