//ALLOW USERS TO ACTUALLY CREATE REVIEWS

import React from 'react';
// import ReviewCard from '../ReviewCard'
import { Image } from 'semantic-ui-react'
import review1 from '../images/review-1.jpg'
import review2 from '../images/review-2.jpg'
import review3 from '../images/review-3.jpg'


function ReviewContainer(){
    return(
      <div className="scrolling-wrapper">
        <div className="indiv"><Image  src={review1}/></div>
        <div className="indiv"><Image  src={review2}/></div>
        <div className="indiv"><Image src={review3}/></div>
        {
          //<ReviewCard />
        }
      </div>
    )
}

export default ReviewContainer;
