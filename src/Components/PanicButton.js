import React from 'react';

function PanicButton(props){
  console.log("this villager's lost status: ", props.lost)
    return(
      <div>
        <button>{props.lost? "FOUND" : "PANIC"}</button>
      </div>
    )
}

export default PanicButton;
