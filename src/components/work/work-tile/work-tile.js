import React, { Component } from 'react'
import Img from "gatsby-image"

import style from "./work-tile.module.scss"

class WorkTile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open: false
    }
  }

  onClick = () => {
    this.setState({open: !this.state.open})
  }
  
  render() {
    return (
      <div className={style.item} onClick={this.onClick}>
        {/* <Img
          fluid={this.props.image}
          className={this.state.open ? `${style.open}` : ``}
        /> */}
        <img className={style.icon} src={this.props.image} alt="Graphic icon of a camera, representing photography"></img>
        <h3 className={style.itemName}>{this.props.title}</h3>
        <div className={style.desc}>{this.props.desc}</div>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">View {this.props.title}.</a>
      </div>
    )
  }
}

export default WorkTile
