import React from 'react'
import Layout from '../../components/Layout'
import './style.css';
import Card from '../../components/UI/Card';
import {useState} from 'react';
import {signup} from '../../actions';
import { useDispatch } from 'react-redux';

/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName]  = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword]  = useState('');
  const dispatch = useDispatch();

  const registerUser = (e)=>{
    e.preventDefault();
    const  user = {
      firstName,lastName,email,password,
    }
    console.log(user);
    dispatch(signup(user))
  }

  return(
    <Layout>
      <div className = "loginContainer">
       <Card>
          <form onSubmit = {registerUser}>
            <h3>Register Your Account</h3>
            <input type="text"
            name = 'firstName'
            value = {firstName}
            onChange = {e => setFirstName(e.target.value)}
            placeholder="First Name"
            />
            <input type="text"
            name = "lastName"
            value = {lastName}
            onChange = {e => setLastName(e.target.value)}
            placeholder="Last Name"
            />

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

export default RegisterPage;