import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return (
        <ul className="list">
            {todos.length === 0 && "No TODOS"}
            {/* In React (JSX), we use {} when we want to write JavaScript inside HTML-like code. */}
            {todos.map(todo => {
            return (
                <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            )
            })}
      </ul>
    )
}