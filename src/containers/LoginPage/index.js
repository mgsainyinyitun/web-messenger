import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import './style.css';
import {useState} from 'react';

/**
* @author
* @function LoginPage
**/



const LoginPage = (props) => {
  const {email,setEmail} = useState('');
  const {password,setPassword}  = useState('');



  return(
    <Layout>
      <div className = "loginContainer">
       <Card>
          <form className>
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