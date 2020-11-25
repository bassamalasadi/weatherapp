import React,{useContext} from 'react'
import {SearchContext} from "../Context/SearchContext"
import Favourite from "../components/Favourites.Component";
import Search from "../components/Search.Component"
import {useSpring, animated} from 'react-spring'
import UseDate from '../components/timeDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

function HomePage(){
  const { value5} = useContext(SearchContext)
  const [view] = value5
  const iconan = useSpring({opacity: 1, from: {opacity: 0},transition: '1s'})
    return(  
      <div className="App">  
      <UseDate />
      <main>
          <div>
            <Search city={view} />        
          </div>       
            <Favourite/>
            <animated.div style={iconan}>
            <div className="page-wrap">
              <div id="card1" className="card">
                <div className="center">
                  {/* <img id="headshot" src="https://i.ibb.co/PYQdrCT/Untitled.jpg" /> */}
                  <img id="headshot" src="https://i.ibb.co/8NQVBt3/cXoB6y6n.png" />
                </div>
                <div className="content">
                  <h1>WeatherApp</h1>
                  <p className="clickable">
                  This is was made as assignment for YTSP0300 - Application Frameworks course by Bassam AlAsadi.
                  </p> 
                  <h3>Documentation</h3>
                  <div className="icon-block center clickable">
                    <a href="//github.com/bassamalasadi/weatherapp/tree/master" target="_blank">
                      <FontAwesomeIcon size='3x' icon={ faGithub} />
                    </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="//github.com/bassamalasadi/weatherapp/blob/master/Bassam_Alasadi_stack_research_YTSP0300.pdf" target="_blank">
                      <FontAwesomeIcon size='3x' icon={ faFile } />
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>  
            </animated.div>
      </main>
      
    </div>
    
    )

  }   
    
export default HomePage

