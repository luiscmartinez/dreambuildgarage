import React from "react"
import { Link } from "react-scroll"
import { graphql, useStaticQuery } from "gatsby"
import "../css/about.css"

export const About = () => {
  const aboutData = useStaticQuery(graphql`
    query MyQuery {
      allStrapiAbout {
        edges {
          node {
            id
            title
            description
          }
        }
      }
    }
  `)

  const about = aboutData.allStrapiAbout.edges[0].node

  return (
    <div id="about" className="site-about-section">
      <div className="about-inner-wrapper">
        <h2>{about.title}</h2>
        <div className="break"></div>
        <p>{about.description}</p>
        <div className="about-btn-wrapper">
          <Link to="services" smooth={true} className="about-section-btn">
            Our Services
          </Link>
        </div>
      </div>
    </div>
  )
}
