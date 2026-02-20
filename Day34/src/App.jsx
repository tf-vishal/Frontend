import { useState } from "react"
import NavBar from "./components/Navbar/NavBar"
import SideBar from "./components/Sidebar/SideBar"
import Accordion from "./components/Accordion/Accordion"
import Modal from "./components/Modal/Modal"

export default function APP(){
    const [ theme, setTheme] = useState("dark");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fields = {
        Accordion: "<Accordion />",
        Modal: "<Modal />",
        Dropdown: "<Dropdown />",
        Tabs: "<Tabs />",
        Toast: "<Toast />",
        Carousel: "<Carousel />",
        "Live Search": "<LiveSearch />",
        Progress: "<Progress />",
        Cards: "<Cards />"
    }

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
            <div id="maincontent" style={{display: "flex", flexDirection: "row", width: "100%"}}>
                <SideBar  fields={fields} />
                <Accordion appStyle={appStyle} />
            </div>

            
                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

        </div>
    )
}