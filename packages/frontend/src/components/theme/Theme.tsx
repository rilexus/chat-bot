import React, {FC, useEffect, useState} from "react";
import  {ThemeProvider} from "@chat-bot/ui";

const fetchTheme = async (name: string) => {
	await new Promise((res) => setTimeout(res, 2000))
	//@ts-ignore
	return (await import('./defaultTheme')).default
}

const Theme: FC = ({children}) => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		// fetch different theme object dynamically, based on user taste
		const call = async () => {
			const defaultTheme = await fetchTheme('defaultTheme')
			setTheme(defaultTheme)
		}
		call()
	}, [])
	
	
	return <div>
		{!theme? <div>Loading theme ....</div>: <ThemeProvider theme={theme}>{children}</ThemeProvider>}
	</div>
}

export {Theme}
