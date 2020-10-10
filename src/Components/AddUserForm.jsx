import React from 'react';


class AddUserForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            gen:"",
        }
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
        const user={name:this.state.name,email:this.state.email,gen:this.state.gen}
        this.props.addUser(user)
        this.setState({
            name:"",
            email:"",
            gen:""}
        )
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
                        

                        <input type="submit" value="submit"/>

                    </form>
                </div>
            </div>
        )
    
            
        
        
    }

}
export default AddUserForm;