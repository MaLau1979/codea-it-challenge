import React from 'react'

import Logo from '../logo'
import footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyles.nav}> 
     <Logo className={footerStyles.logo}/>
     <span>Copyright © 2021 FlightHigh All rights reserved.</span>
    </div>
  )
}

export default Footer