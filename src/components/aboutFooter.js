import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../css/aboutFooter.css"

export const AboutFooter = () => {
  const { strapiHomepage } = useStaticQuery(graphql`
    query FooterData {
      strapiHomepage {
        contact {
          email
          phone
        }
      }
    }
  `)
  const { address, phone } = strapiHomepage.contact
  const renderData = data => {
    const { top, bottom } = data
    return (
      <div className="about-footer-section">
        <div>{top}</div>
        <div className="break"></div>
        <div className="about-footer-bottom">{bottom}</div>
      </div>
    )
  }
  return (
    <div className="site-about-footer">
      <div className="about-footer-inner">
        {renderData({ top: "GIVE US A CALL", bottom: phone })}
        {renderData({ top: "COME ON BY", bottom: address })}
      </div>
    </div>
  )
}
