import React from 'react'
import {Link} from 'react-router-dom';

const Users=({id,name,email,gen,removeitem})=>{
    
    const handleClick=()=>{
        removeitem(id)
       
    }
        return(
            <div>
                <div>Name:{name}</div>
                <div>Email:{email}</div>
                <div>Gen:{gen}</div>
                <button onClick={handleClick}>delete</button>
                <Link to={`/edit/${id}`}><button>edit</button></Link>
                
                <hr/>
            </div>
        )
        
}
export default Users;