import React from 'react'

import "./App.css"
import { useState } from 'react'

function Sandwiches(props)
{ 
  
  return(
      <div className="sandwich">
        <h1>{props.name}</h1>~<h3>{props.on}</h3>
        <p> {props.content}</p>
        <h2>{props.cont}</h2>  
      </div>

  )
}
export default Sandwiches;


 