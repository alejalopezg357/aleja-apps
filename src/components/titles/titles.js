import React, { Component } from 'react'
import flag from '../../assets/images/japan/flag.svg';

class Titles extends Component {
  render () {
    return (
      <div className="titles">
        <img src={ flag } className="titles__flag" alt="" title="" />
        <p className="titles__title"> Japan </p>
        <div className="titles__content">
          <p className="titles__content-title"> Art </p>
          <span className="titles__content-ico"> + </span>
          <p className="titles__content-subtitle"> Food </p>
        </div>
      </div>
    )
  }
}

export default Titles