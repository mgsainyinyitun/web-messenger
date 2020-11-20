import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import './style.css';
import {useState} from 'react';

import { signin } from '../../actions';
import { Redirect } from 'react-router-dom';

/**
* @author
* @function LoginPage
**/



const LoginPage = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword]  = useState('');
  const dispatch  = useDispatch();



  const userLogin=(e)=>{
    e.preventDefault();
    if(email === ""){
      alert("Email is required");
      return;
    }
    if(password === ""){
      alert("Password is required");
      return;
    }

      dispatch(signin({email,password}));

  }
  if(auth.authenticated){
    return <Redirect to = '/'/>
  }

  return(
    <Layout>
      <div className = "loginContainer">
       <Card>
          <form onSubmit={userLogin}>
            <input type="text"
            name = 'email'
            value = {email}
            onChange = {e => setEmail(e.target.value)}
            placeholder="Email"
            />
            <input type="text"
            name = "password"
            value = {password}
            onChange = {e => setPassword(e.target.value)}
            placeholder="password"
            />
            <div>
              <button>Login</button>
            </div>
          </form>
          </Card>
      </div>
    </Layout>
    
   )

 }

export default LoginPage