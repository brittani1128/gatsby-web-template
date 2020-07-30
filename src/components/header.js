import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"
import style from "../styles/layout.module.css"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <Navigation />
    <h2>{siteTitle}</h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
