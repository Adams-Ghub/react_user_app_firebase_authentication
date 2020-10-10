import React from 'react';
import {connect} from 'react-redux';
// import UserReducer from '../Store/UserReducer';
import {editeduser} from '../Store/UserActions';

class EditForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: props.user.name,
            email: props.user.email,
            gen: props.user.gen
        }
        this.id=props.match.params.id
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const update={name:this.state.name,email:this.state.email,gen:this.state.gen}
        this.props.editedUser(this.id,update)
        this.setState({
            name:"",
            email:"",
            gen:""}
        )
        this.props.history.push("/");
    }


    render(){

        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                        <label htmlFor="">Name:</label> 
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                      
                        <div>
                            <label htmlFor="">Email:</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                            
                        <div>
                        <label htmlFor="">Gen:</label>
                            <input type="number" name="gen" value={this.state.gen} onChange={this.handleChange}/>
                        </div>
                        

                        <input type="submit" value="update"/>

                    </form>
                </div>
            </div>
        )
    
            
        
        
    }

}
    const mapStateToProps=(state, ownProps)=>({
         user: state.usersState.users.find(user=>user.id===ownProps.match.params.id)
    })

    const mapDsipatchToPrps={
        editedUser:editeduser
    }

export default connect(mapStateToProps, mapDsipatchToPrps)(EditForm);