import { useContext } from 'react'
import { ThemeContext } from '../providers/theme'
// Custom hook for consuming theme
export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
