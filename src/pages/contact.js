import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { AppointmentForm } from "../components/antd"

const ContactUsPage = () => {
  return (
    <Layout>
      <Seo title="Contact DreamBuildGarage" />
      <h1>Contact Us</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <iframe
          width="100%"
          height="250"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCauUlyv92zgIER31WX5LaoBgZvo_rNSWg&q=7542+Warner+Ave,Huntington+Beach,CA"
          allowfullscreen
        />
        <h2>999-999-9999</h2>
        <AppointmentForm />
      </div>
    </Layout>
  )
}
export default ContactUsPage
