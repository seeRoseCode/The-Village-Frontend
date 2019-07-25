import React from 'react';
import ProfileCard from '../ProfileCard'
import MyFamilyContainer from '../Containers/MyFamilyContainer'
import PostsContainer from '../Containers/PostsContainer'
import {connect} from 'react-redux'

function ProfileContainer(){
    return(
      <div>
        <br/>
        <ProfileCard />
        <MyFamilyContainer />
        <PostsContainer />
      </div>
    )
}

export default connect(ProfileContainer);
