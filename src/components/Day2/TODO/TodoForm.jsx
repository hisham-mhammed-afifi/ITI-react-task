import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

function TodoForm({ addTodo, todoEdit }) {
  const [updated, setUpdated] = useState({
    title: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: Date.now(), title: e.target[0].value });
    setUpdated({ title: "" });
    console.log("submitted");
  };
  useEffect(() => {
    setUpdated(todoEdit);
  }, [todoEdit]);

  const handleChange = (e) => {
    setUpdated({ todo: { title: e.target.value } });
    console.log("handleChange");
  };

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Form.Group className="mb-3" controlId="todo">
        <Form.Control
          value={updated.title}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Enter new todo"
        />
      </Form.Group>

      <Button variant="dark" type="submit">
        Add Todo
      </Button>
    </Form>
  );
}

export default TodoForm;
