import React, { useState } from "react"
import { IframeLoader } from "../loaders"

export const GoogleMap = () => {
  const [isLoading, setLoading] = useState(true)
  const handleLoad = () => {
    setLoading(false)
  }
  return (
    <div>
      {isLoading ? (
        <div>
          <IframeLoader />
        </div>
      ) : null}
      <iframe
        width="100%"
        height="250"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCauUlyv92zgIER31WX5LaoBgZvo_rNSWg&q=7542+Warner+Ave,Huntington+Beach,CA"
        allowfullscreen
        onLoad={handleLoad}
      />
    </div>
  )
}
