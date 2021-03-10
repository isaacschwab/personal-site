import React from 'react'

import { item, icon, itemName, itemDesc } from "./work-tile.module.scss"
import { Link } from 'gatsby'

const WorkTile = (props) => {
  const { title, desc, image, url } = props
  return (
    <div className={item}>
      <img className={icon} src={image.src.publicURL} alt={image.alt}></img>
      <h3 className={itemName}>{title}</h3>
      <div className={itemDesc}>{desc}</div>
      <Link to={`/work/${url}`}>Learn More</Link>
    </div>
  )
}

export default WorkTile
