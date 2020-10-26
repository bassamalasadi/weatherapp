import React,{useContext} from 'react'
import {SearchContext} from "../Context/SearchContext"
import Weather from "../components/Weather.Component";
import Forecast from "../components/Forecast.Component";
import Favourite from "../components/Favourites.Component";
import AddandCopy from "../components/AddAndCopy.Component";
import Search from "../components/Search.Component"
import {useSpring, animated} from 'react-spring'
function HomePage(){
    const {value5} = useContext(SearchContext)
    const [view] = value5
    const iconan = useSpring({opacity: 1, from: {opacity: 0}})
    console.log('homepage')
    return( 
        <animated.div style={iconan}>
      <div className="App">  
      <main>
          <div>
            <Search city={view} />              
          </div>
            <Favourite/>
      </main>
    </div>
    </animated.div>
    )}

export default HomePage