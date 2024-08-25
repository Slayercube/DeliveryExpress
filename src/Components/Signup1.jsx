import React, { useState } from 'react';
import styles from './Signup.module.css';
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



export const Signup = () => {

	// password visibility
	const [passwordVisible, setPasswordVisible] = useState(false);

	const handleTogglePassword = () => {
		setPasswordVisible(!passwordVisible);
	};

	// confirm password visibility
	const [visiblePassword, setVisiblePassword] = useState(false);

	const handleConfirmPassword = () => {
		setVisiblePassword(!visiblePassword);
	};



	const handleSubmit = (message) => {
		console.log(message);
	};


	return (
		<Tilt className="mt-5" options={options}>
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
					<div className="mx-auto w-full max-w-md">
						<form
							id={styles.form}
							onSubmit={(e) => {
								e.preventDefault();
								handleSubmit('my msg');
							}}
							name="wf-form-password"
							method="get">

							{/* inputbox1  */}
							<div className={`relative flex flex-col mb-4 inputbox1 mb-2 ${styles.inputbox1}`}>
								<label htmlFor="input1" className={`form-label font-bold text-dark mb-1 text-left`}></label>


								{/* input1 firstName */}
								<input
									type="text"
									id="input1"
									className={`m-auto input1 block h-9 w-full rounded-md px-4 py-6 text-sm input1 form-control ${styles.input1}`}
									placeholder="First Name"
									required
								/>

								<i className={`ms-2 uil uil-user ${styles.uil1}`}></i>
							</div>



							{/* inputbox2  */}
							<div className={`relative flex flex-col mb-4 inputbox2 mb-2 ${styles.inputbox2}`}>
								<label htmlFor="input2" className={`form-label font-bold text-dark mb-1 text-left`}></label>


								{/* input2 LastName */}
								<input
									type="text"
									id="input2"
									className={`m-auto input4 block h-9 w-full rounded-md px-4 py-6 text-sm 2 form-control ${styles.input2}`}
									placeholder="Last Name"
									required
								/>

								<i className={`ms-2 uil uil-user ${styles.uil1}`}></i>
							</div>



							{/* Phone Number Box */}
							<div className={`relative flex flex-col mb-4 phoneNumber mb-2 ${styles.phoneNumberBox}`}>
								<label htmlFor="phoneNumber" className={`form-label font-bold text-dark mb-1 text-left`}></label>


								{/* Phone Number */}
								<input
									type="number"
									id="phoneNumber"
									className={`m-auto input4 block h-9 w-full rounded-md px-4 py-6 text-sm 2 form-control ${styles.phoneNumber}`}
									placeholder="Phone Number"
									required
								/>

								<i className={`fa-solid phone fa-phone ms-2 ${styles.phone}`}></i>
							</div>


							{/* Gender radio */}
							<div className="flex mb-3 justify-center radio gender">

								{/* male radio */}
								<p className='border rounded text-dark bg-light me-5 px-2'>Male

									<input
										name='radio'
										placeholder='Male'
										type='radio'
										className='ms-2'
									></input>
								</p>



								{/* female radio */}
								<p className=' border rounded text-dark bg-light ms-5 px-2'>Female

									<input
										name='radio'
										placeholder='Female'
										type='radio'
										className='ms-2'
									>

									</input>
								</p>

							</div>




							{/* inputbox3 */}
							<div className={`relative flex flex-col mb-4 inputbox3 mb-2 ${styles.inputbox3}`}>
								<label htmlFor="input3" className={`form-label font-bold text-dark mb-1 text-left`}></label>


								{/* input3 email */}
								<input
									type="email"
									id="input3"
									className={`m-auto input3 block h-9 w-full rounded-md px-4 py-6 text-sm input3 form-control ${styles.input3}`}
									placeholder="Email Address"
									required
								/>

								<i className={`ms-2 fa-solid email fa-envelope ${styles.email}`}></i>
							</div>



							{/* inputbox4 */}
							<div className={`relative flex flex-col mb-2 inputbox4 ${styles.inputbox4}`}>
								<label htmlFor="input4" className="form-label font-bold mb-1 text-dark text-left"></label>


								{/*input4 password */}
								<input
									type={passwordVisible ? "text" : "password"}  // This toggles the type between 'text' and 'password'
									className={`m-auto input4 form-control block h-9 w-full rounded-md px-4 ${styles.input4}`}
									placeholder="Password "
									required
									id="input4"
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

							</div>


							{/* inputbox5 */}
							<div className={`relative flex flex-col mb-2 inputbox5 ${styles.inputbox5}`}>
								<label htmlFor="input5" className="form-label font-bold mb-1 text-dark text-left"></label>


								{/*input5 confirm password */}
								<input
									type={visiblePassword ? "text" : "password"}  // This toggles the type between 'text' and 'password'
									className={`m-auto input5 form-control block h-9 w-full rounded-md px-4 ${styles.input5}`}
									placeholder="Password "
									required
									id="input5"
								/>

								{/* passwordEye */}
								<span
									id="passwordToggle"
									className={`ms-2 ${styles.uil2}`}
									onClick={handleConfirmPassword}
									style={{ cursor: 'pointer' }}
								>
									{visiblePassword ? (
										<i id="openEye" className="uil uil-eye"></i>
									) : (
										<i id="closedEye" className="uil uil-eye-slash"></i>
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
						<p>Already have an account? <a className={`Login ${styles.login}`} href='./Login'>Login</a></p>
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
		</Tilt>
	);
};
