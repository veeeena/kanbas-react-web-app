import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <input type="text" className="form-control my-2" placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      </div>
      <div>
        <input type="password" className="form-control" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      </div>
      <div>
        <button className="btn btn-danger my-2 me-2" onClick={signin}> Sign In </button>
      </div>
    </div>
  );
}
export default Signin;