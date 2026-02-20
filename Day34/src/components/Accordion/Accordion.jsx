import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ appStyle }) {

  const [openItem, setOpenItem] = useState(null);

  const accordionFields = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks similar to HTML."
    },
    {
      question: "What are Components in React?",
      answer: "Components are the building blocks of any React application."
    }
  ];

  return (
    <section style={appStyle}>
      <div>
        {/* Repetative Component */}
        <h1>Accordion</h1>
        <p>Click a question to expand the answer.</p>
      </div>

      
       <div>
      {accordionFields.map((item) => (
        <AccordionItem key={item.question} item={item} openItem={openItem} setOpenItem={setOpenItem} />
        ))}

      </div>

    </section>
  );
}
