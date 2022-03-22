import React from "react"
import { Modal as AntModal, Button } from "antd"

import ModalCarousel from "../carousel/modalCarousel"

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleCancel = () => {
    setSelectedImg(null)
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
    <>
      <AntModal visible={selectedImg} onCancel={handleCancel}>
        {handleModalMediaDisplay(selectedImg)}
      </AntModal>
    </>
  )
}

export default Modal
