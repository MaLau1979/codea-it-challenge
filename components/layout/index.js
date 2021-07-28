import React from "react"
import Head from "next/head"
import Header from "../header"
import Footer from "../footer"

import layoutStyles from "./layout.module.scss"

export default function Layout({ children, title = "Fly High" }) {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header className={layoutStyles.header} />
      {children}
      <Footer className={layoutStyles.footer} />
    </div>
  )
}
