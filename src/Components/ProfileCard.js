import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'



class ProfileCard extends Component {

  handleEdit = () => {
    console.log("let's do this!")
    this.props.history.push('/edit-profile')
    // return <input type="file" name="upload new image"/>
  }

  render(){
    return(
      <div>
        <img src={this.props.user.img_url} alt="profile pic here"/>
        {
        <h3>{this.props.user.name}</h3>
      }
        <h3>{this.props.user.age}</h3>
        <button onClick={this.handleEdit}>edit</button>
      </div>
    )
  }
  // else
    // return <Redirect to="/login"/>
  }
// }

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default withRouter(connect(mapStateToProps, null)(ProfileCard));
