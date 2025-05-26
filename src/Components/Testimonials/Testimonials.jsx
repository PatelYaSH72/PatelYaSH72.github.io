import React, { useRef } from 'react'
import "./Testimonials.css"
import next_btn from "../../assets/next-btn.png"
import back_btn from "../../assets/back-btn.png"
import testimonial_1 from "../../assets/testimonial1.png" 
import testimonial_2 from "../../assets/testimonial2.jpg"
import testimonial_3 from "../../assets/testimonal3.jpg"
import testimonial_4 from "../../assets/testimonial4.jpg"

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = () => {
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translate(${tx}%)`;

}
const slideBackward = () => {
   if(tx < 0){
      tx +=25
   }
   slider.current.style.transform = `translate(${tx}%)`
}

  return (
    <div className ="testimonials">
      <img src={next_btn} alt="" className ="next-btn" onClick={slideForward}/>
      <img src={back_btn} alt="" className ="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
             <div className="slide">
               <div className="user-info">
                   <img src={testimonial_1} alt="" />
                   <div>
                     <h3>William Jackson 1</h3>
                    <span>Edusity, USA</span>
                   </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic execellence have truly exceeded my expectations.</p>
            </div>
         </li>
         <li>
             <div className="slide">
               <div className="user-info">
                   <img src={testimonial_2} alt="" />
                   <div>
                     <h3>William Jackson 2</h3>
                    <span>Edusity, USA</span>
                   </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic execellence have truly exceeded my expectations.</p>
            </div>
         </li>
         <li>
             <div className="slide">
               <div className="user-info">
                   <img src={testimonial_3} alt="" />
                   <div>
                     <h3>William Jackson 3</h3>
                    <span>Edusity, USA</span>
                   </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic execellence have truly exceeded my expectations.</p>
            </div>
         </li>
         <li>
             <div className="slide">
               <div className="user-info">
                   <img src={testimonial_4} alt="" />
                   <div>
                     <h3>William Jackson 4</h3>
                    <span>Edusity, USA</span>
                   </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic execellence have truly exceeded my expectations.</p>
            </div>
         </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
