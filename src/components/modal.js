import * as React from "react"

const modal = ({ selectedImg, setSelectedImg }) => {
  const clearSelected = e => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null)
    }
  }
  const { media_url } = selectedImg

  return (
    <div className="backdrop" onClick={e => clearSelected(e)}>
      <img src={media_url} />
    </div>
  )
}

export default modal
