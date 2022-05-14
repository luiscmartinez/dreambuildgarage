import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { graphql, useStaticQuery } from "gatsby"
import "../css/about.css"

export const About = () => {
  const { strapiHomepage } = useStaticQuery(graphql`
    query MyQuery {
      strapiHomepage {
        about {
          description
          title
        }
      }
    }
  `)

  const { about } = strapiHomepage
  return (
    <div id="about" className="site-about-section">
      <div className="about-inner-wrapper">
        <h2>{about.title}</h2>
        <div className="break"></div>
        <p>{about.description}</p>
        <div className="about-btn-wrapper">
          <AnchorLink
            to="/#services"
            smooth={true}
            className="about-section-btn"
          >
            Our Services
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}
