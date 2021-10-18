import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../context/useAuth';

const Register = () => {
    const { createUser } = useAuth();
    const history = useHistory();
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [repassword, setrepassword] = useState('')
    const [error, seterror] = useState('')
    const [name, setname] = useState('')
    const hadlePassblur = e => {
        console.log(e.target.value);
        setpass(e.target.value)
    }
    const hadlePass = e => {
        console.log(e.target.value);
        setrepassword(e.target.value);
        if (pass === repassword) {
            seterror('')
        } else {
            seterror('passward doesnt match')

        }
    }
    const hadleEmailblur = e => {
        console.log(e.target.value);
        setemail(e.target.value)
    }
    const hadlename = e => {
        console.log(e.target.value);
        setname(e.target.value)
    }
    const handleRegister = e => {
        e.preventDefault();
        createUser(name, email, pass);
        history.push('/home')
    }
    return (
        <Container fluid className='my-5 py-2'>
            <h2 className='text-center fs-1 fw-bold'>Register</h2>
            <form className='mt-3 pt-2' onSubmit={handleRegister}>
                <input required className='inputs my-4 w-50' type="text" onBlur={hadlename} placeholder='name' name="name" id="name" />
                <input required className='inputs my-4 w-50' type="email" onBlur={hadleEmailblur} placeholder='email' name="email" id="email" />
                {error ? <p className='text-danger text-center'>{error}</p> : ''}
                <input required className='inputs my-4 w-50' type="password" onBlur={hadlePassblur} placeholder='password' name="pass" id="pass" />
                <input required className='inputs my-4 w-50' type="password" onBlur={hadlePass} placeholder='re-enter password' name="re-pass" id="pass" />
                <button className='inputs btn-danger w-25 mt-2 mb-5'>Register</button>
            </form>

        </Container>
    );
};

export default Register;