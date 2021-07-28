import React from "react"
import moment from "moment"

import cardFlightStyles from "./cardFlight.module.scss"

const CardFlight = props => {
  let difference = moment(props.data.arrivalDate).diff(
    props.data.departureDate,
    "minutes"
  )

  function minutesToString(minutes) {
    let hour = Math.floor(minutes / 60)
    hour = hour < 10 ? "0" + hour : hour
    let minute = minutes % 60
    minute = minute < 10 ? "0" + minute : minute
    let result = hour + ":" + minute

    return result
  }

  return (
    <div className={cardFlightStyles.container}>
      <div className={cardFlightStyles.cluster}>
        <div className={cardFlightStyles.segment}>
          <div className={cardFlightStyles.segmentTitle}>
            <span className={cardFlightStyles.title}>{props.legend}</span>
            <span className={cardFlightStyles.date}>
              {moment(props.data.departureDate).format("LL")}
            </span>
            |<span className={cardFlightStyles.location}>{props.cityGo}</span>
          </div>
        </div>
        <div className={cardFlightStyles.content}>
          <div className={cardFlightStyles.cardImageColumn}>
            <img src="../assets/pexels-pixabay-414171.jpg" alt="flight" />
          </div>
          <div className={cardFlightStyles.choiceDetail}>
            <div className={cardFlightStyles.choiceDestinationDetail}>
              <div className={cardFlightStyles.choiceDetailHour}>
                {moment(props.data.departureDate).format("LT")}
              </div>
              <div className={cardFlightStyles.choiceDetailAirport}>
                {props.data.origin}
              </div>
            </div>
            <div className={cardFlightStyles.choiceDuration}>
              <div className={cardFlightStyles.choiceDurationText}>
                <span>Duration {minutesToString(difference)}</span>
              </div>
            </div>
            <div className={cardFlightStyles.choiceDestinationDetail}>
              <div className={cardFlightStyles.choiceDetailHour}>
                {moment(props.data.arrivalDate).format("LT")}
              </div>
              <div className={cardFlightStyles.choiceDetailAirport}>
                {props.data.destination}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cardFlightStyles.pricebox}>
        <div className={cardFlightStyles.priceItem}>
          {props.data.fares.map((e, index) => (
            <span key={index}>{e.prices.afterTax} USD</span>
          ))}
        </div>
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
