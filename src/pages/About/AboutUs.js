import styles from './AboutUs.module.scss';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';

export default function AboutUs() {
	return (
		<div className={styles.AboutUs}>
			{/* <Link to="/orders/new" className="toneworderspage">
				New Order
			</Link> */}
			<div className="aboutLogo">
				<Logo />
			</div>
			<div className="aboutContainer">
				<ul className="aboutusinfo">
					<h1>Who are we?</h1>
					<h2>
						We are Master Alchemists here to provide the best potions for the
						best price
					</h2>
					<p>
						We have been in buisness for over 300 years. Providing all
						adveturers and heros with all the potion necessities they need to
						survive and thrive. We provide many types of potions that can help
						you in almost any situation. We have Master Alchemists that have
						studied and Perfected there mixology to provide flavorful and
						powerful elixirs.
					</p>
					<br />
				</ul>
			</div>
		</div>
	);
}
