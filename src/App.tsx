import { Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense, useContext, useState } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import { classNames } from "./helpers/classNames/classNames";
export default function App() {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<div className={classNames("app", {}, [theme])}>
			<button onClick={setTheme}>Toggle theme</button>
			<Link to="/">Main</Link>
			<Link to="/about">About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPageAsync />} />
					<Route path="/about" element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
}
