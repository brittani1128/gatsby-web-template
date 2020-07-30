import React, { Component } from "react"
import { Link } from "gatsby"

import style from "../styles/layout.module.css"

export default class Navigation extends Component {
  render() {
    return (
      <nav className={style.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    )
  }
}
