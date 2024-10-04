import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload ,faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Crud from 'C:/Users/Admin/Desktop/portfolio/src/Work/php-crud-main.zip'
import Quiz from 'C:/Users/Admin/Desktop/portfolio/src/Work/Quiz-Game-main.zip'
import Counter from 'C:/Users/Admin/Desktop/portfolio/src/Work/react-letter-word-counter-main.zip'
import Shopping from 'C:/Users/Admin/Desktop/portfolio/src/Work/react-shoppingCart-main.zip'
import Todo from 'C:/Users/Admin/Desktop/portfolio/src/Work/react-TodoList-main.zip'
import Task from 'C:/Users/Admin/Desktop/portfolio/src/Work/TaskManager-main.zip'
import Stock from 'C:/Users/Admin/Desktop/portfolio/src/Work/stock-management-main.zip'
import Mywebsite from 'C:/Users/Admin/Desktop/portfolio/src/Work/my-website-main.zip'
import php from 'C:/Users/Admin/Desktop/portfolio/src/projectImage/php.jpeg'
import quiz from 'C:/Users/Admin/Desktop/portfolio/src/projectImage/quiz.jpeg'
import shopping from 'C:/Users/Admin/Desktop/portfolio/src/projectImage/shopping.jpeg'
import task from 'C:/Users/Admin/Desktop/portfolio/src/projectImage/task.jpeg'
import todo from 'C:/Users/Admin/Desktop/portfolio/src/projectImage/todo.png'
import word from 'C:/Users/Admin/Desktop/portfolio/src/projectImage/word.jpeg'
import stock from 'C:/Users/Admin/Desktop/portfolio/src/projectImage/stock.jpeg'
import mywebsite from 'C:/Users/Admin/Desktop/portfolio/src/projectImage/mywebsite.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'




const Portfolio = () => {

    useGSAP(function(){
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(".portfolioContainer h1",{
            y:100,
            duration:1,
            scrollTrigger:{
                trigger:".portfolioContainer h1",
                scroller:"body"
            }
        })
        gsap.from(".workMain",{
            y:100,
            duration:1,
            scrollTrigger:{
                trigger:".workMain",
                scroller:"body",
                start:"top 85%"
            }
        })
    })

    const [arr, setarr] = useState([
        [php,'php crud', 'This project is a user application where you can add, delete, and update the user.', Crud,false],
        [stock,'Inventry Management', 'This project is a stock management application where you can maintain your inventry items.', Stock,false],
        [mywebsite,'My portfolio', 'This is a website you are currently seeing ,it is a React project .', Mywebsite,false],
        [quiz,'quiz game', 'This application is created in React, and after completing the game, it will show your marks.', Quiz,false],
        [word,'word and letter counter', 'This is a React project to count letters and words in real-time.', Counter,false],
        [shopping,'shopping cart', 'This is a React-based shopping cart application where you can add items and view the total.', Shopping,false],
        [todo,'todo list', 'This application allows users to add and manage their tasks in a to-do list.', Todo,false],
        [task,'task manager', 'A task manager app built with React, helping users organize and manage their daily tasks.', Task,false],
    ])
    

    const changeIcon = (index) =>{
        let ar = [...arr]
        if(ar[index][4] == false){
            ar[index][4] = true
            setarr(ar)
        }
    }
  return (
    <div className='portfolioContainer'>
        <h1>My Work</h1>
        {
            arr.map((item,index)=>{
                return ( <div className='workMain'>
                         <div className='workImage'>
                            <img src={item[0]}/>
                        </div>
                        <div className='workText'>
                            <h3>{item[1]}</h3>
                            <p>{item[2]}</p>
                            <a onClick={()=>{
                                changeIcon(index)
                            }} href={item[3]}download>
                                {
                                    item[4] == false ? <FontAwesomeIcon icon={faDownload}/> : <FontAwesomeIcon icon={faCircleCheck} />
                                }
                                </a>
                        </div>
                    </div> )
            })
        }
        
    </div>
  )
}

export default Portfolio