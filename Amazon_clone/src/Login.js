import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from './Fire';

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e=> {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(auth => {
      history.push('/')
    }).catch(error => alert(error.message))
  }
  const register = e=> {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
      if (auth) {
        history.push('/')
      }
    }).catch(error => alert(error.message))
  } 
  return (
    <div className='login'>
        <Link to = '/'>
       <img className='Login_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='banner'/> 
       </Link>

       <div className='login_container'>
         <h1>Sign in</h1>
         <form>
           <h5>E-mail</h5>
           <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

           <h5>Password</h5>
           <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

           <button type='submit' onClick={signIn}className='login_signInButton'>Sign In</button>
         </form>
         <p>By signing in you agree to the amazon conditions of use and sale. Please see our privacy Notice, our Cookies Notice and our Interset-BAsed Ads Notice </p>

         <button onClick={register} className='login_registerButton'>Create your amazon Account</button>
       </div>
    </div>
    
  )
}

export default Login