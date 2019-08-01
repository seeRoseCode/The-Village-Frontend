import React from 'react';
import LoginForm from '../LoginForm'
import { Container, Image } from 'semantic-ui-react'
import backgroundimg from '../images/login-page-img.jpg'


function LoginContainer(){
    return(
      <div>
        <Image src={backgroundimg}/>
        <LoginForm />
      </div>
    )
}

export default LoginContainer;
