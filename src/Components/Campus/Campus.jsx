import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/galary1.png'
import gallery_2 from '../../assets/galary2.png'
import gallery_3 from '../../assets/galary3.png'
import gallery_4 from '../../assets/galary4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className ="btn dark-btn">See more here <img src="Icons/arrow-right.svg" alt="" /></button>
    </div>
  )
}

export default Campus
