import React from 'react'
import "./App.css"

function Story(props)
{ 
  return(
      <div className="story">
        <h1>{props.name}</h1>~age group~<h3>{props.on}</h3>
        <p> {props.content}</p>
        <h2>{props.cont}</h2> 
      </div>

  )
}
export default Story;