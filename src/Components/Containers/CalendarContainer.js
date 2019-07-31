import React from 'react';
import CalendarCard from '../CalendarCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Container} from 'semantic-ui-react'

function CalendarContainer(){
    return(
      <Container>
        <CalendarCard />
        <button>add Event</button>
      </Container>
    )
}

export default withRouter(connect()(CalendarContainer));
