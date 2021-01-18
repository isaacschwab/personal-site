import React, { Component } from 'react'
import Img from "gatsby-image"

import style from "./work-tile.module.scss"
import { Link } from 'gatsby'

const WorkTile = (props) => {
  const { title, desc, image, url } = props
  return (
    <div className={style.item}>
      <img className={style.icon} src={image.src.publicURL} alt={image.alt}></img>
      <h3 className={style.itemName}>{title}</h3>
      <div className={style.desc}>{desc}</div>
      <Link to={`/work/${url}`} className={style.link}>Learn More</Link>
    </div>
  )
}

export default WorkTile
