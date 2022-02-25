import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const BlockCard = props => {
  const { title, description, img } = props
  const { imgUrl, alt } = img
  return (
    <article className="article">
      <h2>{title}</h2>
      <p>{description}</p>
      <GatsbyImage image={imgUrl} alt={alt} />
    </article>
  )
}
