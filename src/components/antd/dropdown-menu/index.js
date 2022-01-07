import React from "react"
import { Menu, Dropdown } from "antd"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu"

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a>book appointment</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>about us</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">gallery</Menu.Item>
    <Menu.Item key="3">youtube</Menu.Item>
    <Menu.Item key="4">instagram</Menu.Item>

  </Menu>
)

export const DropDownMenu = () => {
  const handleClick = e => {
    console.log(e)
  }
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a onClick={e => e.preventDefault()}>
        <GiHamburgerMenu />
      </a>
    </Dropdown>
  )
}
