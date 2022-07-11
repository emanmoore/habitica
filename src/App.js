import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import FruitPage from './components/FruitPage'
import Fruits from './components/Fruits'
import Login from './components/Login'
import Signup from './components/Signup'
import Fruit from './components/Fruit'
import Water from './components/Water'
import Daily from './components/Daily'
import Footer from './components/Footer'


function App() {
  return (
 
      <Router>
        <Header />
      {/*<FruitPage />*/}

      {/*<Route exact to="/">
        <Fruits />
  </Route>*/}

      <Route to="/login">
        <Login />
      </Route>

      <Route to="/signup">
        <Signup />
      </Route>

      <Route to="/fruit">
        <Fruit />
      </Route>

      <Route to="/Water">
        <Water />
      </Route>

      <Route to="/Daily">
        <Daily />
      </Route>


    
       <Footer />
      </Router>
      
    

    
   
  );
}

export default App;
