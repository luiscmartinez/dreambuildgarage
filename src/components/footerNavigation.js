import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { navigations } from "../utils/navigations"

export const FooterNavigation = () => {
  return (
    <footer className="site-footer footer-navigation">
      <AnchorLink to="/">
        {" "}
        © {new Date().getFullYear()},{` `}Dream Build Auto Service
      </AnchorLink>
      <ul>
        {navigations.map(eli => {
          return (
            <li key={eli.id}>
              <AnchorLink to={eli.id} spy={true} smooth={true}>
                {eli.title}
              </AnchorLink>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
