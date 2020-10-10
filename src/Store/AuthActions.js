// import { firebaseStateReducer } from "react-redux-firebase";

export const registerWithEmail=(email,password)=>{
    return(dispatch,state,{getFirebase})=>{
        let firebase=getFirebase();
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response)=>{console.log(response)})
        .catch((error)=>{console.log(error)})
    }
   
}

export const loginWithEmail=(email,password)=>{
    return(dispatch,state,{getFirebase})=>{
        let firebase=getFirebase();
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then((response)=>{console.log(response)})
        .catch((error)=>{console.log(error)})
    }
}

export const googleLogin=()=>{
    return(dispatch,state,{getFirebase})=>{
        let firebase=getFirebase();
        var provider=new firebase.auth.GoogleAuthProvider()
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((response)=>{console.log(response)})
        .catch((error)=>{console.log(error)})
    }
}

export const LogoutUser=()=>{
    return(dispatch,state,{getFirebase})=>{
        let firebase=getFirebase();
        
        firebase
        .auth()
        .signOut()
        .then((response)=>{console.log(response)})
        .catch((error)=>{console.log(error)})
    }
}