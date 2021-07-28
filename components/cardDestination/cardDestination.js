import React from "react"
import { useRouter } from "next/router"

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
    <div>
      <div className="">
        <div className="">
          <img src="" className="" alt="" />
        </div>
        <div>
          <h3>{props.card.code}</h3>
          <h3>{props.card.location.cityName}</h3>
        </div>
      </div>
      <button onClick={sendData}>Start your journey!</button>
    </div>
  )
}

export default cardDestination
