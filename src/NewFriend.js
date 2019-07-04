import React from "react";


class NewFriend extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: '',
            age:'',
            email:''
        }
    }

    addNewFriendHandler= event=> {
        const name= event.target["name"];
        const value= event.target.value;
        this.setState({[name]:value})
       // this.setState({friend:event.target.value,
                  //  name: event.target.age,
                   // email:event.target.value
               // });
  }
    render(){
    return<div>
        <div> 
        <input 
        type="text"
        placeholder="Add a New Friend"
        onChange={this.addNewFriendHandler}
        value={this.state.name}
        name="name"
        />
        </div>
        <div>
        <input 
        type="text"
        placeholder="Add Age"
        onChange={this.addNewFriendHandler}
        value={this.state.age}
        name="age"
        />
        </div>

        <div>
        <input 
        type="text"
        placeholder="Add an Email"
        onChange={this.addNewFriendHandler}
        value={this.state.email}
        name="email"
        />
        </div>

        <button onClick={() => this.props.submitFriendHandler(this.state)}> Submit Friend</button>
    </div>
    }
}

export default NewFriend;