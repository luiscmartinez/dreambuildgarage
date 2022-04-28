import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "../css/servicesFooter.css"

export const ServiceFooter = () => {
  const { strapiContact } = useStaticQuery(graphql`
    query StrapiContactPhone {
      strapiContact {
        phone
      }
    }
  `)
  const { phone } = strapiContact
  return (
    <div className="services-footer">
      <h2>Let us help you with a service estimate!</h2>
      <div className="services-footer-inner">
        <button className="services-footer-btn">
          <Link to="contact">CONTACT US</Link>
        </button>
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
