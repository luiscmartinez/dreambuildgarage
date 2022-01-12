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
      allFile(filter: { sourceInstanceName: { eq: "carouselImages" } }) {
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
      {carouselImages.map((img, i) => {
        return (
          <div key={i}>
            <h3 style={contentStyle}>
              <GatsbyImage image={img} />
            </h3>
          </div>
        )
      })}
    </AntCarousel>
  )
}
