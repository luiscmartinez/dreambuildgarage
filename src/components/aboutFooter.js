import React from "react"
import { render } from "react-dom"
import "../css/aboutFooter.css"

export const AboutFooter = () => {
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
        {renderData({ top: "GIVE US A CALL", bottom: "3236330502" })}
        {renderData({ top: "COME ON BY", bottom: "5311 New York Ave " })}
      </div>
    </div>
  )
}
