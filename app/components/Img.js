import { LazyLoadImage } from "react-lazy-load-image-component"
import React from 'react'
import "react-lazy-load-image-component/src/effects/blur.css"

//loads images lazily and applies image background blur
const Img = ({src, className}) => {
  return (
    <LazyLoadImage 
    className={className|| ""}
    alt=""
    effect="blur"
    src={src}
    />
  )
}

export default Img