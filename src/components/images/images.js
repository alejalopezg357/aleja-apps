import React, { Component } from 'react'
import Slider from 'react-slick'
const baseUrl = 'https://picsum.photos'

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
						<img src={baseUrl + `/id/101/400/300`} alt="" title="" />
					</div>
					<div>
						<img src={baseUrl + `/id/102/400/300`} alt="" title="" />
					</div>
					<div>
						<img src={baseUrl + `/id/103/400/300`} alt="" title="" />
					</div>
					<div>
						<img src={baseUrl + `/id/104/400/300`} alt="" title="" />
					</div>
        </Slider>
      </div>
    );
  }
}