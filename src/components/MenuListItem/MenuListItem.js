import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
	return (
		<div className={styles.MenuListItem}>
			<div className={styles.frontCard}>
				<div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>
					{menuItem.emoji}
				</div>
				<div className={styles.name}>{menuItem.name}</div>
				<div className={styles.buy}>
					<span>${menuItem.price.toFixed(2)}</span>
					<button
						className="btn-sm"
						onClick={() => handleAddToOrder(menuItem._id)}
					>
						ADD
					</button>
				</div>
			</div>
			<div className={styles.backCard}>
				<div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>
					{menuItem.emoji}
				</div>
				<div className={styles.description}>{menuItem.description}</div>
				<div className={styles.buy}>
					<span>${menuItem.price.toFixed(2)}</span>
					<button
						className="btn-sm"
						onClick={() => handleAddToOrder(menuItem._id)}
					>
						ADD
					</button>
				</div>
			</div>
		</div>
	);
}
