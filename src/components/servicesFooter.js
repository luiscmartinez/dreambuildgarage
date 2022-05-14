import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "../css/servicesFooter.css"

export const ServiceFooter = () => {
  const { strapiHomepage } = useStaticQuery(graphql`
    query StrapiContactPhone {
      strapiHomepage {
        contact {
          phone
        }
      }
    }
  `)
  const { phone } = strapiHomepage.contact
  return (
    <div className="services-footer">
      <h2>Let us help you with a service estimate!</h2>
      <div className="services-footer-inner">
        <Link to="contact" className="services-footer-btn">
          CONTACT US
        </Link>
        <div className="service-footer-message">
          or call
          <div className="service-footer-number">
            <a href={`tel:${phone.replace(/\D/g, "")}`}>{phone}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
