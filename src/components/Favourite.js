import React from 'react';
import './Apps.css'
class Favourite extends React.Component{
    
    display =()=>{
        let table =[]
        for(let i=0;i<localStorage.length;i++){
                const n =localStorage.key(i);
                const image = localStorage.getItem(n);
                table.push(<li>{n}</li>);
                table.push(<img src={image} width={495} height={300} alt="imge"/>)
        }
        return table;
    }
    render() {
        return(
        <div className="App-search">  
            {this.display()}
            
        </div>    
        );
      }
}

export default Favourite;