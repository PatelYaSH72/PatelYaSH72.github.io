import React from 'react'
import "./Contact.css"
import massage from "../../assets/msg.jpg"

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "509836ec-6bfe-42f9-b410-226599845b51");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className ="contact-col">
        <h3>Send us a message <img src={massage} alt="" /></h3>
        <p>Feel free to reach out through contact form our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src="/Icons/mail.svg" alt="" />Contact@GreatStack</li>
          <li><img src="/Icons/phone-call.svg" alt="" />+1 123-456-7890</li>
          <li><img src="/Icons/map-pin.svg" alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
           <label>Your name</label>
           <input type="text" name='name' placeholder='Enter your name' required/>
           <label>Phone Number</label>
           <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
           <label>Write your message here</label>
           <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
           <button type='submit' className='btn  dark-btn'>Submit Now <img src="/Icons/arrow-right.svg" alt="" /></button>
           </form>
           <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
