import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { About } from "../components/about"
import { Blocks } from "../components/blocks"
import { Cta } from "../components/cta"
import { AboutFooter } from "../components/aboutFooter"
import { PrimaryBtns } from "../components/primaryBtns"
import { Services } from "../components/services"
import { Testimonials } from "../components/testimonials"

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Dream Build Garage"
        description="DBG's official site. Keeping you up with the latest news, tunes, & services. Book your appointment today!"
      />
      <Cta />
      <About />
      <AboutFooter />
      <Services />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage
