import React, { useContext, useState } from 'react';
import './Login.css';
import fb from '../../Images/Icon/fb.png';
import google from '../../Images/Icon/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmail, signInWithEmail, signInWithFacebook, signInWithGoogle, updateUserProfile } from './firebase';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser, bookingInfo] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        photo: '',
        confirmPassword: '',
        passwordMatch: false,
        passwordNotMatch: false,
        error: '',
        success: false
    });
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (event) => {
        let fieldValidation = true;
        if (event.target.name === 'email') {
            fieldValidation = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            fieldValidation = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]){6,20}/.test(event.target.value);
        }
        if (event.target.name === 'confirmPassword') {
            user.confirmPassword = event.target.value;
            if (user.password === user.confirmPassword) {
                user.passwordMatch = true;
            } else {
                user.passwordNotMatch = true;
            }
        }
        if (fieldValidation) {
            const newUser = { ...user };
            newUser[event.target.name] = event.target.value;
            setUser(newUser);
        }
    }

    const handleSubmit = (event) => {
        if (newUser && user.email && user.password && user.passwordMatch) {
            createUserWithEmail(user.email, user.password)
                .then(data => {
                    setUser(data);
                    updateUserProfile(user.firstName, user.lastName);
                })
                .catch(error => {
                    setUser(error);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmail(user.email, user.password)
                .then(data => {
                    setUser(data);
                    setLoggedInUser(data);
                    history.replace(from);
                }).catch(error => {
                    setUser(error);
                })
        }
        event.preventDefault();
    }
    // handle google button
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(data => {
                setUser(data);
                setLoggedInUser(data);
                bookingInfo.origin && bookingInfo.destination ?
                    history.replace(from) : history.push('/')
            })
    }
    // handle facebook button
    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(data => {
                setUser(data);
                setLoggedInUser(data);
                bookingInfo.origin && bookingInfo.destination ?
                    history.replace(from) : history.push('/');
            })
    }

    return (
        <div className='login'>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-6 mx-auto">
                        <div className="form-area">
                            <h2>{newUser ? 'Create an account' : 'Login'}</h2>
                            <form onSubmit={handleSubmit}>

                                {
                                    newUser && <input type="text"
                                        onBlur={handleBlur}
                                        name="firstName"
                                        placeholder="First Name" />
                                }
                                {
                                    newUser && <input type="text"
                                        onBlur={handleBlur}
                                        name="lastName"
                                        placeholder="Last Name" />
                                }

                                <input type="email" onBlur={handleBlur}
                                    name="email" placeholder="Email" required />

                                <input type="password" onBlur={handleBlur}
                                    name="password" placeholder="Password" required />

                                {
                                    newUser && <input type="password"
                                        onBlur={handleBlur}
                                        name="confirmPassword"
                                        placeholder="Confirm Password" required />
                                }
                                {
                                    user.passwordNotMatch && <span className='text-danger text-left'>Password doesn't match</span>
                                }

                                {
                                    !newUser && <div>
                                        <input type="checkbox" name="checkbox" />
                                        <label htmlFor="checkbox">Remember Me</label>
                                        <a href="#" className="forget-password">Forgot Password</a></div>
                                }

                                <input type="submit" value={newUser ? 'Create an account' : 'Login'} />
                            </form>

                            <p>{newUser ? 'Already have an account? ' : 'Don’t have an account? '}
                                <button onClick={() => setNewUser(!newUser)}>
                                    {newUser ? 'Login' : 'Create an account'}
                                </button>
                            </p>
                            <p className="text-danger">{user.error}</p>
                            {
                                user.success && <p
                                    className="text-success">
                                    Account has been created successfully
                                </p>
                            }
                        </div>
                        <div className="social-area">
                            <div className="divider">
                                <p>Or</p>
                            </div>
                            <div className="fb-area">
                                <img src={fb} width="30" alt="Facebook" />
                                <button onClick={handleFacebookSignIn}>Continue with Facebook</button>
                            </div>

                            <div className="fb-area mt-2">
                                <img src={google} width="30" alt="Google" />
                                <button onClick={handleSignInWithGoogle}>Continue with Google</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;