import React,{useContext} from 'react'
import {SearchContext} from "../Context/SearchContext"
import Favourite from "../components/Favourites.Component";
import Search from "../components/Search.Component"
import {useSpring, animated} from 'react-spring'
import UseDate from '../components/timeDate';
import Card from '../components/Card.Component'

function HomePage(){
  /*
  Use the view state as a parameter to pass city name from the 
  view botton in favourites component to Search-bar in HomePage  
  */
  const { value5} = useContext(SearchContext)
  const [view] = value5
  // iconan used to make some delay in display components
  const iconan = useSpring({opacity: 1, from: {opacity: 0},transition: '1s'})

    return(  
      <div className="App"> 
      {/* Date and time component  */}
      <UseDate />
      <main>
          <div>
            {/* Search-bar component  */}
            <Search city={view} />        
          </div> 
            {/* Favourites component   */}
            <Favourite/>
            <animated.div style={iconan}>
              {/* Documentation component  */}
              <Card />
            </animated.div>
      </main>
    </div>
    )
  }    
export default HomePage

