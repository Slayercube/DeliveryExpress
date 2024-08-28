import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../../../Context';
// import { Tilt } from 'react-tilt';
import styles from './Register.module.css';

// const options = {
//   reverse: false,
//   max: 5,
//   perspective: 1000,
//   scale: 1.0,
//   speed: 1000,
//   transition: true,
//   axis: null,
//   reset: true,
//   easing: "cubic-bezier(.03,.98,.52,.99)",
// };





const Register = () => {

  // password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };


  const { values, setValues } = useContext(myContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/users/register', values);
      alert('User registered successfully');
      navigate('/login');
    } catch (err) {
      console.error('Error registering user:', err);
      alert('Error registering user');
    }
  };


  return (

    // <Tilt className="mt-5" options={options}>
    <div className={styles.main_frame} id={styles.signup}
    // className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20"
    >
      <div className="relative rounded mx-auto max-w-xl text-center">

        {/* Signup Header */}
        <div className="mx-auto text-md mb-5">
          <h1 className={`signup my-5 text-warning ${styles.h1}`}>
            Sign-Up
          </h1>
        </div>

        {/* Form */}
        <div className=" mx-auto w-full max-w-md">
          <form
            autoComplete="on"
            id={styles.form}
            onSubmit={handleSubmit}>






            <div className={`relative flex flex-col mb-4 userNameBox mb-2 ${styles.inputbox1}`}>
              <label htmlFor="username" className={`form-label font-bold text-dark mb-1 text-left`}></label>


              {/* username */}
              <input
                autoComplete="on"
                onChange={e => setValues({ ...values, username: e.target.value })}
                type="text"
                id="username"
                className={`m-auto username form-control block h-9 w-full rounded-md px-4 py-6 text-sm username form-control ${styles.username}`}
                placeholder="Username"
                required
              />

              <i className={`ms-2 fa-solid fa-user ${styles.uil1}`}></i>
            </div>





            {/* inputbox1  */}
            <div className={`relative flex flex-col mb-4 inputbox1 mb-2 ${styles.inputbox1}`}>
              <label htmlFor="firstname" className={`form-label font-bold text-dark mb-1 text-left`}></label>


              {/* firstname */}
              <input
                autoComplete="on"
                onChange={e => setValues({ ...values, firstname: e.target.value })}
                type="text"
                id="firstname"
                className={`m-auto firstname form-control block h-9 w-full rounded-md px-4 py-6 text-sm firstname form-control ${styles.firstname}`}
                placeholder="First Name"
                required
              />

              <i className={`ms-2 fa-regular fa-user  ${styles.uil1}`}></i>
            </div>






            {/* inputbox2  */}
            <div className={`relative flex flex-col mb-4 inputbox2 mb-2 ${styles.inputbox2}`}>
              <label htmlFor="lastname" className={`form-label font-bold text-dark mb-1 text-left`}></label>


              {/* lastname*/}
              <input
                autoComplete="on"
                onChange={e => setValues({ ...values, lastname: e.target.value })}
                type="text"
                id="lastname"
                className={`m-auto input4 form-control block h-9 w-full rounded-md px-4 py-6 text-sm 2 form-control ${styles.lastname}`}
                placeholder="Last Name"
                required
              />

              <i className={`ms-2 fa-regular fa-user  ${styles.uil1}`}></i>
            </div>






            {/* phoneBox */}
            <div className={`relative flex flex-col mb-4 phoneNumberBox mb-2 ${styles.phoneBox}`}>
              <label htmlFor="phone" className={`form-label font-bold text-dark mb-1 text-left`}></label>


              {/* phone*/}
              <input
                autoComplete="on"
                onChange={e => setValues({ ...values, phone: e.target.value })}
                type="number"
                id="phone"
                className={`m-auto input4 form-control block h-9 w-full rounded-md px-4 py-6 text-sm 2 form-control ${styles.phone}`}
                placeholder="Phone"
                required
              />

              <i className={`fa-solid fa-phone ${styles.phonelogo}`}></i>

            </div>





            {/* inputbox3 */}
            <div className={`relative flex flex-col mb-4 inputbox3 mb-2 ${styles.inputbox3}`}>
              <label htmlFor="email" className={`form-label font-bold text-dark mb-1 text-left`}></label>


              {/* email*/}
              <input
                autoComplete="on"
                onChange={e => setValues({ ...values, email: e.target.value })}
                type="email"
                id="email"
                className={`m-auto email form-control block h-9 w-full rounded-md px-4 py-6 text-sm form-control ${styles.email}`}
                placeholder="Email Address"
                required
              />

              <i className={`ms-2 fa-solid email fa-envelope ${styles.emaillogo}`}></i>
            </div>



            {/* inputbox4 */}
            <div className={`relative flex flex-col mb-2 inputbox4 ${styles.inputbox4}`}>
              <label htmlFor="password" className="form-label font-bold mb-1 text-dark text-left"></label>


              {/*password */}
              <input
                autoComplete="on"
                onChange={e => setValues({ ...values, password: e.target.value })}
                type={passwordVisible ? "text" : "password"}  // This toggles the type between 'text' and 'password'
                className={`m-auto password form-control block h-9 w-full rounded-md px-4 ${styles.password}`}
                placeholder="Password "
                required
                id="password"
              />

              {/* passwordEye */}
              <span
                id="togglePassword"
                className={`ms-2 ${styles.uil2}`}
                onClick={handleTogglePassword}
                style={{ cursor: 'pointer' }}
              >
                {passwordVisible ? (
                  <i id="eyeOpen" className="fa-solid fa-eye"></i>
                ) : (
                  <i id="eyeClosed" className="fa fa-eye-slash"></i>
                )}
              </span>

            </div>




            {/* Checkbox */}
            <label className="flex items-center justify-center mb-6">
              <input
                type="checkbox"
                name="checkbox"
                className="float-left mr-1"
              />

              {/* i agree */}
              <span className="text-light inline-block cursor-pointer text-sm">
                I agree to receive market updates from Delivery Express
              </span>
            </label>





            {/* Sign Up Button */}
            <input
              type="submit"
              value="Sign Up"
              className={` submit mt-0 mb-3 btn ${styles.btn}`}
            />
          </form>



          {/*lines & OR*/}
          <div className="mb-6 mt-6 flex w-full justify-around items-center">
            <div className="w-80 ms-4 h-[2px] bg-gray-300"></div>
            <p className="text-sm text-light px-3">OR</p>
            <div className="w-80 me-4 h-[2px] bg-gray-300"></div>
          </div>




          {/* google signup button*/}
          <button className={`relative mb-4 flex font-bold text-center w-full cursor-pointer items-center  px-6 py-3 ${styles.googlesignup}`}>

            <i className="fa-brands fa-google-plus-g text-danger"></i>
            <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" className=" mx-auto pl-5 lg:pl-0">
              <span>Sign up with Google</span>
            </a>
          </button>



          {/* facebook signup button */}
          <button className={`relative flex font-bold text-center w-full cursor-pointer items-center  px-6 py-3 ${styles.facebooksignup}`}>
            <i className="fa-brands fa-facebook text-primary"></i>
            <a href="https://facebook.com" className="mx-auto pl-5">
              <span>Sign up with Facebook</span>
            </a>
          </button>


        </div>


        <div className="customer mt-2">
          <p>Already have an account? <a className={`Login ${styles.login}`} role='button' href='./Login'>Login</a></p>
        </div>



        {/* Terms of Use */}
        <p className="text-light text-sm max-w-80 mx-auto mt-6">
          By proceeding, you agree to Delivery Express
          <a href="#" className={` font-bold underline ml-1 ${styles.policy}`}>
            Terms of Use & Privacy Policy.
          </a>
        </p>
      </div>
    </div>
    // </Tilt>
  );
};

export default Register;