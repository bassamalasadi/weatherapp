// Display the entrance card in the home page 

import React from 'react'
// Use FontAwesomeIcon to display github and pdf icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
    return(
        <div className="page-wrap">
              <div id="card1" className="card">
                <a href="https://www.jamk.fi/fi/Etusivu/" target="_blank">
                    <div className="center">
                        <img id="headshot" src="https://i.ibb.co/8NQVBt3/cXoB6y6n.png" />
                    </div>
                </a>
                <div className="content">
                  <h1>WeatherApp</h1>
                  <p className="clickable">
                  This is was made as assignment for YTSP0300 - Application Frameworks course by Bassam AlAsadi.
                  </p> 
                  <h3>Documentations</h3>
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