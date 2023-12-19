import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        type="text" className="form-control my-2" placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input
        className="form-control" placeholder="Password"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button className="btn btn-danger my-2 me-2" onClick={signup}>
        Sign Up
      </button>
    </div>
  );
}
export default Signup;