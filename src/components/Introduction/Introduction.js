import React, { Component } from 'react'
import ico from '../../assets/images/japan/introduction.svg'

class Introduction extends Component {
  render () {
    return (
      <div className="box introduction" id="js-intro">
        <div className="introduction__container">
          <img src={ ico } className="introduction__ico" alt="" title="" />
          <p className="introduction__title"> Suspendisse dignissim a dolor et laoreet </p>
          <p className="introduction__subtitle"> Dui eu eleifend lobortis </p>
          <p className="introduction__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit blandit odio.
            Fusce sit amet ligula et dui interdum ullamcorper. Morbi tincidunt rhoncus elit, quis tempor metus hendrerit quis.
            Suspendisse eu viverra dolor, non commodo erat. Ut laoreet accumsan maximus.
            Proin aliquet felis et consectetur ornare. Mauris ac gravida massa. Aliquam erat volutpat.
            Aliquam quis elementum nibh, quis rhoncus massa. Suspendisse semper turpis non lorem tempus, eget malesuada libero mattis.
            Nunc rhoncus, lorem ut elementum vestibulum, tortor tortor feugiat mauris, in auctor eros purus nec enim.
            Sed et nulla aliquet justo commodo laoreet eget et elit. Nulla vitae tempus velit.
            Morbi viverra placerat sem, vel fermentum arcu. Mauris ac ex felis.
            Nulla ut condimentum dolor, a interdum quam.
            <br /><br />
            Mauris commodo et diam id pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Integer posuere ut elit quis commodo.
            Aenean vestibulum, odio rutrum consectetur molestie, turpis dolor tempor ipsum, eget ullamcorper mi dolor sit amet lectus.
            Duis pulvinar sem erat, ac luctus augue egestas nec.
            Cras hendrerit massa sit amet arcu viverra volutpat. Ut non ipsum mauris.
            Curabitur dapibus ultrices mi, ut maximus est hendrerit porttitor.
            Integer vulputate in nibh eu eleifend. In aliquam, diam tempor mattis suscipit, massa justo volutpat ligula, sit amet efficitur sem magna nec diam.
            Aliquam tellus odio, ultricies a libero sed, efficitur tempor neque.
            <br /><br />
            Quisque volutpat, eros sit amet viverra aliquam, nibh ex vestibulum sapien, non eleifend augue enim at ligula.
            Aenean sed congue lorem. Phasellus ac suscipit arcu. Nulla facilisi.
            Integer finibus, nulla vitae facilisis rutrum, urna ipsum tempus nunc, et scelerisque est quam sed ex.
            Nulla facilisi. Fusce a pulvinar odio, eget ultrices urna. Donec rhoncus, risus non scelerisque semper, dui augue imperdiet ex, sit amet elementum tortor elit nec lectus.
            Morbi gravida, urna a vestibulum vulputate, lacus purus bibendum sapien, nec malesuada justo ante eu ante.
          </p>
          <span className="introduction__link" onClick={ slide }> Ver más </span>
        </div>
      </div>
    )

    function slide () {
      var introSlide = document.querySelector('.introduction__paragraph')
      
      introSlide.classList.toggle('introduction__paragraph--slide')
    }
  }
}

export default Introduction