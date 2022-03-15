import * as React from "react"

const modal = ({ selectedImg, setSelectedImg }) => {
  const clearSelected = e => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null)
    }
  }
  return (
    <div className="backdrop" onClick={e => clearSelected(e)}>
      <img src={selectedImg} />
    </div>
  )
}

export default modal
