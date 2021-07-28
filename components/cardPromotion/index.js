import React from "react"
import Link from "next/link"

import cardPromotionStyles from "./cardPromotion.module.scss"

const CardPromotion = () => {
  return (
    <div className="main">
      <div className={cardPromotionStyles.row}>
        <div className={cardPromotionStyles.col}>
          <h1 className={cardPromotionStyles.title}>
            Are you looking for flights promotions?
          </h1>
          <div className={cardPromotionStyles.search}>
            <Link href="/search">
              <a className="cardButton search">Search</a>
            </Link>
          </div>
        </div>
        <div className={cardPromotionStyles.col}>
          <img src="../assets/globe.png" alt="Home" width="40%" />
        </div>
      </div>
    </div>
  )
}

export default CardPromotion
