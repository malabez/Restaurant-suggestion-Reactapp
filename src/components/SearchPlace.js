import React, { Component } from 'react'
import Title from './Title';
import Form from './Form';
import SearchResult from './SearchResult';
import axios from "axios";
import './Apps.css'

const Api_key="JAWgHi4x1Bo7rvX4a_BFSQbKB8b-PJesqyJ93_9Mm0BFHYlgfuj1aClsrHQAkXIzeJ6fBcy0pyUxTnKjYhIg18lADNxrIqzQaJ99hROgi0_kcITAUyQwud8Wy770XHYx";

class SearchPlace extends Component {
  state = {
    bizneses : undefined
  }
  getPlace = (e) =>{
    e.preventDefault();
    const place = e.target.elements.place.value;
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
      headers: {
        Authorization: `Bearer ${Api_key}`
      },
      params:{
        location: `${place}`
      }
    })
    .then((res) => {
    	console.log(res);
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
