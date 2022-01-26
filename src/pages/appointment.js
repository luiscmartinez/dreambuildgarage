import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { AppointmentForm } from "../components/antd"

const CallToAction = () => {
  return (
    <Layout>
      <Seo title="book an appointment w DBG" />
      <AppointmentForm />
    </Layout>
  )
}
export default CallToAction
