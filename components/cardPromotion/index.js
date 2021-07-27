import React from 'react'
import Link from 'next/link'

import cardPromotionStyles from './cardPromotion.module.scss'

const CardPromotion = () =>{

  return(
    <div className={cardPromotionStyles.content}>
      <div className={cardPromotionStyles.titles}>
        <h1>Promotions</h1>
        <p>Are you looking for flights promotions?</p>
      </div>
        <Link href='/search'><a className={cardPromotionStyles.searchButton}>Search</a></Link>
    </div>
  )
}

export default CardPromotion

