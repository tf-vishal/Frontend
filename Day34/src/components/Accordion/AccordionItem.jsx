export default function AccordionItem({ item, openItem, setOpenItem }) {
  return (
        <div key={item.question} className="accordion-item" >
            
            <button
              className="accordion-btn"
              onClick={() => setOpenItem(prev => prev === item.question ? null : item.question)}
            >
              <span>{item.question}</span>
              <span>{openItem === item.question ? "−" : "+"}</span>
            </button>
            
            {openItem === item.question && (
              <div className="accordion-content">
                {item.answer}
              </div>
            )}

          </div>
    )
}