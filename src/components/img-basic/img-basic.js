import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import style from "./img-basic.module.scss"

const ImgBasic = (props) => {
  const { image } = props
  return (
    <div className={style.item}>
      <Img
        fluid={image.src.childImageSharp.fluid}
        alt={image.alt}
      />
    </div>
  )
}

export default ImgBasic

ImgBasic.propTypes = {
  image: PropTypes.PropTypes.object.isRequired
}