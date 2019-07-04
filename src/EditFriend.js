import React from "react";

class EditFriend extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: '',
            age:'',
            email:''
    };
}

editHandler=(event)=>{
    const name= event.target["name"];
    const value= event.target.value;
    this.setState({[name]:value})
}

    render() {
  return  (
  <div>
      <form onSubmit={(e)=> {e.preventDefault(); this.props.saveEditedFriend(this.state)}}>
     <input
  placeholder="Edit Name Here"
  type="text"
  onChange= {this.editHandler}
  value={this.state.name}
  name="name"
  />
    <input
  placeholder="Edit Age Here"
  type="text"
  onChange= {this.editHandler}
  value={this.state.age}
  name="age"
  />
    <input
  placeholder="Edit Email Here"
  type="text"
  onChange= {this.editHandler}
  value={this.state.email}
  name="email"
  />
   <button > Save </button>
   </form>
   </div>
  );
}
}

export default EditFriend;