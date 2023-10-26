import React, { createContext, useState } from 'react';
import styles from './Navbar.module.scss';
import UserLogOut from '../UserLogOut/UserLogOut';

export default function Navbar({ user, setUser, toggleTheme, UserLogOut }) {
	return (
		<div className={styles.container}>
			<div className={styles.nav}>
				<a href="/">Home</a>
				<a href="/orders/new">New Order</a>
				<a href="/orders">Orders</a>
				<a href="/about">About</a>

				<button id="toggle-emoji" onClick={toggleTheme}>
					☀️
				</button>
			</div>
		</div>
	);
}
