import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { GatsbyImage } from "gatsby-plugin-image"

export default function NavigationDesktop({ navigations, image }) {
  const renderListItems = list => {
    return list.map(eli => {
      return (
        <li className="navigation-item desktop" key={eli.id}>
          <AnchorLink to={eli.id} spy={true} smooth={true}>
            {eli.title}
          </AnchorLink>
        </li>
      )
    })
  }
  return (
    <header className="site-navigation">
      <nav className="inner-nav-desktop">
        <ul className="inner-nav-desktop-list">
          {renderListItems(navigations.slice(0, 2))}
          <AnchorLink to="/" spy={true} smooth={true}>
            <GatsbyImage image={image} style={{ borderRadius: "30px" }} />
          </AnchorLink>
          {renderListItems(navigations.slice(2, 4))}
        </ul>
      </nav>
    </header>
  )
}
