import React from "react"
import Link from "next/link"

import logoStyles from "./logo.module.scss"

const Logo = () => {
  return (
    <div className={logoStyles.logo}>
      <img src="./assets/logo.png" alt="logo"></img>
    </div>
  )
}

export default Logo
