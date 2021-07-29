import React from 'react';
import './index.css';
const Login = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignup,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError,
	} = props;

	return (
		<section className="login">
			<div className="loginContainer">
				<h1 class='Login'>Login</h1>
				<h3 class='login-account'>Login to your account</h3>
				<img class='pfp' src="https://img.tpng.net/detail/500x0_202-2024792_profile-icon-png.png"></img>
				<img class='lock' src='https://ak.picdn.net/shutterstock/videos/1022778145/thumb/1.jpg?ip=x480'></img>
				<input class="email" placeholder = 'Email'
					type="text"
					autoFocus
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMsg">{emailError}</p>
				<input
					type="password"
					class='password'
					placeholder = 'Password'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<p className="errorMsg">{passwordError}</p>
				<div className="btnContainer"></div>
			</div>
		</section>
	);
};

export default Login;
