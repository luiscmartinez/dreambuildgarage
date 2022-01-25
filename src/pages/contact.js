import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { AppointmentForm } from "../components/antd"
import { IframeLoader } from "../components/loaders"

const ContactUsPage = () => {
  const [isLoading, setLoading] = React.useState(true)
  const handleLoad = () => {
    setLoading(false)
  }
  return (
    <Layout>
      <Seo title="Contact DreamBuildGarage" />
      <h1>Contact Us</h1>
      <div>
        {isLoading ? (
          <div>
            <IframeLoader />
          </div>
        ) : null}
        <iframe
          width="100%"
          height="250"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCauUlyv92zgIER31WX5LaoBgZvo_rNSWg&q=7542+Warner+Ave,Huntington+Beach,CA"
          allowfullscreen
          onLoad={handleLoad}
        />
        <AppointmentForm />
      </div>
    </Layout>
  )
}
export default ContactUsPage
