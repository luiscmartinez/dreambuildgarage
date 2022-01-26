import React from "react"
import { Menu, Dropdown } from "antd"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu"
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { GrGallery } from "@react-icons/all-files/gr/GrGallery"
import { FaTools } from "@react-icons/all-files/fa/FaTools"
import { AiFillCar } from "@react-icons/all-files/ai/AiFillCar"
import { GiHomeGarage } from "@react-icons/all-files/gi/GiHomeGarage"
import { SettingOutlined } from "@ant-design/icons"
import { Link } from "gatsby"
import { InstagramBtn } from "../../buttons"

const { SubMenu } = Menu

const menu = (
  <Menu>
    <Menu.Item key="0" icon={<GiHomeGarage />}>
      <Link to="/">home</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1" icon={<FaTools />}>
      <Link to="/appointment/">book appointment</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2" icon={<AiFillCar />}>
      <Link to="/contact">contact us</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" icon={<GrGallery />}>
      <Link to="/gallery/">gallery(coming soon)</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4" icon={<AiFillYoutube />}>
      youtube(coming soon)
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5" icon={<AiFillInstagram />}>
      <InstagramBtn />
    </Menu.Item>
    <Menu.Divider />
    <SubMenu key="sub1" icon={<SettingOutlined />} title="Services">
      <Menu.Item key="5">Oil change</Menu.Item>
      <Menu.Item key="6">Brake & rotors</Menu.Item>
      <Menu.Item key="7">Turbo kits/ turbo swaps/ upgraded turbos</Menu.Item>
      <Menu.Item key="8">
        downpipes/chargepipes / cold air intake install
      </Menu.Item>
      <Menu.Item key="9">Turbo kits/ turbo swaps/ upgraded turbos</Menu.Item>
    </SubMenu>
  </Menu>
)

export const DropDownMenu = () => {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a onClick={e => e.preventDefault()}>
        <GiHamburgerMenu />
      </a>
    </Dropdown>
  )
}
