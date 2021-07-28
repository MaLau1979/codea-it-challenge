import React, { useState, useEffect } from "react"
import CardDestination from "../components/cardDestination"

import searchStyles from "./search.module.scss"

const Search = () => {
  const [origin, setOrigin] = useState()
  const [destination, setDestination] = useState()

  const fetchApi = async () => {
    let url = "http://localhost:8000/db"

    const response = await fetch(url)
    const routes = await response.json()
    setOrigin(routes)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const handleSelectChange = () => {
    const selected = document.getElementById("primarySelect").value
    //console.log("Selected", selected)
    setDestination(selected)
    typeof origin != "undefined"
      ? origin.db.routes.map(element => {
          if (element.code === selected) {
            setDestination(element)
          }
        })
      : ""
  }

  return (
    <div className="main">
      <h2 className={searchStyles.title}>Select your Origin Airport</h2>
      <div className={searchStyles.select}>
        <select onChange={handleSelectChange} id="primarySelect">
          <option>Select airport</option>
          {typeof origin != "undefined"
            ? origin.db.routes.map((element, index) => (
                <option value={element.code} key={index}>
                  {element.description} ({element.code})
                </option>
              ))
            : ""}
        </select>
      </div>
      <div className={searchStyles.cardContainerRow}>
        {typeof destination != "undefined" && destination.destinations
          ? destination.destinations.map((element, index) => (
              <CardDestination
                className={searchStyles.cardDestination}
                card={element}
                key={index}
                origin={destination.code}
              />
            ))
          : ""}
      </div>
    </div>
  )
}

export default Search
