import React, { useState } from "react"
import { Button, Input, Form } from "antd"
import { ImInstagram } from "@react-icons/all-files/im/ImInstagram"
import createAppointment from "../../../api/appointmentPost"
import { InstagramBtn } from "../../buttons"
const log = console.log

export const AppointmentForm = () => {
  const [finish, setFinish] = useState(false)
  const [phone, setPhone] = useState("")
  const handleOnFinish = e => {
    createAppointment(e)
      .then(res => {
        log("AXIOS RES", res.data)
        setFinish(true)
      })
      .catch(err => {
        log("INSIDE CATCH")
        log(err.response)
        const emailError = err.response.data["email"]
      })
  }
  const onFinishFailed = e => {
    const { email } = e.values
    log("on finish failed", e, email)
  }

  return (
    <div>
      {finish ? (
        <div>
          <h1>thank you for booking an appointment.</h1>
          <p>you'll be receiving a confirmation shortly</p>
        </div>
      ) : (
        <div>
          <h2>To Book an Appointment</h2>
          <div>
            <h4 className="appointment_insta_btn">
              MESSAGE US ON <InstagramBtn /> <ImInstagram />
            </h4>
            <h3 style={{ textAlign: "center" }}>OR</h3>
          </div>
          <span>submit this form below</span>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={handleOnFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="appointment_form"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "This is not a valid E-mail!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              rules={[{ required: false }]}
              label="Phone number"
              className="phone-input"
            >
              <Input
                style={{ width: "100%" }}
                placeholder="323-999-9999"
                className="phone-input"
                value={phone}
                onChange={e => {
                  const v = e.target.value
                  if (!Number(v)) {
                    // not allowing the value to be another but a number
                    return setPhone(v.substring(0, v.length - 1))
                  }
                  return setPhone(v)
                }}
              />
            </Form.Item>

            <Form.Item
              name="body"
              label="How can we help you?"
              rules={[
                {
                  required: true,
                  message: "Tell us why are you reaching us today?",
                },
              ]}
            >
              <Input.TextArea placeholder="MESSAGE: I was wondering about availability and rates. I would like to visit on Tuesday. I need help with the following:" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  )
}
