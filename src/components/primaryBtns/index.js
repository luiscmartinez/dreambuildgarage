import React from "react"
import { Link } from "gatsby"
import { Button } from "antd"

export const PrimaryBtns = () => {
  return (
    <div className="primaryBtnsContainer">
      <Link to="/appointment/">
        <Button type="primary">Get quote</Button>
      </Link>
      <Link to="/appointment/">
        <Button type="primary">Appointment</Button>
      </Link>
      <Link to="/contact/">
        <Button type="primary">Visit Us</Button>
      </Link>
    </div>
  )
}
