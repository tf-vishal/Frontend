import ModalBox from "./ModalBox";
import { useState } from "react";

export default function Modal(){
    const [isModalOpen, setIsModalOpen] = useState(false);

  
    return(
        <section>
            <div>
                <h1>Modal/Popup</h1>
                <p>Click the button to open a modal with an overlay.</p>
            </div>
            {/* The Open Modal button div */}

            <div>
                <button onClick={() => setIsModalOpen(true)}>Open Modal

                </button>
                {isModalOpen && <ModalBox closeModal={()=> setIsModalOpen(false)} />}
            </div>
        </section>
    )
}