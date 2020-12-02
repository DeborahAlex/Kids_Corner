import React from 'react'

import "./App.css"


function Activity(props)
{ 
  
  return(
      <div className="activity">
        <h1>{props.name}</h1>~age group~<h3>{props.on}</h3>
        <p> {props.content}</p>
        <h2>{props.cont}</h2> 
      </div>

  )
}
export default Activity;


 