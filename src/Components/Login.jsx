
import React from 'react';
import {connect} from 'react-redux';
import {googleLogin, loginWithEmail} from '../Store/AuthActions';

 function Login(props){
     if(!props.auth.isLoaded) return null;
     if(props.auth.uid){props.history.push('/')}
    const handleSubmit=(e)=>{
        e.preventDefault()
        let email=e.target.elements.email.value
        let password=e.target.elements.password.value
        props.loginWithEmail(email,password);
    }

    return(
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input name="email" type="email" placeholder="Email Address"/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password"/>
                </div>
                <hr/>
                <button type="submit">Login</button>
                <hr/>
                <button onClick={props.googleLogin} type="submit"><img src="https://bloomfield.edu/sites/default/files/2020-01/google_logo.png" 
                    alt="google sign in" width="100"/></button>
            </form>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToProps={
    loginWithEmail,
    googleLogin
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)