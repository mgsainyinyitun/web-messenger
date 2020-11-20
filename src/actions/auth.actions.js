//import {firestore} from 'firebase';
import firebase from 'firebase';

export const signup = (user)=>{
    return async (dispatch)=>{
        const db = firebase.firestore();
        await firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then(data =>{
            console.log(data);
            const currentUser = firebase.auth().currentUser;
            const name = `${user