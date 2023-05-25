import React from "react";
import './stage.css';
import Button from "./button";
function Stage({name,salary,company,children}){
    return(
        <>
        <div className="container">

            <p className="stagee">
            
          { name} <br></br>    
         {salary} <br></br> 
         {company}
          
           
            </p>

            {children}
          </div>

          </>
        )
}

export default Stage;