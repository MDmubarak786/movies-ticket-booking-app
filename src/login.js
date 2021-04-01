import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './login-hero.gif';
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function validateForm() {
        return password.length > 0 && Email.length > 0;
    }
    let history = useHistory();
    function HandleSubmit(event) {
        event.preventDefault();
        const data = {
            'Email': Email,
            'password': password
        }
        console.log({ data });
        history.push('/home');
    };

    return (
        <div id="login" >
            <div className="row">
                <div id="login-form" className="col-lg-6">
                    <h1><a href="/home">MB site</a></h1>
                    <h3>Welcome Back!</h3>

                    <p>Login to get started </p>

                    <form onSubmit={HandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Your e-mail</label>
                            <input autofocus type="email" name='email' placeholder="name@domain.com" className="form-control" id="email" value={Email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="pwd">Password</label>
                            <input placeholder="at least 8 characters" name='password' type="password" class="form-control" id="pwd" value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" /> Keep me signed in</label>
                        </div>

                        <Link to='/home'><button type="submit" className="btn submit-btn" disabled={!validateForm()}>Log in</button></Link>
                        <p className="mail-center"><a
                            href="mailto:MBsite@gmail.com?subject=Forgot Password for MBsite&body=Hey! Please help me out ASAP.">Forgot
                            Password?</a></p>
                    </form>
                </div>
                <div id="login-img" className="col-lg-6">
                    <img width="100%" src={logo} alt="login-hero" />
                </div>
            </div>
        </div>

    );
}

export default LoginForm;