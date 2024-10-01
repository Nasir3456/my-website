import React from 'react'
import react from 'C:/Users/Admin/Desktop/portfolio/src/images/react.png'
import php from 'C:/Users/Admin/Desktop/portfolio/src/images/php.png'
import wordpress from 'C:/Users/Admin/Desktop/portfolio/src/images/wordpress.png'

const Service = () => {
    let service = [
        [
            react,
            'react.js developer',
            'I build dynamic,responsive web application with React.js for seamless user experience.'
        ],
        [
            php,
            'php developer',
            'I develop robust web applications using PHP,ensuring efficient performance and security.'
        ],
        [
            wordpress,
            'wordpress developer',
            'I can create custom wordpress websites that are user-friendly and optimized for performance.'
        ]
    ]
  return (
    <div className='serviceContainer'>
        <h1>My Services</h1>
        <div className='serviceMain'>
                {
                    service.map((item)=>{
                        return <div className='serviceSub'>
                                    <img src={item[0]}/>
                                    <h2>{item[1]}</h2>
                                    <p>{item[2]}</p>
                                    <a href='#Contact'>Hire Me</a>
                                </div>
                    })
                }
        </div>
    </div>
  )
}

export default Service