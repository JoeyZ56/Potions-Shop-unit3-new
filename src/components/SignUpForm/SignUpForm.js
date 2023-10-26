import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss';

export default class SignUpForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirm: '',
		error: ''
	};

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
			error: ''
		});
	};

	handleSubmit = async (evt) => {
		evt.preventDefault();

		try {
			const formData = { ...this.state };
			delete formData.confirm;
			delete formData.error;
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await signUp(formData);

			// Baby step
			this.props.setUser(user);
		} catch {
			// An error happened on the server
			this.setState({ error: 'Sign Up Failed - Try Again' });
		}
	};

	// We must override the render method
	// The render method is the equivalent to a function-based component
	// (its job is to return the UI)
	render() {
		const disable = this.state.password !== this.state.confirm;
		return (
			<div>
				<div className="form-container">
					<form autoComplete="off" onSubmit={this.handleSubmit}>
						<input
							placeholder="Name"
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
							required
						/>
						<br />
						<input
							placeholder="Email"
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
						<br />
						<input
							placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
						<br />
						<input
							placeholder="Confirm Password"
							type="password"
							name="confirm"
							value={this.state.confirm}
							onChange={this.handleChange}
							required
						/>
						<br />
						<button
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							type="submit"
							disabled={disable}
							className={styles.button}
						>
							SIGN UP
						</button>
					</form>
				</div>
				<p className="error-message">&nbsp;{this.state.error}</p>
			</div>
		);
	}
}
