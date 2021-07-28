import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import CardFlight from "../components/cardFlight/cardFlight"
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

  function minutesToString(minutes) {
    var hour = Math.floor(minutes / 60)
    hour = hour < 10 ? "0" + hour : hour
    var minute = minutes % 60
    minute = minute < 10 ? "0" + minute : minute
    return hour + ":" + minute
  }

  return (
    <div className={flightStyles.content}>
      <div className={flightStyles.sidebarContainer}></div>
      <div className={flightStyles.cardContainer}>
        <h2>Choose your outbound flight to Mendoza</h2>
        {typeof flight != "undefined" && flight.flights
          ? flight.flights.map((element, index) => (
              <CardFlight className={flightStyles.card} data={element} />
            ))
          : ""}
        <h2>Choose your inbound flight to Buenos Aires</h2>
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
