import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

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
    <div id="services">
      <h2>Committed to Quality at Every Step</h2>
      {serviceData.allStrapiService.edges.map(({ node }) => {
        const { description, image, id, title } = node

        const imageSharp = image.localFile.childrenImageSharp.map(child => {
          const gatsbyImage = getImage(child.gatsbyImageData)
          return gatsbyImage
        })

        const descriptionMarkdown = description.data.description

        return (
          <div key={id}>
            <GatsbyImage image={imageSharp[0]} />
            <h3>{title}</h3>
            <p>{descriptionMarkdown}</p>
          </div>
        )
      })}
    </div>
  )
}
