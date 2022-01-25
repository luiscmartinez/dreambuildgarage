import axios from "axios"

//* Configures axios for the backend
export default axios.create({
  baseURL: process.env.GATSBY_SERVER_URL,
})
