 import axios from "axios";
import React from "react";
import Friend from './Friend';
import NewFriend from "./NewFriend";

class FriendList extends React.Component {
    constructor(props){
        super(props);
    
    }
   
    render(){
        return(
            <div>
               
                       
                            {this.props.friends.map(friend=> {
                               return <Friend friend={friend}
                               addNewFriendHandler={this.props.addNewFriendHandler}
                               saveEditedFriend={this.props.saveEditedFriend}
                               handleSetData={this.props.handleSetData}
                               />
                               
                            })}
                            <NewFriend submitFriendHandler={this.props.submitFriendHandler} />
                           
               
                
            </div>
        );
    }
}

export default FriendList