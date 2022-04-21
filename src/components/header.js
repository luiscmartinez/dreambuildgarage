import * as React from "react"
// import { Link } from "gatsby"
import { Link } from "react-scroll"
import HamburgerMenu from "react-hamburger-menu"
import "../css/navigation.css"

const navigations = [
  { id: "about", title: "ABOUT US" },
  { id: "services", title: "OUR SERVICES" },
  { id: "testimonials", title: "TESTIMONIALS" },
  { id: "contact", title: "CONTACT" },
]
const Header = () => {
  const [isHamburgerOpen, setHamburger] = React.useState(false)

  return (
    <header className="site-navigation">
      <div className="headerContainer">
        <h1 className="headerTitle">{"styleTitle()"}</h1>
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
      <nav>
        <ul style={{ display: isHamburgerOpen ? "block" : "none" }}>
          {navigations.map(eli => {
            return (
              <li className="navigation-item" key={eli.id}>
                <Link to={eli.id} spy={true} smooth={true}>
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

export default Header
