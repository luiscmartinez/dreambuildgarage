import React from "react"
import { BlockCard } from "./blockCard"

export const Blocks = () => {
  return (
    <div>
      <BlockCard
        title="Custom Oil Changes and Maintenance"
        description="Engine oil, oil filters, spark plugs, cabin filters are constant consumables that will reach their end-of-life after certain usage. For a healthy running engine make sure to keep up your maintenance intervals. Let us know what service you require."
        // Keep track of your maintenance records by signing up.
        img={{
          imgUrl:
            "https://di-uploads-pod16.dealerinspire.com/landrovertampa/uploads/2018/08/Oil-Change.jpg",
          alt: "tech performing an oil change, pour new oil into engine",
        }}
      />
      <BlockCard
        title="Full Tuning Services Available"
        description="Want to squeeze more power out of your car but not sure where to start? Let us guide you on your build, we'll make sure to get you exactly what you need."
        img={{
          imgUrl:
            "https://turnerservice.com/wp-content/uploads/2019/04/turner_service_bmw_tuning_ecu_tune_dyno_tune_m3_m4_m5_m6.jpg",
          alt: "tech performing an oil change, pour new oil into engine",
        }}
      />
      <BlockCard
        title="Installing Aftermarket Kits"
        description="We offer professional parts installation, as well as engine/transmission tuning to get the most out those aftermarket parts"
        img={{
          imgUrl:
            "https://jfautomotive.co.uk/wp-content/uploads/2019/10/UnderExhaustMilltek-1500x890.jpg",
          alt: "tech performing an oil change, pour new oil into engine",
        }}
      />
    </div>
  )
}
