import React from "react"

import { videoContainer } from "./video.module.scss"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className={videoContainer}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

export default Video