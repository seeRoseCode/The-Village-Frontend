import React from 'react';
import Calendar  from 'react-calendar'
import {withRouter} from 'react-router-dom'

function CalendarCard(){
    return(
      <div>
        <Calendar />
      </div>
    )
}

export default withRouter(CalendarCard);
