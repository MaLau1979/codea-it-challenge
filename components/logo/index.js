import React from 'react'
import Link from 'next/link'

import logoStyles from './logo.module.scss'

const Logo = () => {
  return (
    <div className={logoStyles.logo}>
      <h1>Flight High</h1>
      <img src="assets/globe.png" alt="logo"></img>
    </div>
  )
}

export default Logo