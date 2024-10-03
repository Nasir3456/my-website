import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload , faBars ,faTimes ,faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import resume from 'C:/Users/Admin/Desktop/portfolio/src/projectImage/Resume.pdf'

const Home = () => {
    const [translat, settranslat] = useState('')
    const [resumeIcon, setresumeIcon] = useState(<FontAwesomeIcon icon={faDownload} className='ic' />)
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
                <a href={resume} download='nasir-resume.pdf' className='home-btn' onClick={()=>{
                    setresumeIcon(<FontAwesomeIcon icon={faCircleCheck} />)
                }}>Resume  <span> <FontAwesomeIcon icon={faDownload} className='ic' /></span></a>
            </div>
            <div className='home-sec-right'>
            </div>
        </section>
    </div>
  )
}

export default Home