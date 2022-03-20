import React, { useEffect, useState, useRef } from "react"
import { Carousel as AntCarousel, Button } from "antd"
import "../../../css/modalCarousel.css"

export default function ModalCarousel({ img }) {
  const [isLoading, setLoading] = useState(false)
  const [carouselImages, setCarouselImages] = useState(null)
  const carouselRef = useRef(null)
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
  }, [carouselImages])
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
  if (isLoading) return <div key={img.id + "passdown"}>STILL LOADING </div>
  return (
    <div className="carouselContainer" key={img.id + "passdown"}>
      <AntCarousel ref={carouselRef}>
        {carouselImages &&
          carouselImages.map(image => {
            const { media_type } = image
            if (media_type === "VIDEO") {
              return (
                <div key={image.id}>
                  <video controls className="carouselMedia">
                    <track></track>
                    <source src={image.media_url} />
                  </video>
                  {btns()}
                </div>
              )
            }
            return (
              <div key={image.id}>
                <img
                  src={image.media_url}
                  alt="from DBG's Instagram account"
                  className="carouselMedia"
                />
              </div>
            )
          })}
      </AntCarousel>
    </div>
  )
}
