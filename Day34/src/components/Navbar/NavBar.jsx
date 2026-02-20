import { useState } from "react"

export default function NavBar({theme, toggleTheme}){

    const navStyle = {
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };
    

    return(
       <nav style={navStyle} id="navbar">
            <div id="left-div">
                <img id="nav-logo" src="/src/logos/lightning-icon.png" alt="Logo" />
                <span id="nav-header">Component Playground</span>
            </div>

            <div id="right-div">
                <button onClick={toggleTheme} >{theme === "light" ? "Dark" : "Light"} Mode</button>
            </div>
       </nav>
    )
}