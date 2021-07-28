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
    console.log(flights)
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
                element.destination != "EPA" ? (
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
                element.destination != "COR" ? (
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

/*<main>
      <article>
        <h2>Choose your outbound flight to Mendoza</h2>
        <section>
          <p>
            Here it should be a flight list with all available outbound flights
            for the selected trip. Each list item should have:
          </p>
          <ul>
            <li>A dummy image</li>
            <li>Should be selectable by clicking the whole card</li>
            <li>Display the airport code</li>
            <li>Display the location city name</li>
            <li>Display the flight times and duration</li>
            <li>Display the price for the leg</li>
          </ul>
        </section>
      </article>
      <article>
        <h2>Choose your inbound flight to Buenos Aires</h2>
        <section>
          <p>
            Here it should be a flight list with all available inbound flights
            for the selected trip.
          </p>
          <ul>
            <li>A dummy image</li>
            <li>Should be selectable by clicking the whole card</li>
            <li>Display the airport code</li>
            <li>Display the location city name</li>
            <li>Display the flight times and duration</li>
            <li>Display the price for the leg</li>
          </ul>
        </section>
      </article>
    </main>*/
