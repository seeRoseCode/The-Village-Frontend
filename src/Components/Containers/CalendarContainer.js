import React from 'react';
import CalendarCard from '../CalendarCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

function CalendarContainer(){
    return(
      <div>
        <CalendarCard />
        <button>add Event</button>
      </div>
    )
}

export default withRouter(connect()(CalendarContainer));
