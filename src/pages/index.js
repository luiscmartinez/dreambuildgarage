import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "antd"
import { Carousel } from "../components/antd"
import { Services } from "../components/services"
import { About } from "../components/about"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Dream Build Garage" />
      <Carousel />
      <Link to="/page-2/">
        <Button type="primary">Get quote</Button>
      </Link>
      <About />
      <Services />
    </Layout>
  )
}

export default IndexPage
