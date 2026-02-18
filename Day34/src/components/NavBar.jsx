import { useState } from "react"

export default function NavBar({theme, toggleTheme}){

    const navStyle = {
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff"
    }
    

    return(
       <nav style={navStyle}>
            <div>
                <img src="/src/logos/lightning-icon.png" alt="Logo" />
                <span>Component Playground</span>
            </div>

            <div>
                <button onClick={toggleTheme} >{theme === "light" ? "Dark" : "Light"} Mode</button>
            </div>
       </nav>
    )
}