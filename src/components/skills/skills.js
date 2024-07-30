import React from "react"

import * as style from "./skills.module.scss"

const Skills  = () => {
  return (
    <section className={`component`}>

      <ul className={style.container}>
        <li className={style.textContainer}>
          Javascript / Typescript
        </li>
        <li className={style.textContainer}>
          React
        </li>
        <li className={style.textContainer}>
          TailwindCSS
        </li>
      </ul>
      
    </section>
  )
  
}

export default Skills
