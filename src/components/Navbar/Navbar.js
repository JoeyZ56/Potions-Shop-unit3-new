import React, { createContext, useState } from 'react';
import styles from './Navbar.module.scss';
import { motion } from 'framer-motion';

export default function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.nav} id="nav">
				<motion.a
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.5, type: 'tween' }}
					href="/orders/new"
				>
					New Order
				</motion.a>
				<motion.a
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.5, type: 'tween' }}
					href="/orders"
				>
					Orders
				</motion.a>
				<motion.a
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.5, type: 'tween' }}
					href="/about"
				>
					About
				</motion.a>
			</div>
		</div>
	);
}
