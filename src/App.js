import React, {useState, useEffect} from 'react'
import './styles/styles.css'
import HomePage from './pages/HomePage'
import {Switch, Route} from 'react-router-dom'
import MovieSearch from './pages/MovieSearch'

function App() {
 return(
   <>
   <Switch>
     <Route exact path="/">
   <HomePage/>
   </Route>
   <Route exact path="/movieSearch">
     <MovieSearch />
   </Route>
   </Switch>
   </>
 )
}

export default App;
