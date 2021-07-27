import React from "react"
import Head from "next/head"
import Header from "../header"
import Footer from "../footer"

import layoutStyles from './layout.module.scss'

export default function Layout({
  children,
  title = "Fly High",
}) {

  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header className={layoutStyles.header}/>
        {children}
      <Footer className={layoutStyles.footer} />
    </div>

  )
}
