import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import SearchPlace from './components/SearchPlace';

import Favourite from './components/Favourite';

const searchplace = () =>{
  return (
    <div>
      <SearchPlace />
    </div>
  )
}
const favourite =()=>{
  return(
    <div>
      <Favourite/>
    </div>  
    )
}

class App extends Component {
  render(){
    return(
        <Router >
          
          <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                      <li><Link to="/" >searchplace</Link></li>
                      <li><Link to="/favourite" >favourite</Link></li> 
                </ul>
              </div>
            </div>
          </nav> 
          <Route path={"/"} exact strict component={searchplace}/>
          <Route path={"/favourite"} exact strict component={favourite}/>
        </Router> 
        
    );
  }
}

export default App;
