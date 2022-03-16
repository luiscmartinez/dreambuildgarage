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
  }, [])
  if (isLoading) return <div>STILL LOADING </div>
  return (
    <AntCarousel autoplay className="backdrop-modal">
      {carouselImages &&
        carouselImages.map(image => {
          return <img src={image.media_url} key={image.id} />
        })}
    </AntCarousel>
  )
}
