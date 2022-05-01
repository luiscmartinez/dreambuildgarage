import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { GatsbyImage } from "gatsby-plugin-image"
import HamburgerMenu from "react-hamburger-menu"
import useOnClickOutside from "use-onclickoutside"

export default function NavigationMobile({
  setHamburger,
  navigations,
  image,
  isHamburgerOpen,
}) {
  const siteNavigationRef = React.useRef(null)

  useOnClickOutside(siteNavigationRef, e => {
    if (isHamburgerOpen) {
      // close the navigation dropdown
      setHamburger(false)
    }
  })

  return (
    <header className="site-navigation" ref={siteNavigationRef}>
      <div className="headerContainer">
        <h1 className="headerTitle"></h1>
        <AnchorLink
          to="/"
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
        </AnchorLink>
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
      <nav
        className={
          isHamburgerOpen
            ? "inner-nav inner-nav-open"
            : "inner-nav inner-nav-close"
        }
      >
        <ul className="inner-nav-mobile-list">
          {navigations.map(eli => {
            return (
              <li
                className="navigation-item"
                key={eli.id}
                onClick={() => {
                  if (isHamburgerOpen) {
                    // close the navigation dropdown
                    setHamburger(false)
                  }
                }}
              >
                <AnchorLink to={eli.id} spy={true} smooth={true}>
                  {eli.title}
                </AnchorLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
