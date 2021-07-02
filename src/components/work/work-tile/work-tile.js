import React from 'react'

import { item, iconSize, itemName, itemDesc } from "./work-tile.module.scss"
import { Link } from 'gatsby'

const WorkTile = (props) => {
  const { title, desc, icon, url } = props
  return (
    <div className={item}>
      <img className={iconSize} src={icon.src.publicURL} alt={icon.alt}></img>
      <h3 className={itemName}>{title}</h3>
      <div className={itemDesc}>{desc}</div>
      <Link to={`/work/${url}`}>Learn More</Link>
    </div>
  )
}

export default WorkTile
