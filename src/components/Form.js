import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getPlace}>
                <input type="text" name="place" placeholer="Enter place" width={200}/>
                <button> Enter </button>
            </form>
        );
    }
}

export default Form;