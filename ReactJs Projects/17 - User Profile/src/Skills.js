// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.
import React from 'react'
export default class Skills extends React.Component{
    render(){
      return(
        <>
          <ul className="horizontal-menu">
           <li> <button className="btn">HTML</button></li>
            <li><button className="btn">CSS</button></li>
            <li><button className="btn">JavaScript</button></li>
            <li><button className="btn">React</button></li>
            <li><button className="btn">Node</button></li>
          </ul>
        </>
      )
    }
}