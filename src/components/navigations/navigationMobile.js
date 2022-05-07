import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { GatsbyImage } from "gatsby-plugin-image"
import HamburgerMenu from "react-hamburger-menu"
import useOnClickOutside from "use-onclickoutside"
import { useFade } from "../../utils/hooks/useFade"

export default function NavigationMobile({
  setHamburger,
  navigations,
  image,
  isHamburgerOpen,
}) {
  const siteNavigationRef = React.useRef(null)
  const [isVisible, setVisible, fadeProps] = useFade()

  useOnClickOutside(siteNavigationRef, e => {
    if (isHamburgerOpen) {
      // close the navigation dropdown
      setHamburger(false)
      setVisible(false)
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
              setVisible(false)
            }
          }}
        >
          <GatsbyImage image={image} style={{ borderRadius: "50%" }} />
        </AnchorLink>
        <div className="hamburgerMenu">
          <HamburgerMenu
            isOpen={isHamburgerOpen}
            menuClicked={() => {
              setHamburger(prev => !prev)
              setVisible(prev => !prev)
            }}
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
      {isVisible && (
        <nav {...fadeProps} className="inner-nav inner-nav-open">
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
                      setVisible(false)
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
      )}
    </header>
  )
}
