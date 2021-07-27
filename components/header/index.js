import React from 'react'

import Logo from '../logo'
import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <div className={headerStyles.nav}> 
      <Logo />       
    </div>
  )
}

export default Header