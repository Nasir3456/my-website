import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight , faBars ,faTimes} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [translat, settranslat] = useState('')
    const [icon, seticon] = useState(<FontAwesomeIcon icon={faBars} />)
    const toggleMenu = () => {
        translat == '' ? settranslat('showMenu') : settranslat('')
        seticon(translat == ''? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />)
    }
  return (
    <div className='home-container'>
        <nav>
            <div className='logo'>
                <h1><span>N</span>asir</h1>
            </div>
            <h1 className='mobileMenu' onClick={()=>{
                toggleMenu()
            }}>{icon}</h1>
            <ul className={translat}>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Service'>Service</a></li>
                <li><a href='#Portfolio'>Portfolio</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>
        </nav>
        <section className='home-section'>
            <div className='home-sec-left'>
                <h1>Hello, I'm <span>Nasir Multani</span></h1>
                <p>A full-stack web developer,<br/> Wrodpress developer, and react.js developer.</p>
                <a href='#Service' className='home-btn'>Learn More  <span> <FontAwesomeIcon icon={faArrowRight} className='ic' /></span></a>
            </div>
            <div className='home-sec-right'>
            </div>
        </section>
    </div>
  )
}

export default Home