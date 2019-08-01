import React from 'react';
import CreateAccountForm from '../CreateAccountForm'
import { Image } from 'semantic-ui-react'
import backgroundimg from '../images/create-acct-img.jpg'

function CreateAccountContainer(){
    return(
      <div>
        <Image src={backgroundimg}/>
        <CreateAccountForm />
      </div>
    )
}

export default CreateAccountContainer;
