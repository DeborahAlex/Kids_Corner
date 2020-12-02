import React from 'react'
import "./App.css"
 function Fcs(props){
     return(
     <div className="flower">
        <h2>PROCEDURE:</h2>
      <ul>
       <li>Fill your containers with water and add few drops of coloring. Mix it well.</li>
       <li>Dip the flowers in the glasses such that the stems are well-immersed in water.</li>
       <li>Keep them in an open area, such as window or a balcony for a few days and observe</li>
      </ul>
        <h2 className="inf">INFERENCE</h2>
        The centers and the petals will turn the color of the water they were dipped in.
        <h2 className="obs">WHY THIS HAPPENS?</h2>
        The xylem draws in the colored water and it travels up through the stem and flows to the leafs, flowers and petals, thus the coloured water gets distributed.
     </div>
     )
 }
 export default Fcs;