import React from 'react';
import Title from '../Title'
import ReviewContainer from '../Containers/ReviewContainer'
import ActivityContainer from '../Containers/ActivityContainer'

function HomeContainer(){
    return(
      <div>
        <Title />
        <ReviewContainer />
        <ActivityContainer />
      </div>
    )
}

export default HomeContainer;
