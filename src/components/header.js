import * as React from "react"
import { Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import "../css/navigation.css"

function styleTitle() {
  const dream = "Dream"
  const build = "Build"
  const garage = "Garage"
  const llc = ".llc"
  const styledTitle = (
    <div>
      {dream}
      <span style={{ color: "#38bdf9" }}>{build}</span>
      {garage}
      {llc}
    </div>
  )
  return styledTitle
}
const Header = () => {
  const [isHamburgerOpen, setHamburger] = React.useState(false)

  return (
    <header className="site-navigation">
      <div className="headerContainer">
        <h1 className="headerTitle">
          <Link to="/" className="headerLink">
            {styleTitle()}
          </Link>
        </h1>
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
          {["ABOUT US", "OVER SERVICES", "TESTIMONIALS", "CONTACT"].map(eli => {
            return <li className="navigation-item">{eli}</li>
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
