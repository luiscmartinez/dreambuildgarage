import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { About } from "../components/about"
import { Blocks } from "../components/blocks"
import { Cta } from "../components/cta"
import { PrimaryBtns } from "../components/primaryBtns"

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Dream Build Garage"
        description="DBG's official site. Keeping you up with the latest news, tunes, & services. Book your appointment today!"
      />
      <Cta />
      <About />
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
    </Layout>
  )
}

export default IndexPage
