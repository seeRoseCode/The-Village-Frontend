import React, { Component } from 'react';
import Title from '../Title'
import ReviewContainer from '../Containers/ReviewContainer'
import ActivityContainer from '../Containers/ActivityContainer'
import { Image, Container, Button, Divider } from 'semantic-ui-react'
import logo from '../images/village-logo-3.jpg'
import backgroundimg from '../images/homepage-image-1.jpg'



class HomeContainer extends Component{
  render(){
    return(
      <div>
      <Image src={backgroundimg} className="home-img"/>
      <Container className="home-container">
      <ReviewContainer />
      <Divider />
      <Button as="a" href="/create-account">Sign Up Today!</Button>
      </Container>
      </div>
    )
  }
}

export default (HomeContainer);
