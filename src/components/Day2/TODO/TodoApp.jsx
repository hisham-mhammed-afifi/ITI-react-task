import React, { useState } from "react";
import { Card } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoEdit, setTodoEdit] = useState({
    id: null,
    title: "",
  });

  const addTodo = (newTodo) => {
    if (todoEdit.id !== null) {
      var index = todos.findIndex((t) => t.id == todoEdit.id);
      console.log(index);
      todos[index] = { id: todoEdit.id, title: newTodo.title };
      setTodos(todos);
      setTodoEdit({ id: null, title: "" });
    } else {
      setTodos([newTodo, ...todos]);
    }
  };

  const deleteTodo = (id) => {
    const result = todos.filter((t) => {
      return t.id !== id;
    });
    setTodos([...result]);
  };
  const updateTodo = (id) => {
    const todo = todos.find((t) => {
      return t.id === id;
    });
    console.log(todo);
    setTodoEdit(todo);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} todoEdit={todoEdit} />
      {todos.length === 0 ? (
        <Card className="text-center p-1 mt-3">No TODOS to show</Card>
      ) : (
        <TodoList
          data={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          todoEdit={todoEdit}
        />
      )}
    </>
  );
}

export default TodoApp;
