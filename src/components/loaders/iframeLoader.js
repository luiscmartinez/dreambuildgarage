import React from "react"
import ContentLoader, { Facebook, Instagram } from "react-content-loader"

export const IframeLoader = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 460"
    backgroundColor="#dfe1e4"
    foregroundColor="#79919d"
    {...props}
  >
    <rect x="0" y="60" rx="2" ry="2" width="400" height="250" />
  </ContentLoader>
)
