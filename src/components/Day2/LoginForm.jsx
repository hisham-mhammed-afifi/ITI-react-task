import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import validateEmail from "../../utils/validateEmail";

function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    wrong: "",
  });
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(token);
    setErrors({
      ...errors,
      wrong:
        user.email !== userData.email && user.password !== userData.password
          ? "Wrong Email or Password"
          : null,
    });
  };
  const onInput = (e) => {
    switch (e.target.name) {
      case "email":
        setUserData({
          ...userData,
          email: e.target.value,
        });
        setErrors({
          ...errors,
          email:
            e.target.value.length === 0
              ? "Email is Required"
              : !validateEmail(e.target.value)
              ? "Invalid format"
              : null,
        });
        setValidated(true);

        break;
      case "password":
        setUserData({
          ...userData,
          password: e.target.value,
        });

        setErrors({
          ...errors,
          password:
            e.target.value.length === 0
              ? "Password is Required"
              : e.target.value.length < 3
              ? "password at least 3 chars"
              : null,
        });
        setValidated(true);

        break;
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const token = localStorage.getItem("token");
      const user = JSON.parse(token);
      if (
        user.email !== userData.email ||
        user.password !== userData.password
      ) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        localStorage.setItem("loggedIn", true);
      }
      setErrors({
        ...errors,
        wrong:
          user.email !== userData.email || user.password !== userData.password
            ? "Wrong Email or Password"
            : "",
      });
    }
    setValidated(true);
  };

  return (
    <>
      {errors.wrong !== "" && (
        <div className="alert alert-danger">{errors.wrong}</div>
      )}

      <h3>Login Form</h3>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => onInput(e)}
            value={userData.email}
            required
            type="email"
            name="email"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => onInput(e)}
            value={userData.password}
            required
            minLength="3"
            type="password"
            name="password"
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good</Form.Control.Feedback>
        </Form.Group>

        <Button className="my-3" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
