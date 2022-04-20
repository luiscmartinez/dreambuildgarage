import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BiEnvelope } from "@react-icons/all-files/bi/BiEnvelope"
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall"
import { BiMap } from "@react-icons/all-files/bi/BiMap"
import "../css/topbar.css"

export const TopBar = () => {
  const contactData = useStaticQuery(graphql`
    query ContactQuery {
      allStrapiContact {
        nodes {
          phone
          email
          address
        }
      }
    }
  `)

  const contactInfo = contactData.allStrapiContact.nodes[0]
  const { address, phone, email } = contactInfo
  return (
    <div className="topbar">
      <div className="topbar-item">
        <div className="topbar-icon">
          <BiPhoneCall />
        </div>
        <div className="topbar-item-text">{phone}</div>
      </div>
      <div className="topbar-item email">
        <div className="topbar-icon">
          <BiEnvelope />
        </div>
        <div className="topbar-item-text">EMAIL US</div>
      </div>
      <div className="topbar-item">
        <div className="topbar-icon">
          <BiMap />
        </div>
        <div className="topbar-item-text">GET DIRECTIONS</div>

        {/* {address} */}
      </div>
    </div>
  )
}
