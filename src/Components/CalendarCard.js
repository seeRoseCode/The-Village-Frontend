import React, { Component } from 'react';
import Calendar  from 'react-calendar'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'



class CalendarCard extends Component{
  render(){
    return(
      <div>
        <Calendar />
      </div>
    )
  }
}

export default withRouter(connect()(CalendarCard));
