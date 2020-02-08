import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import style from "./img-desc.module.scss"

const ImgDesc = (props) => {
  const { title, description, image } = props
  return (
    <div className={style.item}>
      <h2 className={style.title}>{title}</h2>
      <p>{description}</p>
      <Img
        fluid={image.src.childImageSharp.fluid}
        alt={image.alt}
      />
    </div>
  )
}

export default ImgDesc

ImgDesc.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.PropTypes.object.isRequired
}