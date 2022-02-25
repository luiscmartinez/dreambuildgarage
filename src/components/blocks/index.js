import React from "react"
import { BlockCard } from "./blockCard"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

export const Blocks = () => {
  const imageData = useStaticQuery(graphql`
    query GalleryImgs {
      allFile(filter: { sourceInstanceName: { eq: "galleryImages" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  `)
  const blockImages = imageData.allFile.edges.map(edge => getImage(edge.node))

  const findImage = str => {
    return blockImages.filter(obj => {
      const src = obj.images.fallback.src
      return src.includes(str)
    })[0]
  }
  return (
    <div>
      <BlockCard
        title="Custom Oil Changes and Maintenance"
        description="Engine oil, oil filters, spark plugs, cabin filters are constant consumables that will reach their end-of-life after certain usage. For a healthy running engine make sure to keep up your maintenance intervals. Let us know what service you require."
        // Keep track of your maintenance records by signing up.
        img={{
          imgUrl: findImage("oilChange.jpg"),
          alt: "tech performing an oil change, pour new oil into engine",
        }}
      />
      <BlockCard
        title="Full Tuning Services Available"
        description="Want to squeeze more power out of your car but not sure where to start? Let us guide you on your build, we'll make sure to get you exactly what you need."
        img={{
          imgUrl: findImage(
            "turner_service_bmw_tuning_ecu_tune_dyno_tune_m3_m4_m5_m6.jpg"
          ),
          alt: "tech performing an oil change, pour new oil into engine",
        }}
      />
      <BlockCard
        title="Installing Aftermarket Kits"
        description="We offer professional parts installation, as well as engine/transmission tuning to get the most out those aftermarket parts"
        img={{
          imgUrl: findImage("aftermarket_ex_kit-1500x890"),
          alt: "tech performing an oil change, pour new oil into engine",
        }}
      />
    </div>
  )
}
