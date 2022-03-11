import axios from "./index"

export default function createAppointment(fields) {
  const { email, phone, body } = fields
  let url = "https://dreambuild.herokuapp.com/api/appointments"
  if (process.env.NODE_ENV === "development") {
    url = process.env.NEXTJS_URL + "/appointments"
  }
  return axios.post(url, {
    email,
    phone,
    body,
  })
}
