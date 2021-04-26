import React, { Component } from 'react'
import waveOne from '../../assets/images/waves-white.svg'
import waveTwo from '../../assets/images/waves-white.svg'

const styleOne = {
  backgroundImage: 'url(' + waveOne + ')'
}

const styleTwo = {
  backgroundImage: 'url(' + waveTwo + ')'
}

class Waves extends Component {
  render () {
    return (
      <div className="waves">
        <span className="waves__image-one" style={ styleOne }></span>
        <span className="waves__image-two" style={ styleTwo }></span>
      </div>
    )
  }
}

export default Waves
