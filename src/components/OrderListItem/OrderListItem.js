import styles from './OrderListItem.module.scss';
import { motion } from 'framer-motion';

export default function OrderListItem({
	order,
	isSelected,
	handleSelectOrder
}) {
	return (
		<motion.div
			whileInView={{ opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.5, type: 'tween' }}
			className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`}
			onClick={() => handleSelectOrder(order)}
		>
			<div>
				<div>
					Order Id: <span className="smaller">{order.orderId}</span>
				</div>
				<div className="smaller">
					{new Date(order.updatedAt).toLocaleDateString()}
				</div>
			</div>
			<div className="align-rt">
				<div>${order.orderTotal.toFixed(2)}</div>
				<div className="smaller">
					{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}
				</div>
			</div>
		</motion.div>
	);
}
