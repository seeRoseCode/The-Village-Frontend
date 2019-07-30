import React, { Component } from 'react';

class PanicButton extends Component{

  handleClick = () => {
    console.log("HONEY I LOST THE KID!")
  }

  render(){
    return(
      <div className="panic" onClick={this.handleClick}>
        <button>{this.props.lost? "FOUND" : "PANIC"}</button>
      </div>
    )
  }
}

export default PanicButton;
