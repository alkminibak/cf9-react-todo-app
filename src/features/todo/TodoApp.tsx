import TodoForm from "./TodoForm.tsx";
import {useRef} from "react";
import {useTodos} from "./hooks/useTodos.ts";
import TodoList from "./TodoList.tsx";
import TodoStats from "./hooks/TodoStats.tsx";

const TodoApp = () => {
   const inputRef = useRef<HTMLInputElement>(null);
   const { todos, addTodo, deleteTodo, editTodo, toggleTodo, clearAll } = useTodos();

   const handleAdd = (text: string) => {
      addTodo(text);
      inputRef.current?.focus();
      console.log(todos);
   }

   return (
      <>
         <div className="max-w-sm mx-auto pb-12">
            <h1 className="text-center text-2xl py-8">To-Do List</h1>
            <TodoForm onAdd={handleAdd} inputRef={inputRef}/>

            <TodoList
               todos={todos}
               onToggle={toggleTodo}
               onEdit={editTodo}
               onDelete={deleteTodo}
            />

            <TodoStats todos={todos}/>

         </div>
      </>
   )
}

export default TodoApp;