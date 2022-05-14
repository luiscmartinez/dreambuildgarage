import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BiEnvelope } from "@react-icons/all-files/bi/BiEnvelope"
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall"
import { BiMap } from "@react-icons/all-files/bi/BiMap"
import "../css/topbar.css"

export const TopBar = () => {
  const { strapiHomepage } = useStaticQuery(graphql`
    query ContactQuery {
      strapiHomepage {
        contact {
          email
          phone
        }
      }
    }
  `)
  const { contact } = strapiHomepage
  const { phone, email } = contact
  return (
    <div className="topbar" id="topbar">
      <a href={`tel:${phone.replace(/\D/g, "")}`} className="topbar-item">
        <div className="topbar-icon">
          <BiPhoneCall />
        </div>
        <div className="topbar-item-text">{phone}</div>
      </a>
      <a href={`mailto:${email}`} className="topbar-item email">
        <div className="topbar-icon">
          <BiEnvelope />
        </div>
        <div className="topbar-item-text">EMAIL US</div>
      </a>
      <a
        href="https://www.google.com/maps/place/7542+Warner+Ave,+Huntington+Beach,+CA+92647/@33.71529,-117.997268,15z/data=!4m5!3m4!1s0x80dd268b1cfa4ded:0x4cea55e336718a9!8m2!3d33.7152898!4d-117.9972678?hl=en-US"
        target="_blank"
        className="topbar-item"
      >
        <div className="topbar-icon">
          <BiMap />
        </div>
        <div className="topbar-item-text">GET DIRECTIONS</div>
      </a>
    </div>
  )
}
