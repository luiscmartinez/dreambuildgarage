import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { AppointmentForm } from "../components/antd"

const ContactUsPage = () => {
  return (
    <Layout>
      <Seo title="Contact DreamBuildGarage" />
      <h1>Contact Us</h1>
      <AppointmentForm />
    </Layout>
  )
}
export default ContactUsPage
