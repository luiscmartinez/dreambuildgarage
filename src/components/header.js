import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { DropDownMenu } from "../components/antd"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="headerContainer">
      <h1 className="headerTitle">
        <Link to="/" className="headerLink">
          {siteTitle}
        </Link>
      </h1>
      <div className="hamburgerMenu">
        <DropDownMenu />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
