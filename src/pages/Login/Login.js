import React from 'react'
import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
function Login() {
    const { signInUsingGoogle, processLogin, registerNewUser } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password, name);
        }

    }

    return (
        <Container>
            <Row>
                <Col xs={10} md={6} className="mx-auto mt-5 mb-5 card p-5 shadow-lg">

                    <form onSubmit={handleRegistration}>
                        <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                        {!isLogin && <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Enter Your Name" />
                            </div>
                        </div>}
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Enter Email" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Enter Password" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <button type="submit" className="btn btn-primary">
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                        {/*  <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button> */}

                    </form>
                    <h5 className="mt-3 mb-3">OR</h5>
                    <button onClick={signInUsingGoogle} className="btn btn-warning " style={{ width: "150px" }}>Google Sign In</button>


                </Col>
            </Row>

        </Container>


    )
}

export default Login
