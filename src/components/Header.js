import React from "react"
import logo from "../assets/img/LOGO_HOLOS-02.png"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="LOGO" />

      <h1>"El futuro de los brallets es HOLOS "</h1>

      <ul>
        <li>HOME</li>
        <li>NUEVO</li>
        <li>ACCESORIOS</li>
        <li>CONTACTO</li>
        <li>QUIENES SOMOS</li>
      </ul>
    </header>
  )
}

export default Header
