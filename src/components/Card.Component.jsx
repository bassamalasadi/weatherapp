// Display the entrance card in the home page 

import React from 'react'
// Use FontAwesomeIcon to display github and pdf icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
    return(
        <div className="page-wrap">
              <div className="card">
                <a href="https://www.jamk.fi/fi/Etusivu/" target="_blank">
                    <div className="center">
                        <img className="headshot" src="https://i.ibb.co/8NQVBt3/cXoB6y6n.png" alt="jamk img" />
                    </div>
                </a>
                <div className="content">
                  <h1>WeatherApp</h1>
                  <p className="clickable">
                  The Weather app was made Using <a className="react"href="https://reactjs.org/" target="_blank"> Reactjs</a> " A JavaScript library for building user interfaces " as assignment for YTSP0300  - Application Frameworks course 2020 by : <h5 style={{color:"#994400"}}> <strong> BASSAM ALASADI </strong></h5>
                  </p> 
                  <h3><strong>Documentations</strong></h3>
                  <br />
                  <div className="icon-block center clickable">
                  Source Code &nbsp;&nbsp;
                    <a href="//github.com/bassamalasadi/weatherapp/tree/master" target="_blank">
                      <FontAwesomeIcon size='3x' icon={ faGithub} />
                    </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="//github.com/bassamalasadi/weatherapp/blob/master/Bassam_Alasadi_stack_research_YTSP0300.pdf" target="_blank">
                      <FontAwesomeIcon size='3x' icon={ faFile } /> 
                    </a>&nbsp;&nbsp; Stack Research 
                  </div>
                </div>
              </div>
            </div>  
    )
}

export default Card