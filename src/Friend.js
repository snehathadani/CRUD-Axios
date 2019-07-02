import React from "react";

 const Friend= (props)=> {
     return(
         <div  key = {props.friend.id} friend= {props.friend} >
             <ul>
               <p>{props.friend.name}</p> 
               <p>{props.friend.age}</p> 
               <p>{props.friend.email}</p> 
                </ul>
                
         </div>
     );
 }
 export default Friend;