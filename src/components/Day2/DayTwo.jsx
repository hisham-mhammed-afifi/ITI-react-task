import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import TodoApp from "./TODO/TodoApp";

function DayTwo() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLisLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsRegister(true);
    }
    if (localStorage.getItem("loggedIn")) {
      setIsLisLoggedIn(true);
    }
  }, []);
  return (
    <>
      <Card className="shadow p-5">
        {isLoggedIn ? (
          <TodoApp />
        ) : isRegister ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </Card>
    </>
  );
}

export default DayTwo;
