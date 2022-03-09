import axios from "axios"

export default function createAppointment(fields) {
  const { email, phone, body } = fields
  return axios.post("https://dreambuild.herokuapp.com/api/appointments", {
    email,
    phone,
    body,
  })
}
