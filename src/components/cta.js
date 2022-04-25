import React from "react"
import { Link } from "react-scroll"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
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

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      {/* these styles = are applied to background image */}
      <div style={{ minHeight: 1000 }}>
        <div className="cta-content">
          <h1>
            <span>
              {title}
              <br></br>
              {description}
            </span>
          </h1>
          <div>
            <Link to="about" smooth={true}>
              {buttonTitle}
            </Link>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}
