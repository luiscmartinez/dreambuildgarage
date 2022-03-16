import * as React from "react"

import ModalCarousel from "../components/antd/carousel/modalCarousel"

const modal = ({ selectedImg, setSelectedImg }) => {
  const clearSelected = e => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null)
    }
  }
  const { media_url, media_type } = selectedImg

  if (media_type === "CAROUSEL_ALBUM") {
    return (
      <div className="backdrop" onClick={e => clearSelected(e)}>
        <ModalCarousel img={selectedImg} />
      </div>
    )
  }

  return (
    <div className="backdrop" onClick={e => clearSelected(e)}>
      <img src={media_url} className="backdrop-img" />
    </div>
  )
}

export default modal
