import React from "react"
import { Link } from "react-scroll"
import { GatsbyImage } from "gatsby-plugin-image"
import HamburgerMenu from "react-hamburger-menu"

export default function NavigationMobile({
  setHamburger,
  navigations,
  image,
  isHamburgerOpen,
}) {
  return (
    <header className="site-navigation">
      <div className="headerContainer">
        <h1 className="headerTitle"></h1>
        <Link
          to="topbar"
          spy={true}
          smooth={true}
          onClick={() => {
            if (isHamburgerOpen) {
              // close the navigation dropdown
              setHamburger(false)
            }
          }}
        >
          <GatsbyImage image={image} style={{ borderRadius: "30px" }} />
        </Link>
        <div className="hamburgerMenu">
          <HamburgerMenu
            isOpen={isHamburgerOpen}
            menuClicked={() => setHamburger(prev => !prev)}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </div>
      <nav className={isHamburgerOpen ? "inner-nav" : "inner-nav-close"}>
        <ul className="inner-nav-mobile-list">
          {navigations.map(eli => {
            return (
              <li className="navigation-item" key={eli.id}>
                <Link
                  to={eli.id}
                  spy={true}
                  smooth={true}
                  onClick={() => setHamburger(prev => !prev)}
                >
                  {eli.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
