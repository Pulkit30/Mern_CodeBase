// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import React from 'react'
export default class Hero extends React.Component{
    render(){
      return(
        <>
          <div>
            <p><b>Name: Pranav Sharad Yeole</b></p>
            <p>Email: pranav@google.com</p>
            <p>Phone: 85464665544</p>
            <p>Address: ABC, xyz street.</p>
          </div>
        </>
      )
    }
}