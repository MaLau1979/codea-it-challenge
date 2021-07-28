import React from "react"
import { useRouter } from "next/router"

import cardDestinationStyles from "./cardDestination.module.scss"

const cardDestination = props => {
  const router = useRouter()

  const sendData = event => {
    event.preventDefault()

    if (
      props.card.code !== "" &&
      (props.card.code === "MDZ" || props.card.code === "COR")
    ) {
      console.log("enviando datos...", props.origin)
      const href =
        `/flights?destination=${props.origin}-${props.card.code}`.toLowerCase()
      router.push(href)
    }
  }

  return (
    <div className={cardDestinationStyles.cardContainerColumn}>
      <div className={cardDestinationStyles.card}>
        <img src="../assets/pexels-pixabay-414171.jpg" alt="location" />
        <div className={cardDestinationStyles.container}>
          <h3 className={cardDestinationStyles.textSegment}>
            {props.card.location.cityName} ({props.card.code})
          </h3>
          <button
            className={cardDestinationStyles.cardButton}
            onClick={sendData}
          >
            Start your journey!
          </button>
        </div>
      </div>
    </div>
  )
}

export default cardDestination
