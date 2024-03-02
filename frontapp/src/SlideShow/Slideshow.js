import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Tissort_1920_x_667_px.jpg?v=1638343279',
    caption: 'Slide 1'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0261/8900/4880/files/Couple_1800x628_08af43fa-a875-4cb2-b95a-c6bcd8c26a84_1080x.jpg?v=1632981798',
    caption: 'Slide 2'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Aspen_1920_x_667_px.jpg?v=1642580133',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;