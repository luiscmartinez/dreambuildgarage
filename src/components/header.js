import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { DropDownMenu } from "../components/antd"

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
const Header = () => (
  <header className="header">
    <div className="headerContainer">
      <h1 className="headerTitle">
        <Link to="/" className="headerLink">
          {styleTitle()}
        </Link>
      </h1>
      <div className="hamburgerMenu">
        <DropDownMenu />
      </div>
    </div>
  </header>
)

export default Header
