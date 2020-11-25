import React from 'react'
import {FavouritesProvider} from "./Context/FavouritesContext"
import "react-perfect-scrollbar/dist/css/styles.css";
import {SearchProvider} from "./Context/SearchContext"
import HomePage from "./pages/HomePage"
import CityPage from "./pages/CityPage"

import {
  HashRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <FavouritesProvider>
      <SearchProvider>
      <Router basename={process.env.PUBLIC_URL}>
      <div>
          <Route exact path='/' component={HomePage} /> 
          <Route exact path={`/city/:cityname`} component={CityPage} />
      </div>
      </Router>
      </SearchProvider>
    </FavouritesProvider>
  );
}
export default App;