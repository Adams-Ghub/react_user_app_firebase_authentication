import React from 'react';
import AddUserForm from './Components/AddUserForm';
import {connect} from 'react-redux';
import {LogoutUser} from './Store/AuthActions';
import Users from './Components/Users';
import {adduser, deluser, getAllUsers} from './Store/UserActions';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    // this.state={
    //   users:[
    //     {name:"Asamoah Gyan", email:"gyanasamoah3@gmail.com", gen:4},
    //     {name:"Andre Ayew", email:"andreayew@gmail.com", gen:6},
    //     {name:"Kasim Nuhu", email:"kasimnuhu@gmail.com", gen:7}
    //   ]
    // }

    this.handleAddUser=this.handleAddUser.bind(this)
  }
  handleAddUser=(item)=>{
    this.props.addNewUser(item)
  }
  handleDelete=(user_id)=>{
    this.props.deleteUser(user_id)
    
  }

  componentDidMount(){
    this.props.getAllUsers();
  }
  render(){
      return (
        <div className="App" style={{
                 display:'flex',
                 flexDirection:"row"
                                    }}>
            
        
          <div 
            style={{margin:"10px",
                    padding:"15px",
                    width:"25vw",
                    backgroundColor:"#eeeeee" }} >
            <button onClick={this.props.LogoutUser}>Logout</button>
                <hr/>
              <AddUserForm addUser={this.handleAddUser}/>                     
          </div>
          <div>
              {this.props.users.map((user)=>{
              return <Users 
                key={user.id} 
                id={user.id} 
                name={user.name} 
                email={user.email} 
                gen={user.gen} 
                removeitem={this.handleDelete}
                 />
                 
               })
              }
          </div>
        </div>
      );
    }
}

const mapStateToProps=(state)=>{
  console.log(state) 
  return{
  users:state.usersState.users }
}

const mapDispatchToProps={
  addNewUser:adduser,
  deleteUser:deluser,
  getAllUsers,
  LogoutUser
     
}
  

export default connect(mapStateToProps, mapDispatchToProps)(App);
