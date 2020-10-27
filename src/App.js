import React,{useContext} from 'react'
import {FavouritesProvider} from "./Context/FavouritesContext"
import "react-perfect-scrollbar/dist/css/styles.css";
import {SearchContext, SearchProvider} from "./Context/SearchContext"
import HomePage from "./pages/HomePage"
import CityPage from "./pages/CityPage"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  let city =''
  function View () {
    const {value5} = useContext(SearchContext)
    const [view] = value5
    city = view; 
    return(
     <Router>
      <div>
          <Route exact path='/' component={HomePage} /> 
          <Route exact path={`/city/:cityname`} component={CityPage} />
      </div>
      </Router>
    )
  }
  return (
    <FavouritesProvider>
      <SearchProvider>
        <View />
      </SearchProvider>
    </FavouritesProvider>
  );
}
export default App;