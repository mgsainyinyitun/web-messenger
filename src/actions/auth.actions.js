//import {firestore} from 'firebase';
//import firebase from 'firebase';
import { authConstant } from './constants';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const signup = (user)=>{
    return async (dispatch)=>{
        const db = firebase.firestore();

        dispatch({type:`${authConstant.USER_LOGIN}_REQUEST`});

        await firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then(data =>{
            console.log(data);
            const currentUser = firebase.auth().currentUser;
            const name = `${user.firstName} ${user.lastName}`;
            currentUser.updateProfile({
                displayName:name,
            }).then(()=>{
                // update successfully
                //console.log("Update profile successfully");
                db.collection('users').add({
                    firstName:user.firstName,
                    lastName: user.lastName,
                    uid:data.user.uid,
                    createdAt : new Date()
                }).then(()=>{
                    //successful
                    const loggedInUser = {
                        firstName:user.firstName,
                        lastName: user.lastName,
                        uid:data.user.uid,
                        email:user.email
                    }
                    localStorage.setItem('user',JSON.stringify(loggedInUser));
                    console.log('User Logged In successfull');
                    dispatch({
                        type: `${authConstant.USER_LOGIN}_SUCCESS`,
                        payload: {user:loggedInUser}
                    })

                }).catch((error)=>{
                    console.log(error);
                    dispatch({
                        type:`${authConstant.USER_LOGIN}_FAILURE`,
                        payload: {
                            error
                        }
                    });
                });
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }
}


export const signin = (user)=>{
    console.log(user);
    return async dispatch =>{
        dispatch({
            type: `${authConstant.USER_LOGIN}_REQUEST`
        });
        await firebase.auth()
        .signInWithEmailAndPassword(user.email,user.password)
        .then((data)=>{
            console.log(data);
            const name = data.user.displayName.split(" ");
            const firstName = name[0];
            const lastName = name[1];

            const loggedInUser = {
                firstName,
                lastName,
                uid:data.user.uid,
                email:data.user.email
            }
            localStorage.setItem('user',JSON.stringify(loggedInUser));
            dispatch({
                type:`${authConstant.USER_LOGIN}_SUCCESS`,
                payload:{user:loggedInUser}
            })
        })
        .catch(error =>{
            console.log(error);
            dispatch({
                type:`${authConstant.USER_LOGIN}_FAILURE`,
                payload:{error}
            })
        })
    }
}


export const isLoggedInUser = ()=>{
    return async dispatch =>{
        const user = localStorage.getItem('user')?
        JSON.parse(localStorage.getItem('user')):null;

        if(user){
            dispatch({
                type:`${authConstant.USER_LOGIN}_SUCCESS`,
                payload:{user}
            })
        }else{
            dispatch({
                type:`${authConstant.USER_LOGIN}_FAILURE`,
                payload:{error : 'Login again please'}
            })

        }

    }
}