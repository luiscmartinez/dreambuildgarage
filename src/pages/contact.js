import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { AppointmentForm } from "../components/antd"
import { GoogleMap } from "../components/googleMap"

const ContactUsPage = () => {
  return (
    <Layout>
      <Seo title="Contact DreamBuildGarage" />
      <h1>Contact Us</h1>
      <GoogleMap />
      <AppointmentForm />
    </Layout>
  )
}
export default ContactUsPage
