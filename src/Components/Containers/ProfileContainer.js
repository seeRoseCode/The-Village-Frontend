import React from 'react';
import ProfileCard from '../ProfileCard'
import MyFamilyContainer from '../Containers/MyFamilyContainer'
import PostsContainer from '../Containers/PostsContainer'
import {connect} from 'react-redux'

function ProfileContainer(props){
  console.log("profile cont: ", props)
    return(
      <div>
        <br/>
        <ProfileCard />
        <MyFamilyContainer />
        <PostsContainer />
      </div>
    )
}

const mapStateToProps = (state) => {
  return { user: state.users.user}
}

export default connect(mapStateToProps)(ProfileContainer);
