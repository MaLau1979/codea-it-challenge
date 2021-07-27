import React from 'react'

import CardPromotion from '../../cardPromotion'
import homeStyles from './home.module.scss'


const HomePage = () => {
return (
  <div className={homeStyles.wrapper}>
    <CardPromotion />
  </div>
)
}

export default HomePage