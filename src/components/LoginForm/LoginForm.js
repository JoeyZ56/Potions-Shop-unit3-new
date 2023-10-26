import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.scss';
import { motion } from 'framer-motion';

export default function LoginForm({ setUser }) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState('');

	function handleChange(evt) {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError('');
	}

	async function handleSubmit(evt) {
		// Prevent form from being submitted to the server
		evt.preventDefault();
		try {
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await usersService.login(credentials);
			setUser(user);
		} catch {
			setError('Log In Failed - Try Again');
		}
	}

	return (
		<div>
			<div className="form-container">
				<form autoComplete="off" onSubmit={handleSubmit}>
					{/* <br /> */}
					<input
						placeholder="Email"
						className={styles.email}
						type="text"
						name="email"
						value={credentials.email}
						onChange={handleChange}
						required
					/>

					<br />
					<input
						placeholder="Password"
						className={styles.password}
						type="password"
						name="password"
						value={credentials.password}
						onChange={handleChange}
						required
					/>
					<br />
					<motion.button
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						type="submit"
					>
						<b>LOG IN</b>
					</motion.button>
				</form>
			</div>
			<p className="error-message">&nbsp;{error}</p>
		</div>
	);
}
