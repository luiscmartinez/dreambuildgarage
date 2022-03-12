import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {
  const [images, setImages] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.GATSBY_SERVER_URL}/integrations/instagram`)
      .then(res => {
        console.log("RES", res)
        return res.json()
      })
      .then(data => {
        console.log("DATA", data)
        if (data) {
          setImages(data.data)
          setPagination(data.paging)
          setLoading(false)
        }
      })
  }, [])
  if (isLoading)
    return (
      <Layout>
        <Seo title="DBG's galley" />
        <h1>Gallery</h1>
        <h2>LOADING</h2>
      </Layout>
    )
  //! return for when there is no images to display at the moment.
  if (images)
    return (
      <Layout>
        <Seo title="DBG's galley" />
        <h1>Gallery</h1>
        {images &&
          images.map(image => {
            return <img src={image.media_url} />
          })}
      </Layout>
    )
  return (
    <Layout>
      <Seo title="DBG's galley" />
      <h1>Gallery</h1>
      <h2>NOTHING TO BE SHOWING AT THE MOMENT</h2>
    </Layout>
  )
}
export default SecondPage
