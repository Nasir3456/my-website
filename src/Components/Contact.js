import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane , faPhone} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faWhatsapp , faLinkedin} from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Contact = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwlQcoLd9TX8SstrnKxv2jbCkpbdZfEFxvqcLM530Ed4zuXBK7fLiNiD3c5f-2DfHA-/exec'
  const form = document.forms['submit-to-google-sheet']

  const submitted = (e) =>{
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
        form.reset()
      )
      .catch(error => console.error('Error!', error.message))
  }

  useGSAP(function () {
        
    gsap.from('.leftContact h1 , .leftContact p , .social , .rightContact input , .rightContact textarea , .rightContact button',{
        y:200,
        duration:1
    })
    })

  return (
    <div className='contactContainer'>
        <div className='leftContact'>
            <h1>Contact Me</h1>
            <p className='mail'><span><FontAwesomeIcon icon={faPaperPlane} /></span>multaninasir99@gmail.com</p>
            <p className='number'><span><FontAwesomeIcon icon={faPhone} /></span>+91 8487916316</p>
            <div className='social'>
                <a href="https://www.instagram.com/nasir_.99" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/Nasir3456" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://wa.me/+918487916316" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://www.linkedin.com/in/nasir-multani-6641b5295?" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
        <div className='rightContact'>
            <form name='submit-to-google-sheet' onSubmit={()=>{
                submitted()
            }}>
            <input type='text' name='Name' placeholder='Your Name'/>
            <input type='email' name='Email' placeholder='Your Email'/>
            <textarea name='Message' placeholder='Your Message' rows={10} />
            <button className='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact