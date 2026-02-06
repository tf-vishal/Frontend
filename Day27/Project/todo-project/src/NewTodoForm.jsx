import { useState } from "react"

export function NewTodoForm({ onSubmit }){
    
    const [newItem, setNewItem] = useState("")
      // Below is the explanation of the code above
      // const [current value, function to update the value] = starting value

    function handleSubmit(e){
        e.preventDefault() //THis gonna prevent my page from refreshing
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label  htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />  
          {/* Here we called the current value i.e. newItem
            and when we input anything, it gonna fire an event e where, it will set the value of newItem to the value we put inside the input bar
            - Basically the value is changing. when we input, we tellign that take the new value and update it into the newItem value and rerun the component. so the newItem value get updated to the value we typed.
           */}
        </div>
        <button className="btn">Add</button>
      </form>
    )
}