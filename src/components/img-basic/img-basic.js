import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

import { item } from "./img-basic.module.scss"

const ImgBasic = (props) => {
  const { image } = props
  return (
    <div className={item}>
      <GatsbyImage image={image.src.childImageSharp.gatsbyImageData} alt={image.alt} />
    </div>
  )
}

export default ImgBasic

ImgBasic.propTypes = {
  image: PropTypes.PropTypes.object.isRequired
}