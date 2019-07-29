import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import defaultImg from './defaultImages/defaultImg.png'
// import {Redirect} from 'react-router-dom'



class ProfileCard extends Component {

  handleEdit = () => {
    this.props.history.push('/edit-profile')
  }

  renderImg = () => {
    if (this.props.user.img_url === null){
      return <img src={defaultImg} alt="profile pic here" />
      }
    else {
      return <img src={this.props.user.img_url} alt="profile pic here" />
    }
  }

  render(){
    return(
      <div>
        {this.renderImg()}
        <h3>{this.props.user.name}</h3>

        <h3>{this.props.user.age}</h3>
        <button onClick={this.handleEdit}>edit</button>
      </div>
    )
    }
  }


const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default withRouter(connect(mapStateToProps, null)(ProfileCard));
