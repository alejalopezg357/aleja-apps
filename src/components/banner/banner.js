import React, { Component } from 'react'
import bg from '../../assets/images/japan/banner.jpg';

const style = {
  backgroundImage: 'url(' + bg + ')'
}

class Banner extends Component {
  render () {
    return (
      <div className="box box--small banner" style={ style }>
        <p className="banner__text"> Elit quis commodo pretium </p>
      </div>
    )
  }
}

export default Banner
