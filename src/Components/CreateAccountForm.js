import React from 'react';
// import  from '../'

function CreateAccountForm(){
    return(
      <div>
        <br/>
        <form>
          <label>Name</label>
          <input type="text" name="name"/>
          <br/>
          <label>Username</label>
          <input type="text" name="username"/>
          <br/>
          <label>Password</label>
          <input type="text" name="password"/>
          <br/>
          <label>Address</label>
          <input type="text" name="address"/>
          <br/>
          <label>Age</label>
          <input type="number" name="age"/>
          <br/>
          <label>Birthday</label>
          <input type="date" name="birthday"/>
          <br/>
          <label>Parent</label>
          <input type="checkbox" name="parent"/>
          <br/>
          <label>Married</label>
          <input type="checkbox" name="married"/>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    )
}

export default CreateAccountForm;
