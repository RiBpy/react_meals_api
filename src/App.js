import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Footer from './components/Footer';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleMeal from './pages/SingleMeal';
// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <Router basename='/react_meals_api'>
      <Navbar/>
      <Switch>
          <Route exact path={"/"}>
             <Home/>
          </Route>
          <Route path={"/about"}>
             <About/>
          </Route>
          <Route path={"/meal/:id"}>
             <SingleMeal/>
          </Route>
          <Route path={"*"}>
              <Error/>
          </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App