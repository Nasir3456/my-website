import React, { useEffect, useState } from 'react'
import nsr2 from 'C:/Users/Admin/Desktop/portfolio/src/images/nsr2.png'
import html from 'C:/Users/Admin/Desktop/portfolio/src/images/html.png'
import css from 'C:/Users/Admin/Desktop/portfolio/src/images/css.png'
import js from 'C:/Users/Admin/Desktop/portfolio/src/images/js.png'
import react from 'C:/Users/Admin/Desktop/portfolio/src/images/react.png'
import php from 'C:/Users/Admin/Desktop/portfolio/src/images/php.png'
import mysql from 'C:/Users/Admin/Desktop/portfolio/src/images/mysql.png'
import wordpress from 'C:/Users/Admin/Desktop/portfolio/src/images/wordpress.png'
import theme from 'C:/Users/Admin/Desktop/portfolio/src/images/theme.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {

    useGSAP(function () {
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(".aboutLeft ",{
            x:-400,
            duration:1,
            scrollTrigger:{
                trigger:".aboutLeft ",
                scroller:"body",
                start:"top 90%"
            }
        })
        gsap.from(".aboutRight h1 ",{
            y:100,
            duration:1,
            scrollTrigger:{
                trigger:".aboutRight h1 ",
                scroller:"body"
            }
        })
        gsap.from(".aboutRight p ",{
            scale:0,
            duration:2,
            scrollTrigger:{
                trigger:".aboutRight p ",
                scroller:"body"
            }
        })
        gsap.from(".display ",{
            opacity:-1,
            duration:1,
            scrollTrigger:{
                trigger:".display ",
                scroller:"body"
            }
        })
    })

    const [idx, setidx] = useState(0)
    let skill = [
            [
                [html,'HTML'],
                [css,'CSS'],
                [js,'JS'],
                [react,'REACT.JS'],
                [php,'PHP'],
                [mysql,'MYSQL'],
                [wordpress,'WORDPRESS'],
                [theme,'THEME DEVELOPMENT'],
            ],
            [
                ['Higher Secondary','nav nirman vidhyalay - Halvad'],
                ['Bechelor of computer application','parangat college - Halvad']
            ]
        ];
    
  return (
    <div className='aboutContainer'>
        <div className='aboutLeft'>
            <img src={nsr2} />
        </div>
        <div className='aboutRight'>
            <h1>About Me</h1>
            <p>Hey , <br/> My name is nasir multani , and i'm a full stack developer . I have a strong command over both front-end and back-end technologies , allowing me to build complete and scalable applications.</p>
            <p>As a recent graduate with a keen interest in Fullstack development , I'm reaching out to inquire about any entry-level opportunities available . I'm eager to contribute and learn within your organization.</p>
            <div className='rightShowcase'>
                <div className='upper'>
                {
                    ['Skills','Education'].map((item,index)=>{
                        return <p onClick={()=>{
                            setidx(index)
                        }} className='heading'>{item}</p>
                    })
                }
                </div>
                <div className='display'>
                    {
                        idx == 0 ? skill[idx].map((item)=>{
                            return <div className='lan'>
                                        <img src={item[0]}/>
                                        <p>{item[1]}</p>
                                    </div>
                        }) : skill[idx].map((item)=>{
                            return <div className='edu'>
                                        <p>{item[0]}</p>
                                        <p>{item[1]}</p>
                                    </div>
                        })
                    }

                    {/* <div className='edu'>
                        <p>Higher Secondary </p>
                        <p>Nav Nirman Vidhyalay - Halavd</p>
                    </div> */}
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About