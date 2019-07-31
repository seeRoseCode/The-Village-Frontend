import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class PanicButton extends Component{

  handleClick = () => {
    console.log("HONEY I LOST THE KID!")
  }

  render(){
    return(
        <Button className="panic" floated="right" onClick={this.handleClick}>{this.props.lost? "FOUND" : "PANIC"}</Button>
    )
  }
}

export default PanicButton;
