import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { useMedia } from "use-media"
import "../css/cta.css"

export const Cta = () => {
  const { allStrapiHomepage } = useStaticQuery(
    graphql`
      {
        allStrapiHomepage {
          nodes {
            hero {
              description
              title
              buttonTitle
              media {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: TRACED_SVG)
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const { media, description, title, buttonTitle } =
    allStrapiHomepage.nodes[0].hero

  const image = getImage(media.localFile.childImageSharp)
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
          <AnchorLink to="/#about" smooth={true} className="cta-button">
            {buttonTitle}
          </AnchorLink>
        </div>
      </div>
    </BackgroundImage>
  )
}
