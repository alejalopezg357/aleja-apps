import React, { Component } from 'react'
import WebFont from 'webfontloader'

import Background from './components/background/background'
import Banner from './components/banner/banner'
import Introduction from './components/introduction/introduction'
import Navbar from './components/navbar/navbar'
import Scroll from './components/scroll/scroll'
import Titles from './components/titles/titles'
import Waves from './components/waves/waves'
import Images from './components/images/images'

WebFont.load ({
  google: {
    families: [ 'Sacramento', 'Fredoka One', 'Lato' ]
  }
})

class App extends Component {
  render () {
    return (
      <>
        <Background />
        <Scroll />
        <Navbar />
        <Titles />
        <Introduction />
        <Banner />
        <Waves />
        <Images />
      </>
    )
  }
}

export default App
