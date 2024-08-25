import React, { useState } from 'react';
import styles from './Login.module.css';
import { Tilt } from 'react-tilt';

const options = {
    reverse: false,
    max: 5,
    perspective: 1000,
    scale: 1.0,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

<<<<<<< HEAD
    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };
=======
  const handlesubmit = (message) => {
      console.log(message)
  }
    
  return (
    <div className={styles.main_frame}>
        <div className="frame_top">
            <h1>Login</h1><br></br>
        </div>
    
        <form action={handlesubmit("my message")}>
            <div className="">
                <div className="">
                    <label for="email@gmail.com" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
            </div>
            <div className="">
                <div className="">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
>>>>>>> dd476b203d2aa108f8422defae0ee891350e3cdd

    const handleSubmit = (message) => {
        console.log(message);
        // Add your login logic here
    };

    return (
        <Tilt className="mt-5" options={options}>
            <div className={styles.main_frame} id={styles.login}>
                <div className="frame_top">
                    <h1 className={`login my-5 text-7xl text-warning ${styles.h1}`}>Login</h1>
                </div>

                <form
                    id={styles.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit('my message');
                    }}>


                        {/* inputbox1 */}
                    <div className={`inputbox1 mb-2 ${styles.inputbox1}`}>
                        <label htmlFor="input1" className="form-label"></label>

                        {/* input1 username */}
                        <input
                            type="text"
                            className={`input1 form-control ${styles.input1}`}
                            placeholder="Username"
                            required
                            id="input1"
                            aria-describedby="emailHelp"
                        />
                        <i className={`ms-2 uil uil-user ${styles.uil1}`}></i>
                    </div>


                    {/* inputbox2 */}
                    <div className={`inputbox2 ${styles.inputbox2}`}>
                        <label htmlFor="input2" className="form-label"></label>

                        {/* input2 password*/}
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            className={`input2 form-control ${styles.input2}`}
                            placeholder="Password"
                            required
                            id="input2"
                        />
                        

                        {/* passwordEye */}
                        <span
                            id="togglePassword"
                            className={`ms-2 ${styles.uil2}`}
                            onClick={handleTogglePassword}
                            style={{ cursor: 'pointer' }}
                        >
                            {passwordVisible ? (
                                <i id="eyeOpen" className="uil uil-eye"></i>
                            ) : (
                                <i id="eyeClosed" className="uil uil-eye-slash"></i>
                            )}
                        </span>


                        {/* Remember Me Checkbox */}
                        <div className={`forgetpw ${styles.forgetpw}`}>
                            <label htmlFor="checkbox">
                                <input type="checkbox" className="me-2" id="checkbox" />
                                <span>Remember Me</span>
                            </label>


                            {/* Forget Password */}
                            <div className={`pw ${styles.pw}`}>
                                <a href="#">Forget password?</a>
                            </div>
                        </div>
                        <br />


                        {/* Login Button */}
                        <button
                            type="submit"
                            className={`submit mt-0 mb-3 btn ${styles.btn}`}
                            id="submit-button">
                            Login
                        </button> <br />


                        {/* lines & OR */}
                        <span className={`OR mx-9 login-form-copy ${styles.OR}`}>
                            <img
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
                                alt=""
                                className="inline-block"
                            />
                            <p className='px-2'>OR</p>
                            <img
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
                                alt=""
                                className="inline-block"
                            />
                        </span>


                        {/* Social Media Signup Buttons*/}
                        <div className={`mt-3 social-icons ${styles.socialicons}`}>


                            {/* facebook */}
                            <div className={`social-icon facebook ${styles.facebook}`}>
                                <span className="#">
                                    <a href="https://facebook.com">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </span>
                            </div>


                            {/* instagram */}
                            <div className={`social-icon instagram ${styles.instagram}`}>
                                <span className="#">
                                    <a href='https://instagram.com'>
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </span>
                            </div>


                            {/* google */}
                            <div className={`social-icon google ${styles.google}`}>
                                <span className="#">
                                    <a href='https://google.com'>
                                        <i className="fa-brands fa-google"></i>
                                    </a>
                                </span>
                            </div>


                            {/* linkedin */}
                            <div className={`social-icon linkedin ${styles.linkedin}`}>
                                <span className="#">
                                    <a href='https://linkedin.com'>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </span>
                            </div>


                            {/* twitter */}
                            <div className={`social-icon twitter ${styles.twitter}`}>
                                <span className="#">
                                    <a href='https://twitter.com'>
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                </span>
                            </div>
                        </div>

                        {/* Don't have an account & Sign Up */}
                        <div className={`mt-4 createnew ${styles.createnew}`}>
                            <span>
                                Don't have an account? <a className='ms-2' href="./Signup">Sign Up</a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </Tilt>
    );
};

