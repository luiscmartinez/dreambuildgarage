import React from "react"
import { Link } from "gatsby"
import "../css/footer.css"

export const Footer = () => {
  const phone = "(323) 633 7050"
  return (
    <div className="site-footer">
      <div className="footer-message">
        We would love to help with your vehicle. Call us today
        <span className="service-footer-number">
          <a href={`tel:${phone.replace(/\D/g, "")}`}>{phone}</a>
        </span>
      </div>
      <button className="services-footer-btn footer-btn">
        <Link to="contact">CONTACT US</Link>
      </button>
    </div>
  )
}
