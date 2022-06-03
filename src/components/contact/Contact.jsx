import React, { useRef, useState, useContext } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

//FA ICONS
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import { fab } from '@fortawesome/free-brands-svg-icons'
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

//import other icons
//look into clearing form after submit
const Contact = () => {
    const formRef = useRef()
    
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=> {
        e.preventDefault();
        emailjs.sendForm('service_ctjd65e', 'template_v59cz3j', formRef.current, '_uDA2uC6jIea6t_aS')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
        
    }
    return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's get in touch!</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <FontAwesomeIcon icon={faPhone} className="c-icon"/>
                    <a href="tel:614-312-8949">614-312-8949</a>
                </div>
                <div className="c-info-item">
                <FontAwesomeIcon icon={faEnvelope}  className="c-icon"/>
                <a href = "mailto: jacobgasper@gmail.com">jacobgasper@gmail.com</a>
                </div>
                <div className="c-info-item">
                    <FontAwesomeIcon icon={faLinkedin} className="c-icon"/>
                    <a href="https://www.linkedin.com/in/jacob-gasper-4109b0217/">Linkedin</a>

                </div>
                <div className="c-info-item">
                    <FontAwesomeIcon icon={faGithub} className="c-icon"/>
                    <a href="https://www.github.com/jcgasper">Github</a>
                </div>
            </div>

          </div>
          <div className="c-right">
              <p className="c-desc">
                  <b>Interested?</b> Lets get in touch. Primarily seeking Full-Time employment, but I am open
                  to freelancing if the right project comes along. I am always looking for opportunities to gain experience and learn!
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name="user_name"/>
                  <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject" />
                  <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name="user_email" />
                  <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name='message'/>
                  <button>Submit!</button>
                  {done && "Thank you!"}
              </form>
          </div>

      </div>
    </div>
  )
}

export default Contact
