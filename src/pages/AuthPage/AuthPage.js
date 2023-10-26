import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
import { motion } from 'framer-motion';

export default function AuthPage({ setUser }) {
	const [showLogin, setShowLogin] = useState(true);

	return (
		<main className={styles.AuthPage}>
			<div>
				<Logo />
				<br />
			</div>
			{showLogin ? (
				<LoginForm setUser={setUser} />
			) : (
				<SignUpForm setUser={setUser} />
			)}

			<div className={styles.links}>
				<motion.h3
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.5, type: 'tween' }}
					onClick={() => setShowLogin(!showLogin)}
				>
					{showLogin ? 'SIGN UP' : 'LOG IN'}
				</motion.h3>
			</div>
		</main>
	);
}
