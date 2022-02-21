import React, { useState } from "react";
import hasWhiteSpace from "../../utils/haswhitespace";
import validateEmail from "../../utils/validateEmail";
import { BsFillEyeFill } from "react-icons/bs";

function RegisterForm() {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const disabled = () => {
    return (
      errors.name ||
      errors.email ||
      errors.username ||
      errors.password ||
      errors.confirmPassword
    );
  };

  const showPass = () => {
    setShow(!show);
  };

  const onSubmit = (e) => {
    if (
      errors.name === "" ||
      errors.email === "" ||
      errors.username === "" ||
      errors.password === "" ||
      errors.confirmPassword === ""
    ) {
      e.preventDefault();
    } else {
      localStorage.setItem("token", JSON.stringify(userData));
    }
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "name":
        setErrors({
          ...errors,
          name: e.target.value.length === 0 ? "Name is Required" : null,
        });
        setUserData({
          ...userData,
          name: e.target.value,
        });

        break;
      case "email":
        setErrors({
          ...errors,
          email:
            e.target.value.length === 0
              ? "Email is Required"
              : !validateEmail(e.target.value)
              ? "Invalid format"
              : null,
        });
        setUserData({
          ...userData,
          email: e.target.value,
        });

        break;
      case "username":
        setErrors({
          ...errors,
          username:
            e.target.value.length === 0
              ? "Username is Required"
              : hasWhiteSpace(e.target.value)
              ? "Username should NOT containe spaces"
              : null,
        });
        setUserData({
          ...userData,
          username: e.target.value,
        });

        break;
      case "password":
        setErrors({
          ...errors,
          password:
            e.target.value.length === 0
              ? "Password is Required"
              : e.target.value.length < 3
              ? "password at least 3 chars"
              : null,
        });
        setUserData({
          ...userData,
          password: e.target.value,
        });

        break;
      case "confirmPassword":
        setErrors({
          ...errors,
          confirmPassword:
            e.target.value.length === 0
              ? "Confirm Password is Required"
              : e.target.value.length < 3
              ? "Confirm Password at least 3 chars"
              : e.target.value !== userData.password
              ? "Don't match"
              : null,
        });
        setUserData({
          ...userData,
          confirmPassword: e.target.value,
        });
        break;
    }
  };
  return (
    <>
      <h3>Register Form</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className={errors.name ? "text-danger" : "text-success"}>
          {errors.name ? errors.name : null}
        </div>
        {/* ---------------------------- */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            onChange={(e) => onChange(e)}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className={errors.email ? "text-danger" : "text-success"}>
          {errors.email ? errors.email : null}
        </div>
        {/* ------------------------------ */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Username
          </label>
          <input
            name="username"
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        <div className={errors.username ? "text-danger" : "text-success"}>
          {errors.username ? errors.username : null}
        </div>
        {/* ------------------------------ */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            onChange={(e) => onChange(e)}
            type={show ? "text" : "password"}
            className="form-control"
            id="password"
          />
          <BsFillEyeFill onClick={showPass} />
        </div>
        <div className={errors.password ? "text-danger" : "text-success"}>
          {errors.password ? errors.password : null}
        </div>
        {/* ------------------------------ */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            onChange={(e) => onChange(e)}
            type="password"
            className="form-control"
            id="confirmPassword"
          />
        </div>
        <div
          className={errors.confirmPassword ? "text-danger" : "text-success"}
        >
          {errors.confirmPassword ? errors.confirmPassword : null}
        </div>

        <button disabled={disabled()} type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      {/* pattern="^[^@]+@[^@]+\.[^@]+$" */}
    </>
  );
}

export default RegisterForm;
