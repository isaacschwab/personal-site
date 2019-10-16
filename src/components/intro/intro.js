import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./intro.module.scss"

const Intro = () => (
  <section>
     <h1 className={style.heading}>Hello! Let me introduce myself, I'm<br></br><span className={style.name}>Isaac Schwab</span></h1>
  </section>
)

export default Intro
