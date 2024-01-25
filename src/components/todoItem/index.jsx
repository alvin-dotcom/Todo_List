import React from "react";
import useTodoStore from "../../store/todoStore";
import { motion } from "framer-motion";

const TodoItem = (todo) => {
  const { removeTodo, toggleTodo } = useTodoStore();
  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.li variants={variants}
      inital="inital"
      animate="animate"
      className={`flex items-center p-2`}
      layout
    >

    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} className="form-checkbox h-5 w-5"/>
    <span className={`flex-1 ml-2 ${todo.completed ? 'line-through' : ''}`} > {todo.text}</span>   
    <button onClick={() => removeTodo(todo.id)} className="px-2 py-1 bg-red-500 text-white rounded">
    Delete
    </button>
    </motion.li>
  )
}

export default TodoItem
