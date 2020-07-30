import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import style from "../styles/layout.module.css"

const NavLink = styled(Link)`
  color: "white";
  text-decoration: none;
  letter-spacing: 3px;
`

export default class Navigation extends Component {
  render() {
    return (
      <nav className={style.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    )
  }
}
