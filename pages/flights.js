import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import CardFlight from "../components/cardFlight"
import flightStyles from "./flights.module.scss"

const Flights = () => {
  const [flight, setFlight] = useState()

  const router = useRouter()
  let url = ""
  const fetchApi = async () => {
    url = `http://localhost:8000/${router.query.destination}`
    const response = await fetch(url)
    const flights = await response.json()
    setFlight(flights)
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="main">
      <div className={flightStyles.content}>
        <div className={flightStyles.sidebarContainer}>
          <Link href="/search">
            <a className="cardButton">Search Another Destination</a>
          </Link>
        </div>
        <div className={flightStyles.cardContainer}>
          <h2>
            Choose your outbound flight to {router.query.city.toUpperCase()}
          </h2>
          {typeof flight != "undefined" && flight.flights
            ? flight.flights.map((element, index) =>
                element.destination !=
                router.query.destination.toUpperCase().split("-")[0] ? (
                  <CardFlight
                    key={index}
                    className={flightStyles.card}
                    data={element}
                    cityGo={router.query.origin}
                    cityBack={router.query.city}
                    legend="Depart"
                  />
                ) : (
                  ""
                )
              )
            : ""}
          <h2>
            Choose your inbound flight to {router.query.origin.toUpperCase()}
          </h2>
          {typeof flight != "undefined" && flight.flights
            ? flight.flights.map((element, index) =>
                element.destination !=
                router.query.destination.toUpperCase().split("-")[1] ? (
                  <CardFlight
                    key={index}
                    className={flightStyles.card}
                    data={element}
                    cityGo={router.query.origin}
                    cityBack={router.query.city}
                    legend="Return"
                  />
                ) : (
                  ""
                )
              )
            : ""}
        </div>
      </div>
    </div>
  )
}

export default Flights
