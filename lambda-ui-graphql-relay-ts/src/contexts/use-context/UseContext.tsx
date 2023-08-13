import { useContext } from "react"
import { UserContext } from "@contexts2"

export function useThemeContext() {
    const user = useContext(UserContext)
    const selectedTheme = user?.user?.theme ? user?.user?.theme : 'light'
    return selectedTheme
}

export function useUserContext() {
    const user = useContext(UserContext)
    return user
}
