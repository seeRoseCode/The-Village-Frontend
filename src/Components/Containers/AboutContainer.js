import React from 'react';
import Title from '../Title'
import { Container, Header, Divider } from 'semantic-ui-react'
import '../../stylesheets/App.css'


function About(){
    return(
      <Container text id="about">
      <Header>ABOUT THE VILLAGE</Header>
      <Divider />
      <Title />
      <p>
        We've heard that it takes a village to raise a child and we absolutely agree!
        But how do we do that in today's tech world? These days the people in your village
        may not live right next door, attend a church or school with you, and may not even children
        at all much less children your age. How do we utilize the support and resources of our village
        with only a text message to contact them!
        </p>
        <b>
        The answer is TECHNOLOGY!
        </b>
        <p>
        The Village is an application that allows you to add members to your individual village
        so that you can keep up with and support each other's families no matter how large or small
        they may be.
        </p>
        <p>
        Use our message board to send out announcements, funny stories, seek advice, or see who's
        available to babysit.  Never send out another recital or graduation invitation. Simply add the event to your
        village calendar and everyone will see it and be able to RSVP. Looking for ways to bring
        the village together? Head to the activities tab and search for activities. Simply click the
        "Create Event" button to add it to your village calendar.
        </p>
        <p>
        Most importantly, how often do we forget to include everyone in the group text when something goes wrong?
        How often have you wondered who to call when you're hurt or lost? Have you ever wished there
        was a way your teenager could safely notify you that they were stranded or hurt when they're
        away from home? That's what the panic button is for. Hit the panic button when something is wrong with you or your kids and the entire
        village will be notified immediately with all the information they need to have.
        You can include a description of what happened or simply choose hurt or lost and everyone
        in the village will be notified until you change your status back to safe.
        </p>
        <h3>
        Download The Village today and experience what it's like to truly have the
        support of your entire village as you navigate through life!
        </h3>

      </Container>
    )
}

export default About;
