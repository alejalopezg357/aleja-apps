import React, { Component } from 'react'
import logo from '../../assets/images/logo.svg';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <img src={ logo } className="navbar__logo" alt="" title="" />
        <ul className="navbar__list">
          <li className="navbar__item"> 
            <a href="/#" className="navbar__link"> Inicio </a>
          </li>
          <li className="navbar__item"> 
            <a href="/#" className="navbar__link"> Quienes somos </a>
          </li>
          <li className="navbar__item">
            <a href="/#" className="navbar__link"> Galeria </a>
          </li>
          <li className="navbar__item">
            <a href="/#" className="navbar__link"> Contacto </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
