import React, { Component } from 'react';
import Title from '../Title'
import ReviewContainer from '../Containers/ReviewContainer'
import ActivityContainer from '../Containers/ActivityContainer'





class HomeContainer extends Component{
  render(){
    return(
      <div>
        <Title />
        <ReviewContainer />
        <ActivityContainer />
      </div>
    )
  }
}

export default (HomeContainer);
