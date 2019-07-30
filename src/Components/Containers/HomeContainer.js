import React, { Component } from 'react';
import Title from '../Title'
import ReviewContainer from '../Containers/ReviewContainer'
import ActivityContainer from '../Containers/ActivityContainer'
import { Image, Container } from 'semantic-ui-react'
import logo from '../images/village-logo-3.jpg'




class HomeContainer extends Component{
  render(){
    return(
      <Container>
      <Title />
      <ReviewContainer />
      <ActivityContainer />
      </Container>
    )
  }
}

export default (HomeContainer);
