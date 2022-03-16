import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel as AntCarousel } from "antd"
import "../../../css/carousel.css"

export function Carousel() {
  const imageData = useStaticQuery(graphql`
    query LandingCarouselQuery {
      allFile(filter: { sourceInstanceName: { eq: "carouselImages" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 200
                height: 350
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
          <div key={i} className="carouselItem">
            <GatsbyImage image={img} alt="auto performance enhancements" />
          </div>
        )
      })}
    </AntCarousel>
  )
}
