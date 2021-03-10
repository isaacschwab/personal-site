import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

import { item, itemTitle } from "./img-desc.module.scss"

const ImgDesc = (props) => {
  const { title, description, image } = props
  return (
    <div className={item}>
      <h2 className={itemTitle}>{title}</h2>
      <p>{description}</p>
      <GatsbyImage image={image.src.childImageSharp.gatsbyImageData} alt={image.alt} />
    </div>
  )
}

export default ImgDesc

ImgDesc.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.PropTypes.object.isRequired
}