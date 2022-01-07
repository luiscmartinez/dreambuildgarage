import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { AppointmentForm } from "../components/antd"

const SecondPage = () => {
  const [finish, setFinish] = useState(false)

  return (
    <Layout>
      <Seo title="book an appointment" />
      {finish ? (
        <div>
          <h1>thank you for booking an appointment.</h1>
          <p>you'll be receiving a confirmation shortly</p>
        </div>
      ) : (
        <AppointmentForm setFinish={setFinish} />
      )}
    </Layout>
  )
}
export default SecondPage
