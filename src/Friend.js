import React from "react";
import EditFriend from "./EditFriend";
import axios from "axios";


 class Friend extends React.Component {
     constructor(props) {
         super(props);
         this.state= {
             showEditForm:false,
           
         };
     }

     
     toggleForm=()=>{
         this.setState({showEditForm:!this.state.showEditForm});
     };
     saveEditedFriend=(editedFriend)=> {
         //const neweditedFriend= {neweditedFriend:this.state.editedFriend};
         axios.put(`http://localhost:5000/friends/${this.props.friend.id}`, editedFriend)
         .then(response=> {
             console.log(response);
             this.props.handleSetData(response.data);
         })
         .catch(error=> console.log(error));
     };

     render(){
     return(
         <div  key = {this.props.friend.id} friend= {this.props.friend} >
             <ul>
               <p>{this.props.friend.name}</p> 
               <p>{this.props.friend.age}</p> 
               <p>{this.props.friend.email}</p> 
               {this.state.showEditForm ? (
                   <EditFriend 
                  
                   editHandler={this.props.editHandler}
                   saveEditedFriend={this.saveEditedFriend}
                   
                   />
               ): null }
               <button onClick={this.toggleForm}> Show Edit Form</button>
               
                            
                </ul>
                
         </div>
     );
 }
}
 export default Friend;