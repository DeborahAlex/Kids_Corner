import React from 'react'
import "./App.css"
 function Wws(props){
     return(
     <div className="water">
        <h2>PROCEDURE:</h2>
      <ul>
       <li>Set your two identical glasses about 2 inches apart. Pour water into one of the cups until it’s halfway full.</li>
       <li>Add a few drops of your favorite food coloring to the water.</li>
       <li>Stir the food coloring until the water is one color.</li>
       <li>Take a strip of paper towel and fold it until it’s 1 to 2 inches wide.</li>
        <li>Place one end of the paper towel strip into the colored water and the other end into the empty glass. Let them sit for one hour.</li>
        <li>Return to the glass and observe what happened.</li>
      </ul>
       <h2 className="inf">INFERENCE</h2>
       you will find that half of the colored water traveled to the other side of the cup! The paper towel will also be the same colours.
        <h2 className="obs">WHY THIS HAPPENS?</h2>
        At first, this experiment appears to defy gravity.
But this is happening with a little bit of magic called capillary action. Essentially, the adhesive force between the paper towel and the water are more powerful than the cohesive force inside the water itself. This results in the paper towel pulling the water up. The water keeps traveling up the paper towel, across the bridge and into the other cup.    
 </div>
     )
 }
 export default Wws;