import React from "react"
import { Link } from "react-scroll"
import { GatsbyImage } from "gatsby-plugin-image"

export default function NavigationDesktop({ navigations, image }) {
  const renderListItems = list => {
    return list.map(eli => {
      return (
        <li className="navigation-item desktop" key={eli.id}>
          <Link to={eli.id} spy={true} smooth={true}>
            {eli.title}
          </Link>
        </li>
      )
    })
  }
  return (
    <header className="site-navigation">
      <nav className="inner-nav-desktop">
        <ul className="inner-nav-desktop-list">
          {renderListItems(navigations.slice(0, 2))}
          <Link to="topbar" spy={true} smooth={true}>
            <GatsbyImage image={image} style={{ borderRadius: "30px" }} />
          </Link>
          {renderListItems(navigations.slice(2, 4))}
        </ul>
      </nav>
    </header>
  )
}
