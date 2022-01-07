import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel as AntCarousel } from "antd"

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  border: "3px solid black",
  overflow: "hidden",
}

export function Carousel() {
  const imageData = useStaticQuery(graphql`
    query LandingCarouselQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  `)
  const carouselImages = imageData.allFile.edges.map(edge =>
    getImage(edge.node)
  )

  return (
    <AntCarousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <GatsbyImage image={carouselImages[3]} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <GatsbyImage image={carouselImages[2]} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <GatsbyImage image={carouselImages[5]} />
        </h3>
      </div>
    </AntCarousel>
  )
}
