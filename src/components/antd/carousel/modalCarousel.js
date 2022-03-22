import React, { useEffect, useState, useRef } from "react"
import { Carousel as AntCarousel, Button } from "antd"
import "../../../css/modalCarousel.css"

export default function ModalCarousel({ img }) {
  const [isLoading, setLoading] = useState(false)
  const [carouselImages, setCarouselImages] = useState(null)
  const carouselRef = useRef(null)
  const mediaId = img.id
  useEffect(() => {
    setLoading(true)
    let url = `https://dreambuild.herokuapp.com/api/instagram`
    if (process.env.NODE_ENV === "development") {
      url = process.env.NEXTJS_URL + "/instagram"
    }
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
  }, [mediaId])
  const btns = () => (
    <div>
      <Button
        onClick={() => {
          carouselRef.current.next()
        }}
      >
        goto next
      </Button>
    </div>
  )
  if (isLoading) return <div>STILL LOADING </div>
  return (
    <div className="carouselContainer">
      <AntCarousel ref={carouselRef}>
        {carouselImages &&
          carouselImages.map((image, i) => {
            const { media_type } = image
            if (media_type === "VIDEO") {
              return (
                <div key={image.id + i} className="media-wrapper">
                  <video controls className="media">
                    <track></track>
                    <source src={image.media_url} />
                  </video>
                  {btns()}
                </div>
              )
            }
            return (
              <div key={image.id + i} className="media-wrapper">
                <img
                  src={image.media_url}
                  alt="from DBG's Instagram account"
                  className="media"
                />
              </div>
            )
          })}
      </AntCarousel>
    </div>
  )
}
