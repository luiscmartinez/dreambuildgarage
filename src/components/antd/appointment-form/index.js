import React from "react"
import { Button, Input, Form, DatePicker } from "antd"
const log = console.log

export const AppointmentForm = ({ setFinish }) => {
  const handleOnFinish = e => {
    const { email, phone, body } = e
    log(email, phone, body)
    setFinish(true)
    log(e)
  }
  const onFinishFailed = e => {
    const { email, datePicker } = e.values
    log("on finish failed", e, email, datePicker)
  }
  return (
    <div>
      <h2>Book appointment</h2>
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
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[{ required: false }]}
          label="Phone number"
        >
          <Input style={{ width: "100%" }} placeholder="323-999-9999" />
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
          <Input.TextArea placeholder="MESSAGE: I was wondering about availability and rates. I need help with the following:" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
