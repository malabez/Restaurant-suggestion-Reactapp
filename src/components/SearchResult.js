import React from 'react';

class SearchResult extends React.Component{
    state ={
        on : false,
    }
    toggle = () =>{ 
        this.setState({
            on : true

        })
    }
    render(){
        
        return(
            <div className="App-search">
                <div>
                    {this.props.name} <h1>    </h1>
                    {this.state.on&& localStorage.setItem(this.props.name,this.props.image)}
                    <div className=""><button onClick={this.toggle} width={20} hieght={20}>+ Fav</button></div>
                </div>
                <img src={this.props.image} width={495} height={300} alt="imge"/>
                <div>price : {this.props.price}</div>
                <div>rating : {this.props.rating}</div>
                <div>phone : {this.props.phone}</div>
                
            </div>
        );
    }
}

export default SearchResult;