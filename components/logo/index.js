import React from "react"
import Link from "next/link"

import logoStyles from "./logo.module.scss"

const Logo = () => {
  return (
    <div className={logoStyles.logo}>
      <Link href="/">
        <img src="./assets/logo.png" alt="logo" />
      </Link>
    </div>
  )
}

export default Logo
