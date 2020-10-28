import React,{useContext} from 'react'
import {SearchContext} from "../Context/SearchContext"
import Favourite from "../components/Favourites.Component";
import Search from "../components/Search.Component"
import {useSpring, animated} from 'react-spring'
function HomePage(){
  const { value5} = useContext(SearchContext)
  const [view] = value5
  const iconan = useSpring({opacity: 1, from: {opacity: 0}})
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