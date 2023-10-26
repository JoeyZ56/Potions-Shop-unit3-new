import styles from './Logo.module.scss';
import { motion } from 'framer-motion';

export default function Logo() {
	return (
		<motion.div
			whileInView={{ opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.5, type: 'tween' }}
			className={styles.Logo}
		>
			<div className={styles.title}>
				<b>POTIONS SHOP</b>
			</div>
		</motion.div>
	);
}
