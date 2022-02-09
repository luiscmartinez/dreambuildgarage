import React from "react"

export const BlockCard = props => {
  const { title, description, img } = props
  const { imgUrl, alt } = img
  return (
    <article className="article">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imgUrl} alt={alt} />
    </article>
  )
}
