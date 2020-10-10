 export const adduser=(user)=>{
     return(dispatch,state, {getFirestore}
     )=>{
         getFirestore().collection('users').add(user).then((doc)=>{
             console.log(doc)
            //  dispatch(
            //         {
            //         type:"ADD_USER",
            //         payload:user
            //        }
            //  )
         }) 
     }
    
 }

 export const deluser=(user_id)=>{
     return(dispatch,state,{getFirestore})=>{
        getFirestore()
        .collection('users')
        .doc(user_id)
        .delete()
        .then(()=>{})
        //  type:"DELETE_USER",
        //  payload:user_id
     
        
     }
     
 }
 export const editeduser=(user_id,updatedInfo)=>{
    return(dispatch,state,{getFirestore})=>{
        getFirestore()
        .collection('users')
        .doc(user_id)
        .set(updatedInfo)
        
    }
    
}

export const getAllUsers=()=>{

    return(dispatch,state,{getFirestore} )=>{
        getFirestore()
        .collection('users')
        .orderBy('name','desc')
        .onSnapshot((snapshot)=>{
            let users=[];
            snapshot.forEach((doc) => {
                users.push({...doc.data(), id:doc.id})
            });
            console.log(users)
            dispatch({
                type:"SET_ALL_USERS",
                payload:users
            })
        },
        (error)=>{})
    }

}