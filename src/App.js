import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import DictionaryContainer from './containers/DictionaryContainer';
import StartContainer from'./containers/StartContainer';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
  <div className="background">
   <Navbar />
   <Switch>
   <Route path='/' exact component={StartContainer} />
   <Route path='/DictionaryContainer' component={DictionaryContainer} />
   </Switch>
   <Footer />
   </div>
   </Router>
  );
}



export default App;
