import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { FaEdit, FaTimes } from "react-icons/fa";

function TodoList({ data, deleteTodo, updateTodo }) {
  const markDone = (e) => {
    e.target.style.textDecoration = "line-through";
  };

  return (
    <ListGroup variant="flush">
      {data.map((t) => {
        return (
          <ListGroup.Item key={t.id}>
            <p onClick={(e) => markDone(e)}>{t.title}</p>
            <Row>
              <Col xs={{ span: 1, offset: 11 }}>
                <FaTimes onClick={() => deleteTodo(t.id)} />
                <FaEdit onClick={() => updateTodo(t.id)} />
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TodoList;
