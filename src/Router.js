import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import App from './App';
import EditForm from './Components/EditForm';
import Register from './Components/Register';
import Login from './Components/Login';
import ProtectedRoute from './ProtectRoute';

const Router =()=>{

    return(
    <BrowserRouter>
        <ProtectedRoute exact={true} path="/" component={App}/> 
        <ProtectedRoute exact={true} path ="/edit/:id" component={EditForm} />
        <Route exact={true} path ="/register" component={Register} />
        <Route exact={true} path ="/login" component={Login}/>
    </BrowserRouter>
    )
}
export default Router 