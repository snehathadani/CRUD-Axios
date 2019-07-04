import React from 'react';
import axios from "axios";
import './App.css';
import FriendList from './FriendList';

 
class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      friendsdata:[]
    
  }
}
  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    //.then (data=> {console.log(data);});
    .then (response=> {console.log("cdm", response);
    this.setState({friendsdata:response.data});
  })
  .catch(err=> {
    console.log(err);
  })
  }

  
  submitFriend= (newFriend)=> {
    axios.post('http://localhost:5000/friends', newFriend)
    .then(response =>{ console.log("Post REsponse",response)
    this.setState({friendsdata:response.data, newFriend:''})
  })
    .catch(error=> console.log(error));
  
  };

  handleSetData = data=> this.setState({friendsdata:data});


render(){
  return (
    <div className="App">
     HEYY 
     <FriendList friends={this.state.friendsdata}
       saveEditedFriend={this.props.saveEditedFriend}
        submitFriendHandler={this.submitFriend}
        handleSetData={this.handleSetData}/>
    </div>
  );
}
}

export default App;
