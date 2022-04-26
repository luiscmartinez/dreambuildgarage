import React from "react"
import { Link } from "react-scroll"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { useMedia } from "use-media"
import "../css/cta.css"

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
            title
            description
            buttonTitle
          }
        }
      }
    `
  )

  const { backgroundImg, description, title, buttonTitle } =
    placeholderImage.nodes[0]

  const image = getImage(backgroundImg.localFile.childImageSharp)
  // Use like this:
  const bgImage = convertToBgImage(image)

  const handleTextColor = text => {
    const words = text.split(" ")

    const colorizeCapitalWord = word => {
      const evaluation = word === word.toUpperCase()
      return <span style={{ color: evaluation && "#1b88ca" }}> {word}</span>
    }

    return words.map(colorizeCapitalWord)
  }

  const isLarge = useMedia({ minWidth: 960 })

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      {/* these styles = are applied to background image */}
      <div style={{ minHeight: isLarge ? 900 : 600 }}>
        <div className="cta-content">
          <h1>
            <span>
              {handleTextColor(title)}
              <br></br>
              {handleTextColor(description)}
            </span>
          </h1>
          <div className="cta-button">
            <Link to="about" smooth={true}>
              {buttonTitle}
            </Link>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}
