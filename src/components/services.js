import React from "react"
import ReactMarkdown from "react-markdown"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import "../css/services.css"

export const Services = () => {
  const serviceData = useStaticQuery(graphql`
    query ServiceQuery {
      allStrapiService {
        edges {
          node {
            id
            description {
              data {
                id
                description
              }
            }
            title
            image {
              localFile {
                absolutePath
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div id="services" className="site-services-section">
      <h1>Our Services</h1>
      <div className="break service-divider"></div>
      {serviceData.allStrapiService.edges.map(({ node }) => {
        const { description, image, id, title } = node
        const imageSharp = image.localFile.childrenImageSharp.map(child => {
          const gatsbyImage = getImage(child.gatsbyImageData)
          return gatsbyImage
        })

        const descriptionMarkdown = description.data.description

        return (
          <div key={id} className="service-card">
            <GatsbyImage image={imageSharp[0]} className="service-card-image" />
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-description">
              <ReactMarkdown>{descriptionMarkdown}</ReactMarkdown>
            </p>
          </div>
        )
      })}
    </div>
  )
}
