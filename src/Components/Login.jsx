import React from 'react'
import styles from './Login.module.css'

export const Login = () => {

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

         
    
    
        </form>
    </div>
    )
}

