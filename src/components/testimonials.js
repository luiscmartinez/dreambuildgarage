import React from "react"
import { Carousel as AntCarousel } from "antd"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar"
import "../css/testimonials.css"

export const Testimonials = () => {
  const { allStrapiTestimonial } = useStaticQuery(graphql`
    query TestimonialsQuery {
      allStrapiTestimonial {
        edges {
          node {
            id
            customerImage {
              localFile {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
            stars
            customerName
            description
          }
        }
      }
    }
  `)

  const renderStars = starNum => {
    const starFill = <AiFillStar />
    const starOutline = <AiOutlineStar />
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (starNum > i) {
        stars.push(starFill)
      } else {
        stars.push(starOutline)
      }
    }
    return stars
  }

  return (
    <div className="site-testimonials" id="testimonials">
      <h2 className="testimonial-header"> CUSTOMER TESTIMONIALS</h2>
      <div className="break"></div>
      <AntCarousel autoplay>
        {allStrapiTestimonial.edges.map(({ node }) => {
          const { customerName, description, stars, customerImage } = node
          const image = getImage(
            customerImage.localFile.childrenImageSharp[0].gatsbyImageData
          )
          return (
            <div className="testimonial-card">
              <GatsbyImage image={image} className="testimonial-avatar" />
              <div className="testimonial-card-description">{description}</div>
              <div className="testimonial-card-customerName">
                {customerName}
              </div>
              <div className="testimonial-stars">{renderStars(stars)}</div>
            </div>
          )
        })}
      </AntCarousel>
    </div>
  )
}
