export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }){
    return(
        <li > 
            {/* we put key here because, we need unique key so later on if we wanna do sepereate operation on this list/componennt we can, like here if we want to delete a specific todo, we can do that using the keys
            */}
            <label>
                <input onChange={e => toggleTodo(id, e.target.checked)} checked={completed} type="checkbox"/>
                {title}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}