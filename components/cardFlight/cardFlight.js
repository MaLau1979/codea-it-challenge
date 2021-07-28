import React from "react"
import moment from "moment"

import cardFlightStyles from "./cardFlight.module.scss"

const CardFlight = props => {
  return (
    <div className={cardFlightStyles.container}>
      <div className={cardFlightStyles.cluster}>
        <div className={cardFlightStyles.segment}>
          <div className={cardFlightStyles.segmentTitle}>
            <span className={cardFlightStyles.title}>IDA</span>
            <span>{moment(props.data.departureDate).format("LL")}</span>|
            <span>Location City Name</span>
          </div>
        </div>
        <div className={cardFlightStyles.cardImage}>
          <img src="../assets/dummy-50x50.png" />
        </div>
      </div>
      <div className={cardFlightStyles.pricebox}>
        <div>
          {props.data.fares.map((e, index) => (
            <p key={index}>{e.prices.afterTax} USD</p>
          ))}
        </div>
      </div>
      <div>
        <p>{moment(props.data.departureDate).format("LT")}</p>
        <p>{props.data.origin}</p>
      </div>
      <div>
        <p>Duration</p>
        <p>{moment(props.data.arrivalDate).diff(props.data.departureDate)}</p>
      </div>
      <div>
        <p>{moment(props.data.arrivalDate).format("LT")}</p>
        <p>{props.data.destination}</p>
      </div>
    </div>
  )
}

export default CardFlight

/* <li>A dummy image</li>
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
          </ul>*/
