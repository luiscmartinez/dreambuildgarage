import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "react-scroll"
import HamburgerMenu from "react-hamburger-menu"
import "../css/navigation.css"
import "../css/header.css"

const navigations = [
  { id: "about", title: "ABOUT US" },
  { id: "services", title: "OUR SERVICES" },
  { id: "testimonials", title: "TESTIMONIALS" },
  { id: "contact", title: "CONTACT" },
]
const Header = () => {
  const [isHamburgerOpen, setHamburger] = React.useState(false)

  const imageData = useStaticQuery(graphql`
    query LandingCarouselQuerys {
      allFile(filter: { name: { eq: "dbg_logo-384x384" } }) {
        edges {
          node {
            id
            childrenImageSharp {
              gatsbyImageData(width: 60)
            }
          }
        }
      }
    }
  `)

  const image = imageData.allFile.edges.map(edge => {
    return getImage(edge.node.childrenImageSharp[0])
  })[0]

  return (
    <header className="site-navigation">
      <div className="headerContainer">
        <h1 className="headerTitle"></h1>
        <GatsbyImage image={image} style={{ borderRadius: "30px" }} />
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
        <ul className="mainMenu">
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

export default Header
