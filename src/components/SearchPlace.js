import React, { Component } from 'react'
import Title from './Title';
import Form from './Form';
import SearchResult from './SearchResult';
import axios from "axios";
import './Apps.css'

const Api_key="U3oCzLxcCATz8ZWHnX6GbYw9dfF-7GGY2p1u4ebqgxhDLSPsagKAwXCv_-4CxlbjlYjAg_-iM23Zb51Bztxtd-y_T4h-QjzTpicPn8JR4xl7OrGlH-qYr58DnujsXHYx";

class SearchPlace extends Component {
  state = {
    bizneses : undefined
  }
  getPlace = (e) =>{
    e.preventDefault();
    const place = e.target.elements.place.value;
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${place}`, {
      headers: {
        Authorization: `Bearer ${Api_key}`
      }
    })
    .then((res) => {
    
      this.setState({
        bizneses: res.data.businesses
      })
    })
    .catch((err) => {
      console.log ('error');
    })
  }
  render() {
    return (
      <div>

        <div className="App-header">
          <Title />
        </div>  
        
        <div className="App-input">
          <Form getPlace={this.getPlace}/>
        </div>
        <br/><br/>
        <div className="App-intro">
         {
           (typeof(this.state.bizneses)=='object')?
            <div>
              {this.state.bizneses.map((rowdata,i)=>
                <div key={rowdata.id}>
                  <SearchResult 
                    name={rowdata.name}
                    price={rowdata.price}
                    rating={rowdata.rating}
                    phone={rowdata.phone}
                    image={rowdata.image_url}
                  />
                </div>
                )}
              </div>
              :
              null
         }
        </div>
      </div>
    );
  }
}

export default SearchPlace;
