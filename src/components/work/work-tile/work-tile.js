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
        {this.state.open &&
          <Img
            fluid={this.props.image}
          />
        }
        <h3 className={style.itemName}>{this.props.title}</h3>
        {this.state.open &&
          <div>{this.props.desc}</div>
        }
      </div>
    )
  }
}

export default WorkTile
