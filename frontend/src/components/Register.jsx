import React, { useState } from "react";
import { userRegister } from "../api/RegisterApi";
export default function Register() {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister(creds).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={creds.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={creds.password}
        />
        <button>Register</button>
      </form>
    </div>
  );
}
