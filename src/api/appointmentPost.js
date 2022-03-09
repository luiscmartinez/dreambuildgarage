import axios from "./index"

export default function createAppointment(fields) {
  const { email, phone, body } = fields
  return axios.post("/appointments", {
    email,
    phone,
    body,
  })
}
