import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
// const chatURL = `http://localhost:3000/tokens`

class ChatBox extends Component{


  render(){
    return (
      <div className="container">
        <div className="chat">
          <h1>Chat</h1>
          <div className="messages">
            <div className="message">
              <span className="user">User:</span> Let's chat!
            </div>
          </div>
          <Form>
            <h3>New Message</h3>
            <Form.Field>
              <label for="message">Message:</label>
              <input type="text" id="message" placeholder="Enter your message..." />
              <button type="submit">Send</button>
            </Form.Field>
          </Form>
        </div>
        </div>
      )
    }
  }


export default ChatBox;
