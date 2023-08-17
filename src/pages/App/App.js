import React, { useState, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export const ThemeContext = createContext(null);

export default function App() {
	const [user, setUser] = useState(getUser());
	const [theme, setTheme] = useState('theme1');

	const toggleTheme = () => {
		setTheme((curr) => (curr === 'theme1' ? 'theme2' : 'theme1'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div id={theme}>
				<label className="theme-icon">
					THEME
					<input
						className="checkbox"
						type="checkbox"
						vlaue={theme}
						onClick={toggleTheme}
					/>
				</label>

				<main className={styles.App}>
					{user ? (
						<>
							<Routes>
								{/* client-side route that renders the component instance if the path matches the url in the address bar */}
								<Route
									path="/orders/new"
									element={<NewOrderPage user={user} setUser={setUser} />}
								/>
								<Route
									path="/orders"
									element={<OrderHistoryPage user={user} setUser={setUser} />}
								/>
								{/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
								<Route path="/*" element={<Navigate to="/orders/new" />} />
							</Routes>
						</>
					) : (
						<AuthPage setUser={setUser} />
					)}
				</main>
			</div>
		</ThemeContext.Provider>
	);
}
