import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { useMemo, useState } from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: () =>
				setTheme(theme === Theme.DARK ? Theme.NORMAL : Theme.DARK),
		}),
		[theme]
	);
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
