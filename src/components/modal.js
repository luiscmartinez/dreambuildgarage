import * as React from "react"

import ModalCarousel from "../components/antd/carousel/modalCarousel"

const modal = ({ selectedImg, setSelectedImg }) => {
  const clearSelected = e => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null)
    }
  }

  const handleModalMediaDisplay = selectedImg => {
    const { media_url, media_type } = selectedImg
    if (media_type === "CAROUSEL_ALBUM") {
      return <ModalCarousel img={selectedImg} />
    } else if (media_type === "IMAGE") {
      return (
        <img
          src={media_url}
          alt="from DGB's Instagram account"
          className="backdrop-media"
        />
      )
    } else {
      return (
        <video controls className="backdrop-media">
          <track></track>
          <source src={media_url} />
        </video>
      )
    }
  }

  return (
    <div className="backdrop" onClick={e => clearSelected(e)}>
      {handleModalMediaDisplay(selectedImg)}
    </div>
  )
}

export default modal
