import React from 'react';
import './card-style.css';
//import './Page';



const Card = props=>{
    return(
    <div className="card text-center shadow">
    <div className="overflow">
    
                <img src={props.imgsrc} alt="img 1" className="card-img-top" />
                
    </div>

            <div className="card-body text-dark ">
                <h4 className="card-title">{props.title} </h4>
                <p className="card-text ">{props.text} </p>
                <a href={props.link}> Read more </a>

            </div>
            
    </div>
       
    
        

          );
                    };
export default Card;