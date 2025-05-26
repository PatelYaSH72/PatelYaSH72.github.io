import React from 'react'
import './Programs.css'
import program1 from "../../assets/program1.jpg"
import program2 from "../../assets/program2.jpg"
import program3 from "../../assets/program3.jpg"
import program1Icon from "../../assets/Hover-open.png"
// import program1Icon from "../../assets/Hover-open.png"
// import program1Icon from "../../assets/Hover-open.png"
import { BookImage } from 'lucide-react'
const bookImage = {icon:<BookImage/>}
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="program1" />
        <div className="caption">
          <img src="Icons/Icon.svg"  alt="porgram1Icon" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
          <img src={program2} alt="program2" />
          <div className="caption">
            <img src="Icons/Icon.svg" alt="program1Icon" />
            <p>Master Degree</p>
          </div>
      </div>
      <div className="program">
          <img src={program3} alt="program3" />
          <div className="caption">
            <img src="Icons/Icon.svg" alt="program1Icon" />
            <p>Post Graduation</p>
          </div>
      </div>
    </div>
  )
}

export default Programs

