import { useState } from "react"
import NavBar from "./components/NavBar"

export default function APP(){
    const [ theme, setTheme] = useState("light")

    function toggleTheme(){
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    const appStyle = {
        backgroundColor: theme === "light" ? "#f5f5f5" : "#121212",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
    }


    return(
        <div style={appStyle}>
            <NavBar theme={theme} toggleTheme={toggleTheme} />
            
        </div>
    )
}