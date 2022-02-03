import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from "react-grid-gallery"

const IMAGES = [
  {
    src: "https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/106457106_2323330747962689_2859253279724209238_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=PKjY-W7koNEAX-rLTwu&_nc_ht=scontent-lax3-2.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT8aU0D6yaChGTMfx5CNj42KN2tpxP6FM-TaIiT0oB4gog&oe=6200A039",
    thumbnail:
      "https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/106457106_2323330747962689_2859253279724209238_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=PKjY-W7koNEAX-rLTwu&_nc_ht=scontent-lax3-2.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT8aU0D6yaChGTMfx5CNj42KN2tpxP6FM-TaIiT0oB4gog&oe=6200A039",
    caption: "For God blessed me with you, you make me feel brand new ;*",
  },
  {
    src: "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/10520401_294625454074163_1006333421_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=tPzi1KE5TLoAX8xTisU&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT-pq7qHZ1DNA8aFx7m7XYNkwbJ8ZwiqnkjHIJChOZRbww&oe=6200DC32",
    thumbnail:
      "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/10520401_294625454074163_1006333421_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=tPzi1KE5TLoAX8xTisU&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT-pq7qHZ1DNA8aFx7m7XYNkwbJ8ZwiqnkjHIJChOZRbww&oe=6200DC32",
    caption: "🇺🇸🇺🇸🇺🇸🇺🇸",
  },
]

const SecondPage = () => {
  return (
    <Layout>
      <Seo title="DBG's galley" />
      <h1>Gallery</h1>
      <Gallery images={IMAGES} />,
    </Layout>
  )
}
export default SecondPage
