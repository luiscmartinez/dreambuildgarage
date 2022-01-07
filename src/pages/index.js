import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { AppointmentForm, Carousel, DropDownMenu } from "../components/antd"

import { useState } from "react"

const IndexPage = () => {
  const [finish, setFinish] = useState(false)
  return (
    <Layout>
      <Seo title="Home" />
      <Carousel/>
      {finish ? (
        <div>
          <h1>thank you for booking an appointment.</h1>
          <p>you'll be receiving a confirmation shortly</p>
        </div>
      ) : (
        <AppointmentForm setFinish={setFinish} />
      )}

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
