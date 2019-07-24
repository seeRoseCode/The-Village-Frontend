import React from 'react';
import {withRouter} from 'react-router-dom'

// import  from '../'

function ProfileCard(){
    return(
      <div>
        <img src="" alt="profile pic here"/>
        <h3>Name</h3>
        <h3>Age</h3>
      </div>
    )
}

export default withRouter(ProfileCard);
