import React, { Component } from 'react'

import bg from '../../assets/images/japan/background.jpg'

const style = {
  backgroundImage: 'url(' + bg + ')'
}

class background extends Component {
  render () {
    return (
      <div className="box box--large background" style={ style }></div>
    )
  }
}

export default background