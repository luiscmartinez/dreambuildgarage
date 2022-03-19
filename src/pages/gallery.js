import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Modal from "../components/modal"

import "../css/gallery.css"

const Gallery = () => {
  const [images, setImages] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [pagination, setPagination] = useState(null)
  const [selectedImg, setSelectedImg] = useState(null)

  useEffect(() => {
    let url = `https://dreambuild.herokuapp.com/api/integrations`
    if (process.env.NODE_ENV === "development") {
      url = process.env.NEXTJS_URL + "/integrations"
    }
    setLoading(true)
    fetch(`${url}/instagram`)
      .then(res => {
        console.log("RES", res)
        return res.json()
      })
      .then(data => {
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
  if (images)
    return (
      <Layout>
        <Seo title="DBG's galley" />
        <h1>Gallery</h1>
        <div className="img-grid">
          {images &&
            images.map(image => {
              return (
                <div
                  className="img-wrap"
                  onClick={() => setSelectedImg(image)}
                  key={image.id}
                >
                  <img
                    src={image?.thumbnail_url || image.media_url}
                    alt="img preview"
                  />
                </div>
              )
            })}
        </div>
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
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
export default Gallery
