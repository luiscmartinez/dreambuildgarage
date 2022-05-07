import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../css/footer.css"

export const Footer = () => {
  const { strapiContact } = useStaticQuery(graphql`
    query StrapiContactInfo {
      strapiContact {
        phone
      }
    }
  `)
  const { phone } = strapiContact
  return (
    <div className="site-footer">
      <div className="footer-message">
        We would love to help with your vehicle. Call us today
        <span className="service-footer-number">
          <a href={`tel:${phone.replace(/\D/g, "")}`}>{phone}</a>
        </span>
      </div>
      <Link to="contact" className="services-footer-btn footer-btn">
        CONTACT US
      </Link>
    </div>
  )
}
