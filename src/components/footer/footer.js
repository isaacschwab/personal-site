import { useStaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./footer.module.scss"

import githubImage from "../../images/github.svg"
import instagramImage from "../../images/instagram.svg"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        social {
          github
          instagram
        }
      }
    }
  }
  `)

  return (
    <footer className={style.footer}>
      <div className={style.social}>
        <a href={data.site.siteMetadata.social.github} target="_blank">
          <img className={style.logo} src={githubImage} alt="GitHub Logo"></img>
        </a>
        <a href={data.site.siteMetadata.social.instagram} target="_blank">
          <img className={style.logo} src={instagramImage} alt="Instagram Logo"></img>
        </a>
      </div>
      <div className={style.copyright}>
        © {new Date().getFullYear()} Isaac Schwab
      </div>
    </footer>
  )
}


export default Footer
