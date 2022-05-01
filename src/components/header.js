import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { useMedia } from "use-media"
import "../css/navigation.css"
import "../css/header.css"
import NavigationMobile from "./navigations/navigationMobile"
import NavigationDesktop from "./navigations/navigationDesktop"
import { navigations } from "../utils/navigations"

const Header = () => {
  const [isHamburgerOpen, setHamburger] = React.useState(false)
  const isLarge = useMedia({ minWidth: 960 })

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
  if (isLarge) {
    return <NavigationDesktop navigations={navigations} image={image} />
  } else {
    return (
      <NavigationMobile
        navigations={navigations}
        isHamburgerOpen={isHamburgerOpen}
        setHamburger={setHamburger}
        image={image}
      />
    )
  }
}

export default Header
