import React, { useEffect, useState } from "react"
import { Carousel as AntCarousel } from "antd"
import "../../../css/modalCarousel.css"

export default function ModalCarousel({ img }) {
  const [isLoading, setLoading] = useState(false)
  const [carouselImages, setCarouselImages] = useState(null)
  useEffect(() => {
    setLoading(true)
    let url = `https://dreambuild.herokuapp.com/api/instagram`
    if (process.env.NODE_ENV === "development") {
      url = process.env.NEXTJS_URL + "/instagram"
    }
    const mediaId = img.id
    fetch(`${url}/${mediaId}`)
      .then(res => {
        console.log("RES", res)
        return res.json()
      })
      .then(({ data }) => {
        setCarouselImages(data)
        setLoading(false)
        console.log("DATA", data)
      })
  }, [img.id])
  if (isLoading) return <div>STILL LOADING </div>
  return (
    <div className="carouselContainer">
      <AntCarousel>
        {carouselImages &&
          carouselImages.map(image => {
            if (image.media_type === "VIDEO") {
              return (
                <video key={image.id} controls className="carouselMedia">
                  <track></track>
                  <source src={image.media_url} />
                </video>
              )
            }
            return (
              <img
                src={image.media_url}
                alt="from DBG's Instagram account"
                key={image.id}
                className="carouselMedia"
              />
            )
          })}
      </AntCarousel>
    </div>
  )
}
