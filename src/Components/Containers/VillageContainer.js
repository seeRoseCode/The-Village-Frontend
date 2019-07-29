import React from 'react';
import CalendarContainer from '../Containers/CalendarContainer'
import VillagersContainer from '../Containers/VillagersContainer'
import PostsContainer from '../Containers/PostsContainer'

function VillageContainer(){
    return(
      <div>
        <CalendarContainer />
        <VillagersContainer />
        <PostsContainer />
      </div>
    )
}

export default VillageContainer;


// {
//   this.props.user.village &&
//   this.props.user.village.map((vill) => <Villager villager={vill} />)
// }
