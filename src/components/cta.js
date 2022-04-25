import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

export const Cta = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: allStrapiHero {
          nodes {
            backgroundImg {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `
  )
  console.log("getBackgrounplaceholderImagedImage", placeholderImage)
  const image = getImage(
    placeholderImage.nodes[0].backgroundImg.localFile.childImageSharp
  )
  // Use like this:
  const bgImage = convertToBgImage(image)
  console.log("IMG DEFINED?", bgImage)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div style={{ minHeight: 1000, minWidth: 1000 }}>
        <h2>gatsby-background-image</h2>
      </div>
    </BackgroundImage>
  )
}
