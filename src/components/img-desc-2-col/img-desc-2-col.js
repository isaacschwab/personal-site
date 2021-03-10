import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

import { item, right, left, itemTitle } from "./img-desc-2-col.module.scss"

const ImgDesc2Col = (props) => {
  const { title, description, image, flip, slug } = props
  return (
    <div className={item}>
      <div className={flip ? `${right}` : `${left}`}>
        <GatsbyImage image={image.src.childImageSharp.gatsbyImageData} alt={image.alt} />
      </div>
      <div className={flip ? `${left}` : `${right}`}>
        <h2 className={itemTitle}>{title}</h2>
        <p>{description}</p>
        {slug &&
          <Link to={slug}>Learn More</Link>
        }
      </div>
    </div>
  )
}

export default ImgDesc2Col

ImgDesc2Col.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.PropTypes.object.isRequired,
  flip: PropTypes.bool.isRequired
}