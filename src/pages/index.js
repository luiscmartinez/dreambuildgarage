import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Carousel } from "../components/antd"
import { Blocks } from "../components/blocks"
import { About } from "../components/about"
import { PrimaryBtns } from "../components/primaryBtns"

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Dream Build Garage"
        description="DBG's official site. Keeping you up with the latest news, tunes, & services. Book your appointment today!"
      />
      <Carousel />
      <PrimaryBtns />
      <h3
        style={{
          textAlign: "center",
          fontWeight: "500",
          fontFamily: "monospace",
        }}
      >
        5 STAR QUALITY FOR ALL YOUR PERFORMANCE AND UPGRADE NEEDS
      </h3>
      <Blocks />
      <About />
    </Layout>
  )
}

export default IndexPage
