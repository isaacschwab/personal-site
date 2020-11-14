import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import style from "./img-desc-2-col.module.scss"
import { Link } from "gatsby"

const ImgDesc2Col = (props) => {
  const { title, description, image, flip, slug } = props
  return (
    <div className={style.item}>
      <div className={flip ? `${style.right}` : `${style.left}`}>
        <Img
          fluid={image.src.childImageSharp.fluid}
          alt={image.alt}
        />
      </div>
      <div className={flip ? `${style.left}` : `${style.right}`}>
        <h2 className={style.title}>{title}</h2>
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