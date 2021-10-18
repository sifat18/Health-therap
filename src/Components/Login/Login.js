import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Login = () => {
    const { googleSign, loginPass, setisLoading } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    const handleLogin = () => {
        googleSign().then(result => {
            history.push(redirect_url)
        }).finally(() => setisLoading(false))
    }
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const hadlePassblur = e => {
        setpass(e.target.value)
    }
    const hadleEmailblur = e => {
        setemail(e.target.value)
    }
    const handleSign = (e) => {
        e.preventDefault();
        loginPass(email, pass);
        history.push('/home')
    }
    return (
        <Container className='my-5'>
            <h2 className='text-center fs-1 fw-bold'>Login with Email & Password</h2>

            <form className=' pt-3' onSubmit={handleSign}>
                <input className='inputs my-4 w-50' onBlur={hadleEmailblur} type="email" placeholder='email' name="email" id="email" />
                <input className='inputs my-4 w-50' onBlur={hadlePassblur} type="password" placeholder='password' name="pass" id="pass" />
                <button className='inputs btn-danger mt-2 w-25' type="submit">Login</button>
            </form >
            <div className='text-center mt-5 '>
                <p className='fs-3 fw-nromal'>New user? <NavLink to='/register'>Click me</NavLink></p>
                <p>-------OR------</p>
                <button className='btn btn-success mb-5 ' onClick={handleLogin} >Google Sign In</button>
            </div>
        </Container>
    );
};

export default Login;