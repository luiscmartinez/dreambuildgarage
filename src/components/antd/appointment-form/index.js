import React from "react"
import { Button, Input, Form, DatePicker } from "antd"
const log = console.log

export const AppointmentForm = ({setFinish}) => {
  const handleOnFinish = e => {
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
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input addonBefore="email" />
        </Form.Item>
        <Form.Item
          name="datePicker"
          label="Select date"
          rules={[
            {
              type: "object",
              required: true,
              message: "Please select a date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{ marginLeft: 8 }} htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

