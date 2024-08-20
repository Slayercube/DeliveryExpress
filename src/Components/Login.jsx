import React from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { Tilt } from 'react-tilt'

const Options = {
	reverse:        false,  // reverse the tilt direction
	max:            25,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const Login = () => {

    const handlesubmit = (message) => {
        console.log(message)
    }

    return (
        <Tilt className='mt-5' options={Options} >
            <div  className= {styles.main_frame} id={styles.login}>
            <div className="frame_top">
                <h1 className='login my-5 text-7xl text-warning' id={styles.h1}>Login</h1>
            </div>

            <form id={styles.form} action={handlesubmit("my message")}>

                <div className=" inputbox1 mb-2" id={styles.inputbox1}>
                <label for="input1" className="form-label"></label>

                    <input type="text" className=" input1 form-control" placeholder='Username' required id={styles.input1} aria-describedby="emailHelp"></input>
                    <i className=" ms-2 uil uil-user" id={styles.uil1}></i>
                </div>


                <div className="inputbox2" id={styles.inputbox2}>
                <label for="input2" className="form-label"></label>
                
                    <input type="password" className="input2 form-control" placeholder='Password' required id={styles.input2}></input>
                    <i className=" ms-2 uil uil-lock" id={styles.uil2}></i>


                    <div className="forgetpw" id={styles.forgetpw}>
                        <label for='checkbox'>
                            <input type='checkbox' className='me-2' id={styles.checkbox} />
                            <span>Remember Me</span>
                        </label>
                        <div className="pw" id={styles.pw}><a href="">Forget password?</a></div>
                    </div>
                    <br></br>
                    <button type="submit" className=" mt-0 btn" id={styles.btn}>Login</button>
                    <div className="mt-4 createnew" id={styles.createnew}>
                        <span>Dont't have an account? <a href='./Signup'>Sign Up</a>
                        </span>
                    </div>
                </div>

            </form>
        </div>
    </Tilt>
    )
        
}

export default Login;