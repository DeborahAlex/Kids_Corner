import React from 'react'

import "./App.css"
import { useState } from 'react'

function Waffle(props)
{ 
  
  return(
      <div className="waffle">
        <h1>{props.name}</h1>~<h3>{props.on}</h3>
        <p> {props.content}</p>
        <h2> {props.cont}</h2>
      </div>

  )
}
export default Waffle;

