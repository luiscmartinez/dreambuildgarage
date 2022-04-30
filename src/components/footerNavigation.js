import React from "react"
import { Link } from "react-scroll"

const navigations = [
  { id: "about", title: "ABOUT US" },
  { id: "services", title: "OUR SERVICES" },
  { id: "testimonials", title: "TESTIMONIALS" },
  { id: "contact", title: "CONTACT" },
]

export const FooterNavigation = () => {
  return (
    <footer className="site-footer footer-navigation">
      <Link to="/">
        {" "}
        © {new Date().getFullYear()},{` `}Dream Build Auto Service
      </Link>
      <ul>
        {navigations.map(eli => {
          return (
            <li key={eli.id}>
              <Link
                to={eli.id}
                spy={true}
                smooth={true}
                onClick={() => console.log("EVALUATE")} //TODO: look at issue#1
              >
                {eli.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
