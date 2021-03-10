import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as style from "./header.module.scss"

const Header = ({ siteTitle }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45 1H25V18H45V34.5H24.5M0 1H10M20 1H10M10 1V34.5M10 34.5H20M10 34.5H0" stroke="white"/>
            </svg>

          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
